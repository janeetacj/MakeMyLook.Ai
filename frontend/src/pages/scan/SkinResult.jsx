import {
  ArrowLeft,
  Check,
  ChevronRight,
  Droplets,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Sun,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';
import { buildBeautyProfile } from '../../services/beautyProfile';

import './Scan.css';

function SkinResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const savedProfile = JSON.parse(
    localStorage.getItem('makemylook_beauty_profile') || '{}'
  );

  const {
    selectedSkinTone,
    capturedImage,
    analysisResult,
  } = location.state || {};


  const backendAnalysis = analysisResult?.analysis;

  const skinTone =
    backendAnalysis?.skin_tone ||
    selectedSkinTone?.name ||
    'Not available';

  const skinType =
    backendAnalysis?.skin_type || 'Not available';

  const confidence = Math.round(
    (backendAnalysis?.confidence || 0) * 100
  );

  const concerns = backendAnalysis?.concerns || [];

  const toneDescription = backendAnalysis?.skin_tone
    ? `Your AI skin scan classified your complexion as ${backendAnalysis.skin_tone}.`
    : 'Your skin tone could not be determined with sufficient confidence.';

  const handleContinue = () => {
    const beautyProfile = buildBeautyProfile(
      analysisResult,
      savedProfile
    );

    navigate('/scan/outfit', {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
        beautyProfile,
      },
    });
  };

  return (
    <main className="result-page">

      <div className="result-container">

        {/* Header */}

        <header className="scan-header">

          <button
            className="scan-back-button"
            onClick={() =>
              navigate('/scan/analyzing', {
                state: {
                  selectedSkinTone,
                  capturedImage,
                },
              })
            }
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="scan-progress">
            <span className="active" />
            <span className="active" />
            <span className="active" />
          </div>

          <div className="scan-step">
            RESULT
          </div>

        </header>


        {/* Heading */}

        <section className="result-heading">

          <div className="result-title-icon">
            <Sparkles size={20} />
          </div>

          <p className="scan-eyebrow">
            YOUR AI SKIN PROFILE
          </p>

          <h1>
            Meet your
            <span>skin profile.</span>
          </h1>

          <p>
            Here's what our preliminary analysis
            discovered from your scan.
          </p>

        </section>


        {/* Photo + profile */}

        <section className="profile-result-card">

          <div className="result-photo-wrapper">

            {capturedImage ? (
              <img
                src={capturedImage}
                alt="Your analyzed skin"
                className="result-photo"
              />
            ) : (
              <div className="result-photo-placeholder">
                <ScanFace size={40} />
              </div>
            )}

            <div className="photo-analysis-badge">
              <Check size={13} />
              Analyzed
            </div>

          </div>


          <div className="profile-main">

            <span className="profile-label">
              DETECTED SKIN TONE
            </span>

            <h2>
              {skinTone}
            </h2>

            <div className="undertone-pill">

              <span
                className="undertone-dot"
              />

              Not available

            </div>

          </div>

        </section>


        {/* Confidence */}

        <section className="confidence-card">

          <div className="confidence-top">

            <div className="confidence-icon">
              <ShieldCheck size={18} />
            </div>

            <div>

              <span>
                ANALYSIS CONFIDENCE
              </span>

              <strong>
                {confidence}%
              </strong>

            </div>

          </div>

          <div className="confidence-track">

            <div
              className="confidence-fill"
              style={{
                width:
                  `${confidence}%`,
              }}
            />

          </div>

          <p>
            Your image provided suitable visual
            information for this preliminary result.
          </p>

        </section>


        {/* Analysis cards */}

        <section className="result-details">

          <div className="result-detail-card">

            <div className="detail-icon tone-icon">
              <Sun size={17} />
            </div>

            <div>
              <span>
                SKIN TONE
              </span>

              <strong>
                {skinTone}
              </strong>

              <p>
                {toneDescription}
              </p>
            </div>

          </div>


          <div className="result-detail-card">

            <div className="detail-icon undertone-icon">
              <Sparkles size={17} />
            </div>

            <div>
              <span>
                UNDERTONE
              </span>

              <strong>
                Not available
              </strong>

              <p>
                Undertone analysis will be added in a later AI analysis stage.
              </p>
            </div>

          </div>


          <div className="result-detail-card">

            <div className="detail-icon hydration-icon">
              <Droplets size={17} />
            </div>

            <div>
              <span>
                SKIN TYPE
              </span>

              <strong>
                {skinType}
              </strong>

              <p>
                Your AI skin scan classified your skin type based on the current analysis.
              </p>
            </div>

          </div>

        </section>


        {/* AI note */}

        <div className="ai-result-note">

          <div className="ai-result-note-icon">
            <Sparkles size={16} />
          </div>

          <div>

            <strong>
              Your profile will improve over time.
            </strong>

            <p>
              Future scans and your preferences can
              help MakeMyLook.Ai create increasingly
              personalized recommendations.
            </p>

          </div>

        </div>


        {/* Continue */}

        <button
          className="result-continue-button"
          onClick={handleContinue}
        >
          Continue to Outfit Analysis
          <ChevronRight size={18} />
        </button>


        <p className="result-disclaimer">
          This is an AI-assisted cosmetic appearance
          analysis and should not be treated as a medical
          diagnosis.
        </p>

      </div>

    </main>
  );
}

export default SkinResult;