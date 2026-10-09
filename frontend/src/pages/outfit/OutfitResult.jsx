import {
  ArrowLeft,
  Check,
  ChevronRight,
  Palette,
  Shirt,
  Sparkles,
  Star,
  WandSparkles,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

import './OutfitResult.css';

function OutfitResult() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    selectedSkinTone,
    capturedImage,
    analysisResult,
    beautyProfile,
    outfitImage,
    outfitAnalysisResult,
  } = location.state || {};

  const detectedOutfitAnalysis = outfitAnalysisResult || {};

  const detectedSkinTone =
    beautyProfile?.skinTone ||
    selectedSkinTone?.name ||
    'medium';

  const detectedSkinType =
    beautyProfile?.skinType ||
    'normal';

  const outfitData = {
    dominantColour:
      detectedOutfitAnalysis.dominant_colour || 'Not detected',

    dominantHex:
      detectedOutfitAnalysis.dominant_hex || '#D8C1A8',

    accentColour:
      detectedOutfitAnalysis.accent_colour || 'Not detected',

    accentHex:
      detectedOutfitAnalysis.accent_hex || '#8A5E42',

    style:
      detectedSkinType === 'oily'
        ? 'Fresh & Polished'
        : detectedSkinType === 'dry'
          ? 'Soft & Elegant'
          : detectedSkinTone === 'deep'
            ? 'Bold & Refined'
            : 'Smart Casual',

    compatibility:
      detectedOutfitAnalysis.confidence != null
        ? Math.round(detectedOutfitAnalysis.confidence * 100)
      : 94,

    mood: 'Warm • Soft • Elegant',
  };

  const handleBack = () => {
    navigate('/scan/outfit', {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
        beautyProfile
      },
    });
  };

  const handleCreateLook = () => {
    navigate('/recommendations', {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
        beautyProfile,
        outfitImage,
        outfitData,
        outfitAnalysisResult,
      },
    });
  };

  return (
    <main className="outfit-result-page">

      <div className="outfit-result-container">

        {/* Header */}

        <header className="outfit-result-header">

          <button
            className="outfit-result-back"
            onClick={handleBack}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="outfit-result-progress">

            <span className="completed" />
            <span className="completed" />
            <span className="completed" />
            <span className="active" />

          </div>

          <span className="outfit-result-step">
            4 / 5
          </span>

        </header>


        {/* Heading */}

        <section className="outfit-result-heading">

          <div className="outfit-result-icon">
            <Sparkles size={18} />
          </div>

          <p>
            AI OUTFIT ANALYSIS
          </p>

          <h1>
            Your outfit
            <span>is ready.</span>
          </h1>

          <p className="outfit-result-description">
            Here's what MakeMyLook.Ai found in your
            outfit and how it works with your skin profile.
          </p>

        </section>


        {/* Outfit image */}

        <section className="result-photo-card">

          <div className="result-photo">

            {outfitImage ? (
              <img
                src={outfitImage}
                alt="Your outfit"
              />
            ) : (
              <div className="result-photo-placeholder">
                <Shirt size={42} />
              </div>
            )}

            <div className="result-photo-badge">

              <Check size={12} />

              AI ANALYZED

            </div>

          </div>

        </section>


        {/* Detection cards */}

        <section className="detection-grid">

          <div className="detection-card">

            <div className="detection-card-top">

              <div className="detection-icon">
                <Palette size={15} />
              </div>

              <span>
                DOMINANT COLOUR
              </span>

            </div>

            <div className="colour-display">

              <span
                className="colour-circle"
                style={{
                  backgroundColor:
                    outfitData.dominantHex,
                }}
              />

              <strong>
                {outfitData.dominantColour}
              </strong>

            </div>

            <p>
              Your main outfit shade
            </p>

          </div>


          <div className="detection-card">

            <div className="detection-card-top">

              <div className="detection-icon">
                <Palette size={15} />
              </div>

              <span>
                ACCENT COLOUR
              </span>

            </div>

            <div className="colour-display">

              <span
                className="colour-circle"
                style={{
                  backgroundColor:
                    outfitData.accentHex,
                }}
              />

              <strong>
                {outfitData.accentColour}
              </strong>

            </div>

            <p>
              Your secondary outfit shade
            </p>

          </div>


          <div className="detection-card">

            <div className="detection-card-top">

              <div className="detection-icon">
                <Shirt size={15} />
              </div>

              <span>
                STYLE
              </span>

            </div>

            <div className="style-value">
              {outfitData.style}
            </div>

            <p>
              Overall outfit direction
            </p>

          </div>


          <div className="detection-card compatibility-card">

            <div className="detection-card-top">

              <div className="detection-icon">
                <Star size={15} />
              </div>

              <span>
                COMPATIBILITY
              </span>

            </div>

            <div className="compatibility-value">

              <strong>
                {outfitData.compatibility}
              </strong>

              <span>
                %
              </span>

            </div>

            <p>
              Skin tone + outfit harmony
            </p>

          </div>

        </section>


        {/* AI insight */}

        <section className="outfit-insight">

          <div className="insight-icon">
            <WandSparkles size={17} />
          </div>

          <div className="insight-content">

            <span>
              YOUR AI STYLE INSIGHT
            </span>

            <h2>
              {outfitData.mood}
            </h2>

            <p>
              Your {detectedSkinTone} skin profile and {detectedSkinType} skin type
              will be used to personalize your makeup, hair, skincare and
              grooming recommendations around this outfit.
            </p>

          </div>

        </section>


        {/* Colour harmony */}

        <section className="harmony-card">

          <div className="harmony-header">

            <div>

              <span>
                COLOUR HARMONY
              </span>

              <strong>
                Your outfit palette
              </strong>

            </div>

            <div className="harmony-score">
              <Check size={12} />
              Excellent
            </div>

          </div>

          <div className="harmony-palette">

            <div
              className="palette-large"
              style={{
                backgroundColor:
                  outfitData.dominantHex,
              }}
            />

            <div
              className="palette-small"
              style={{
                backgroundColor:
                  outfitData.accentHex,
              }}
            />

            <div className="palette-small palette-light" />

            <div className="palette-small palette-pink" />

          </div>

          <p>
            This palette gives us a strong base for
            creating your personalized beauty look.
          </p>

        </section>


        {/* Continue */}

        <button
          className="create-look-button"
          onClick={handleCreateLook}
        >
          <Sparkles size={17} />

          Create My Personalized Look

          <ChevronRight size={17} />

        </button>


        <p className="outfit-result-note">
          Next: makeup • hair • grooming • skincare
        </p>

      </div>

    </main>
  );
}

export default OutfitResult;
