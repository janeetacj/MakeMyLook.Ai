import {
  Check,
  Circle,
  Palette,
  ScanFace,
  Shirt,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { analyzeOutfitImage } from '../../services/outfitApi';

import './OutfitAnalyzing.css';

function OutfitAnalyzing() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    selectedSkinTone,
    capturedImage,
    analysisResult,
    beautyProfile,
    outfitImage,
    source,
  } = location.state || {};

  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [outfitAnalysisResult, setOutfitAnalysisResult] = useState(null);
  const [outfitAnalysisError, setOutfitAnalysisError] = useState('');

  const analysisSteps = [
    {
      icon: Shirt,
      title: 'Detecting your outfit',
      description: 'Identifying clothing and style',
    },
    {
      icon: Palette,
      title: 'Reading colours',
      description: 'Finding dominant and accent colours',
    },
    {
      icon: ScanFace,
      title: 'Checking compatibility',
      description: 'Comparing colours with your skin tone',
    },
    {
      icon: WandSparkles,
      title: 'Creating your look',
      description: 'Preparing personalized recommendations',
    },
  ];

  useEffect(() => {
    let isMounted = true;

    const runOutfitAnalysis = async () => {
      try {
        setOutfitAnalysisError('');

        if (!outfitImage) {
          throw new Error('No outfit image is available for analysis.');
        }

        const response = await fetch(outfitImage);
        const blob = await response.blob();

        const file = new File(
          [blob],
          'outfit-analysis.jpg',
          {
            type: blob.type || 'image/jpeg',
          }
        );

        const result = await analyzeOutfitImage(file);

        if (isMounted) {
          setOutfitAnalysisResult(result);
        }
      } catch (error) {
        console.error('Outfit analysis error:', error);

        if (isMounted) {
          setOutfitAnalysisError(
            error.message || 'Unable to analyze the outfit image.'
          );
        }
      }
    };

    runOutfitAnalysis();

    return () => {
      isMounted = false;
    };
  }, [outfitImage]);

  useEffect(() => {
    let progressValue = 0;

    const interval = setInterval(() => {
      progressValue += 1;

      setProgress(progressValue);

      if (progressValue < 25) {
        setCurrentStep(0);
      } else if (progressValue < 50) {
        setCurrentStep(1);
      } else if (progressValue < 75) {
        setCurrentStep(2);
      } else {
        setCurrentStep(3);
      }

      if (progressValue >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          navigate('/outfit/result', {
            state: {
              selectedSkinTone,
              capturedImage,
              analysisResult,
              beautyProfile,
              outfitImage,
              source,
              outfitAnalysisResult,
            },
          });
        }, 700);
      }
    }, 55);

    return () => {
      clearInterval(interval);
    };
  }, [
    navigate,
    selectedSkinTone,
    capturedImage,
    analysisResult,
    beautyProfile,
    outfitImage,
    source,
    outfitAnalysisResult,
  ]);

  return (
    <main className="outfit-analyzing-page">

      <div className="outfit-analyzing-container">

        {/* Brand */}

        <div className="analysis-brand">

          <div className="analysis-brand-icon">
            <Sparkles size={17} />
          </div>

          <span>
            MakeMyLook<span>.Ai</span>
          </span>

        </div>


        {/* Main visual */}

        <section className="analysis-visual">

          <div className="analysis-glow" />

          <div className="analysis-ring ring-one" />
          <div className="analysis-ring ring-two" />
          <div className="analysis-ring ring-three" />

          <div className="analysis-photo-wrapper">

            {outfitImage ? (
              <img
                src={outfitImage}
                alt="Your outfit"
                className="analysis-photo"
              />
            ) : (
              <div className="analysis-photo-placeholder">
                <Shirt size={38} />
              </div>
            )}

            <div className="analysis-scan-line" />

            <div className="analysis-corner top-left" />
            <div className="analysis-corner top-right" />
            <div className="analysis-corner bottom-left" />
            <div className="analysis-corner bottom-right" />

          </div>

          <div className="analysis-ai-badge">
            <Sparkles size={12} />
            AI VISION
          </div>

        </section>


        {/* Heading */}

        <section className="analysis-heading">

          <p>
            MAKE MY LOOK.AI
          </p>

          <h1>
            Creating your
            <span>perfect look</span>
          </h1>

          <div className="analysis-progress-text">

            <strong>
              {progress}%
            </strong>

            <span>
              Analyzing your outfit
            </span>

          </div>

        </section>


        {/* Progress */}

        <div className="analysis-progress-bar">

          <div
            className="analysis-progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>


        {/* Steps */}

        <section className="analysis-steps">

          {analysisSteps.map((step, index) => {

            const Icon = step.icon;

            const completed = progress >= (index + 1) * 25;
            const active = currentStep === index;

            return (
              <div
                className={`analysis-step ${
                  completed ? 'completed' : ''
                } ${
                  active ? 'active' : ''
                }`}
                key={step.title}
              >

                <div className="analysis-step-icon">

                  {completed ? (
                    <Check size={14} />
                  ) : active ? (
                    <Icon size={14} />
                  ) : (
                    <Circle size={8} />
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

                <div className="analysis-step-status">

                  {completed ? (
                    <Check size={12} />
                  ) : active ? (
                    <span className="active-dot" />
                  ) : null}

                </div>

              </div>
            );

          })}

        </section>


        {/* AI information */}

        <section className="analysis-info">

          <div className="analysis-info-icon">
            <Sparkles size={14} />
          </div>

          <div>

            <strong>
              Personalized for you
            </strong>

            <p>
              We're combining your skin profile,
              undertone and outfit colours to
              create recommendations just for you.
            </p>

          </div>

        </section>


        <p className="analysis-security">
          Your photos stay private and are used only
          to generate your personalized look.
        </p>

      </div>

    </main>
  );
}

export default OutfitAnalyzing;