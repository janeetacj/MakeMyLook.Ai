import {
  ArrowLeft,
  Check,
  ScanFace,
  Sparkles,
} from 'lucide-react';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { analyzeSkinImage } from '../../services/skinApi';

import './Scan.css';

const analysisSteps = [
  {
    id: 1,
    title: 'Detecting facial region',
    description: 'Locating visible skin areas',
  },
  {
    id: 2,
    title: 'Analyzing skin tone',
    description: 'Comparing tone with your reference',
  },
  {
    id: 3,
    title: 'Checking undertone',
    description: 'Identifying warm, cool or neutral tones',
  },
  {
    id: 4,
    title: 'Preparing your profile',
    description: 'Creating your personalized beauty profile',
  },
];

function Analyzing() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    selectedSkinTone,
    capturedImage,
    selectedFile,
  } = location.state || {};

  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(8);

  const [analysisResult, setAnalysisResult] = useState(null);
  const [analysisError, setAnalysisError] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep((previous) => {
        if (previous >= analysisSteps.length) {
          return previous;
        }

        return previous + 1;
      });
    }, 1300);

    const progressTimer = setInterval(() => {
      setProgress((previous) => {
        if (previous >= 94) {
          return previous;
        }

        return previous + 2;
      });
    }, 100);

    return () => {
      clearInterval(stepTimer);
      clearInterval(progressTimer);
    };
  }, []);

  useEffect(() => {
  let isMounted = true;

  const runSkinAnalysis = async () => {
    try {
      setIsAnalyzing(true);
      setAnalysisError('');

      let imageFile = selectedFile;

      if (!imageFile && capturedImage) {
        const response = await fetch(capturedImage);
        const blob = await response.blob();

        imageFile = new File(
          [blob],
          'camera-scan.jpg',
          { type: 'image/jpeg' }
        );
      }

      if (!imageFile) {
        throw new Error(
          'No skin scan image was available for analysis.'
        );
      }

      const result = await analyzeSkinImage(imageFile);

      if (isMounted) {
        setAnalysisResult(result);
      }
    } catch (error) {
      console.error('Skin analysis error:', error);

      if (isMounted) {
        setAnalysisError(
          error.message || 'Skin analysis failed.'
        );
      }
    } finally {
      if (isMounted) {
        setIsAnalyzing(false);
      }
    }
  };

  runSkinAnalysis();

  return () => {
    isMounted = false;
  };
}, [capturedImage, selectedFile]);

  const handleContinue = () => {
  if (!analysisResult) {
    return;
  }

  navigate('/scan/result', {
    state: {
      selectedSkinTone,
      capturedImage,
      selectedFile,
      analysisResult,
    },
  });
};

  return (
    <main className="analyzing-page">

      <div className="analyzing-container">

        {/* Header */}

        <header className="scan-header">

          <button
            className="scan-back-button"
            onClick={() => navigate('/scan/camera')}
            aria-label="Back to scan"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="scan-progress">
            <span className="active" />
            <span className="active" />
            <span className="active" />
          </div>

          <div className="scan-step">
            ANALYSIS
          </div>

        </header>


        {/* Main visual */}

        <section className="analysis-hero">

          <div className="analysis-photo-wrapper">

            {capturedImage ? (
              <img
                src={capturedImage}
                alt="Your skin scan"
                className="analysis-photo"
              />
            ) : (
              <div className="analysis-photo-placeholder">
                <ScanFace size={42} />
              </div>
            )}

            <div className="analysis-scan-line" />

            <div className="analysis-corner top-left" />
            <div className="analysis-corner top-right" />
            <div className="analysis-corner bottom-left" />
            <div className="analysis-corner bottom-right" />

            <div className="analysis-badge">
              <Sparkles size={13} />
              AI ANALYSIS
            </div>

          </div>


          <div className="analysis-heading">

            <p className="scan-eyebrow">
              MAKE MY LOOK.AI
            </p>

            <h1>
              Understanding
              <span>your look.</span>
            </h1>

            <p>
              Our AI is analyzing your image to
              create recommendations personalized
              to you.
            </p>

          </div>

        </section>


        {/* Progress */}

        <section className="analysis-progress-section">

          <div className="analysis-progress-header">

            <span>
              AI analysis in progress
            </span>

            <strong>
              {progress}%
            </strong>

          </div>

          <div className="analysis-progress-track">
            <div
              className="analysis-progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

        </section>


        {/* Analysis steps */}

        <section className="analysis-steps">

          {analysisSteps.map((step) => {

            const completed =
              currentStep > step.id;

            const active =
              currentStep === step.id;

            return (
              <div
                key={step.id}
                className={`analysis-step-item ${
                  active ? 'active' : ''
                } ${
                  completed ? 'completed' : ''
                }`}
              >

                <div className="analysis-step-icon">

                  {completed ? (
                    <Check size={15} />
                  ) : (
                    <span>
                      {step.id}
                    </span>
                  )}

                </div>

                <div className="analysis-step-content">

                  <strong>
                    {step.title}
                  </strong>

                  <span>
                    {step.description}
                  </span>

                </div>

                {active && (
                  <div className="analysis-loading">
                    <span />
                    <span />
                    <span />
                  </div>
                )}

              </div>
            );
          })}

        </section>


        {/* Reference */}

        {selectedSkinTone && (
          <div className="analysis-reference">

            <div
              className="analysis-reference-swatch"
              style={{
                backgroundColor:
                  selectedSkinTone.color,
              }}
            />

            <div>

              <span>
                INITIAL REFERENCE
              </span>

              <strong>
                {selectedSkinTone.name}
              </strong>

            </div>

          </div>
        )}

        {analysisError && (
          <div className="camera-error">
            {analysisError}
          </div>
        )}

        {/* Continue */}

        <button
          className={`analysis-result-button ${
            currentStep >= analysisSteps.length
              ? 'ready'
              : ''
          }`}
          onClick={handleContinue}
          disabled={
            currentStep < analysisSteps.length ||
            isAnalyzing ||
            !analysisResult
          }
        >
          {analysisError
            ? 'Analysis Failed'
            : isAnalyzing || currentStep < analysisSteps.length
              ? 'Analyzing Your Skin...'
              : 'View My Skin Analysis'}
        </button>


        <p className="analysis-security-note">
          Analysis is performed for your personalized
          beauty recommendations.
        </p>

      </div>

    </main>
  );
}

export default Analyzing;
