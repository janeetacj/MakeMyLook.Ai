import {
  ArrowLeft,
  Check,
  ChevronRight,
  Droplets,
  Heart,
  Sparkles,
  Scissors,
  Sun,
  WandSparkles,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

import './BeforeAfter.css';

function BeforeAfter() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    selectedSkinTone,
    capturedImage,
    analysisResult,
    outfitImage,
    outfitData,
    beautyProfile,
    skinAnalysis,
    makeupItems,
    selectedMakeup,
    lipColours,
    selectedLipColour,
    hairItems,
    selectedHairStyle,
    nailColours,
    selectedNailColour,
    beardItems,
    selectedBeardStyle,
    mustacheItems,
    selectedMustacheStyle,
    returnTo,
  } = location.state || {};

  const detectedSkinAnalysis =
    analysisResult?.analysis || {};

  const skinTone =
    detectedSkinAnalysis?.skin_tone ||
    skinAnalysis?.skinTone ||
    beautyProfile?.skinTone ||
    selectedSkinTone?.name ||
    selectedSkinTone ||
    'Medium';

  const undertone =
    skinAnalysis?.undertone ||
    beautyProfile?.undertone ||
    'Warm';

  const outfit =
    outfitData?.color ||
    outfitData?.outfitColor ||
    'Soft Beige';

  const beautySummaryText =
    detectedSkinAnalysis?.skin_tone && outfit
      ? `Your ${detectedSkinAnalysis.skin_tone} complexion and ${outfit} outfit guide your personalized beauty recommendations. Your selected styling choices are intended to create a coordinated overall look.`
      : 'Your personalized beauty plan combines your skin profile, outfit, and selected styling recommendations.';

  const gender =
    beautyProfile?.gender ||
    beautyProfile?.sex ||
    'Unisex';

  const normalizedGender =
    String(gender).toLowerCase();

  const isMan =
    normalizedGender === 'man' ||
    normalizedGender === 'male';

  const isWoman =
    normalizedGender === 'woman' ||
    normalizedGender === 'female';

  const selectedRecommendation =
    selectedMakeup ||
    selectedLipColour ||
    selectedHairStyle ||
    selectedNailColour ||
    selectedBeardStyle ||
    selectedMustacheStyle ||
    null;

  const selectedRecommendationName =
    typeof selectedRecommendation === 'string'
      ? selectedRecommendation
      : selectedRecommendation?.title ||
        selectedRecommendation?.name ||
        null;

  const handleBack = () => {
    navigate(
      returnTo || '/recommendations/makeup',
      {
        state: {
          selectedSkinTone,
          capturedImage,
          analysisResult,
          outfitImage,
          outfitData,
          beautyProfile,
          skinAnalysis,
        },
      }
    );
  };

  const handleStartOver = () => {
    navigate('/home');
  };

  return (
    <main className="before-after-page">

      <div className="before-after-container">

        {/* HEADER */}

        <header className="before-after-header">

          <button
            className="before-after-back"
            onClick={handleBack}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="before-after-header-title">
            <span>YOUR BEAUTY PLAN</span>
            <strong>Complete Look</strong>
          </div>

          <div className="before-after-header-icon">
            <Sparkles size={17} />
          </div>

        </header>


        {/* HERO */}

        <section className="before-after-hero">

          <div className="before-after-hero-icon">
            <WandSparkles size={21} />
          </div>

          <p>AI BEAUTY TRANSFORMATION</p>

          <h1>
            Meet your
            <span>complete look.</span>
          </h1>

          <div className="before-after-description">
            Your personalized beauty plan brings together your
            complexion, makeup, skincare and styling recommendations.
          </div>

        </section>


        {/* BEFORE / AFTER */}

        <section className="transformation-section">

          <div className="section-label">
            YOUR TRANSFORMATION
          </div>

          <h2>
            Before &amp; After
          </h2>

<div className="before-after-visual">

  {/* BEFORE */}

  <div className="look-panel">

    <div className="look-label">
      BEFORE
    </div>

    {capturedImage ? (
      <img
        src={capturedImage}
        alt="Original user appearance"
        className="look-image"
      />
    ) : (
      <div className="look-placeholder before-placeholder">

        <div className="placeholder-face">
          <div className="placeholder-hair" />
          <div className="placeholder-face-shape" />
        </div>

        <span>
          Your scanned image
        </span>

      </div>
    )}

  </div>


  {/* AFTER */}

  <div className="look-panel after-panel">

    <div className="look-label after-label">
      AI LOOK
    </div>

    <div className="look-placeholder after-placeholder">

      <div className="after-glow" />

      <div className="ai-preview-content">

        <div className="ai-preview-orb">
          <Sparkles size={25} />
        </div>

        <div className="ai-preview-text">

          <h3>
            Your AI look
          </h3>

          <p>
            Personalized beauty preview
          </p>

        </div>

        <div className="preview-tags">

          <span>Makeup</span>
          <span>Skin</span>
          <span>Styling</span>

        </div>

      </div>

      <div className="ai-result-badge">
        <Sparkles size={11} />
        AI PREVIEW
      </div>

    </div>

  </div>

</div>

          <div className="before-after-note">

            <Sparkles size={14} />

            <span>
              Your final AI preview will be generated from
              your scanned image after the AI transformation
              engine is connected.
            </span>

          </div>

        </section>


        {/* PROFILE */}

        <section className="final-profile-card">

          <div className="final-profile-heading">

            <div>
              <span>YOUR AI PROFILE</span>

              <h2>
                Personalised for you
              </h2>
            </div>

            <div className="profile-match">
              <strong>94%</strong>
              <span>AI MATCH</span>
            </div>

          </div>


          <div className="profile-details">

            <div className="profile-detail">
              <span>SKIN</span>
              <strong>{skinTone}</strong>
            </div>

            <div className="profile-detail">
              <span>UNDERTONE</span>
              <strong>{undertone}</strong>
            </div>

            <div className="profile-detail">
              <span>OUTFIT</span>
              <strong>{outfit}</strong>
            </div>

          </div>

        </section>


        {/* BEAUTY SUMMARY */}

        <section className="beauty-summary-section">

          <div className="section-label">
            COMPLETE BEAUTY PLAN
          </div>

          <h2>
            Everything that completes your look
          </h2>


          <div className="beauty-summary-grid">


            {/* SKINCARE */}

            <article className="beauty-summary-card">

              <div className="summary-icon skincare-icon">
                <Droplets size={18} />
              </div>

              <div className="summary-content">

                <span>SKINCARE</span>

                <h3>
                  Hydrated &amp; protected
                </h3>

                <p>
                  Cleanser, moisturizer and daily sunscreen
                  selected for your skin profile.
                </p>

              </div>

              <div className="summary-check">
                <Check size={12} />
              </div>

            </article>


            {/* MAKEUP */}

            <article className="beauty-summary-card">

              <div className="summary-icon makeup-icon">
                <WandSparkles size={18} />
              </div>

              <div className="summary-content">

                <span>MAKEUP</span>

                <h3>
                  Soft Warm Glow
                </h3>

                <p>
                  Warm beige base, peach blush, bronze eyes
                  and terracotta nude lips.
                </p>

              </div>

              <div className="summary-check">
                <Check size={12} />
              </div>

            </article>


            {/* HAIR */}

            <article className="beauty-summary-card">

              <div className="summary-icon hair-icon">
                <Scissors size={18} />
              </div>

              <div className="summary-content">

                <span>
                  {isMan
                    ? 'HAIR & BEARD'
                    : isWoman
                      ? 'HAIR STYLE'
                      : 'PERSONAL STYLING'}
                </span>

                <h3>
                  {isMan
                    ? 'Clean textured style'
                    : isWoman
                      ? 'Soft layered style'
                      : 'Personalized hairstyle'}
                </h3>

                <p>
                  {isMan
                    ? 'A clean hairstyle paired with a naturally groomed beard profile.'
                    : isWoman
                      ? 'A polished hairstyle selected to complement your overall look.'
                      : 'A hairstyle direction tailored to your personal style preferences.'}
                </p>

              </div>

              <div className="summary-check">
                <Check size={12} />
              </div>

            </article>


            {/* LIPS */}

            <article className="beauty-summary-card">

              <div className="summary-icon lips-icon">
                <Heart size={18} />
              </div>

              <div className="summary-content">

                <span>LIP CARE</span>

                <h3>
                  Soft hydrated lips
                </h3>

                <p>
                  Lip balm and hydration care for a
                  smoother, healthier-looking finish.
                </p>

              </div>

              <div className="summary-check">
                <Check size={12} />
              </div>

            </article>


            {/* SUNSCREEN */}

            <article className="beauty-summary-card">

              <div className="summary-icon sunscreen-icon">
                <Sun size={18} />
              </div>

              <div className="summary-content">

                <span>DAILY PROTECTION</span>

                <h3>
                  SPF 30–50
                </h3>

                <p>
                  Broad-spectrum sunscreen recommended
                  as the final morning skincare step.
                </p>

              </div>

              <div className="summary-check">
                <Check size={12} />
              </div>

            </article>


            {/* MANICURE */}
            {!isMan && (
              <article className="beauty-summary-card">

                <div className="summary-icon manicure-icon">
                  <Sparkles size={18} />
                </div>

                <div className="summary-content">

                  <span>MANICURE</span>

                  <h3>
                    Soft neutral finish
                  </h3>

                  <p>
                    A subtle nail colour that complements
                    your outfit without competing with it.
                  </p>

                </div>

                <div className="summary-check">
                  <Check size={12} />
                </div>

              </article>
            )}
          </div>

        </section>


        {/* AI SUMMARY */}

        <section className="ai-summary-card">

          <div className="ai-summary-icon">
            <Sparkles size={18} />
          </div>

          <div>

            <span>
              YOUR AI BEAUTY SUMMARY
            </span>

            <h2>
              {selectedRecommendationName
                ? `${selectedRecommendationName} — your personalized look`
                : 'Balanced, natural & polished'}
            </h2>

            <p>
              {beautySummaryText}
            </p>

          </div>

        </section>


        {/* CTA */}

        <button
          className="start-over-button"
          onClick={handleStartOver}
        >

          <Sparkles size={17} />

          Create Another Look

          <ChevronRight size={17} />

        </button>


        <p className="before-after-footer">
          MakeMyLook.Ai · Your personal beauty intelligence
        </p>

      </div>

    </main>
  );
}

export default BeforeAfter;