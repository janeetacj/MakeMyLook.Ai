import {
  ArrowLeft,
  Check,
  ChevronRight,
  Droplets,
  Sparkles,
  Sun,
  UserRound,
  WandSparkles,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

import './RecommendationProfile.css';

function RecommendationProfile() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    selectedSkinTone,
    capturedImage,
    analysisResult,
    outfitImage,
    outfitData,
    outfitAnalysisResult,
  } = location.state || {};

  const detectedOutfitAnalysis = outfitAnalysisResult || {};

  const skinAnalysis = analysisResult?.analysis || {};

  const detectedSkinTone =
    skinAnalysis.skin_tone ||
    selectedSkinTone?.name ||
    'Not available';

  const detectedSkinType =
    skinAnalysis.skin_type ||
    'Not available';

  const beautyProfile = {
    skinTone:
      detectedSkinTone.charAt(0).toUpperCase() +
      detectedSkinTone.slice(1),

    undertone: 'Not available',

    skinType:
      detectedSkinType.charAt(0).toUpperCase() +
      detectedSkinType.slice(1),

    dominantOutfit:
      detectedOutfitAnalysis.dominant_colour ||
      outfitData?.dominantColour ||
      'Not detected',

    outfitStyle:
      outfitData?.style ||
      'Smart Casual',

    beautyDirection: [
      detectedSkinType === 'dry'
        ? 'Hydrating'
        : detectedSkinType === 'oily'
          ? 'Fresh'
          : 'Balanced',

      detectedSkinTone === 'deep'
        ? 'Bold'
        : 'Soft',

      'Elegant',
    ],
  };

  const handleBack = () => {
    navigate('/outfit/result', {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
        outfitImage,
        outfitData,
      },
    });
  };

  const handleContinue = () => {
    navigate('/recommendations/details', {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
        outfitImage,
        outfitData,
        outfitAnalysisResult,
        beautyProfile,
      },
    });
  };

  return (
    <main className="recommendation-profile-page">

      <div className="recommendation-profile-container">

        {/* HEADER */}

        <header className="recommendation-profile-header">

          <button
            className="recommendation-back"
            onClick={handleBack}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="recommendation-progress">

            <span className="completed" />
            <span className="completed" />
            <span className="completed" />
            <span className="completed" />
            <span className="active" />

          </div>

          <span className="recommendation-step">
            5 / 5
          </span>

        </header>


        {/* HERO */}

        <section className="recommendation-profile-hero">

          <div className="recommendation-sparkle">
            <Sparkles size={18} />
          </div>

          <p>
            YOUR PERSONALIZED LOOK
          </p>

          <h1>
            Made
            <span>just for you.</span>
          </h1>

          <div className="recommendation-hero-description">

            <span>
              Your skin profile
            </span>

            <div className="description-dot" />

            <span>
              Your outfit
            </span>

            <div className="description-dot" />

            <span>
              Your style
            </span>

          </div>

        </section>


        {/* PROFILE CARD */}

        <section className="beauty-profile-card">

          <div className="beauty-profile-card-header">

            <div className="profile-header-left">

              <div className="profile-header-icon">
                <UserRound size={17} />
              </div>

              <div>

                <span>
                  YOUR BEAUTY PROFILE
                </span>

                <strong>
                  AI Style Profile
                </strong>

              </div>

            </div>

            <div className="profile-ready">
              <Check size={11} />
              Ready
            </div>

          </div>


          {/* PROFILE VALUES */}

          <div className="profile-values">

            <div className="profile-value">

              <span>
                SKIN TONE
              </span>

              <strong>
                {beautyProfile.skinTone}
              </strong>

              <small>
                AI detected
              </small>

            </div>


            <div className="profile-value">

              <span>
                UNDERTONE
              </span>

              <strong>
                {beautyProfile.undertone}
              </strong>

              <small>
                Warm undertone
              </small>

            </div>


            <div className="profile-value">

              <span>
                SKIN TYPE
              </span>

              <strong>
                {beautyProfile.skinType}
              </strong>

              <small>
                AI detected
              </small>

            </div>

          </div>


          {/* OUTFIT */}

          <div className="profile-outfit">

            <div className="outfit-mini-icon">
              <Sparkles size={14} />
            </div>

            <div>

              <span>
                OUTFIT DETECTED
              </span>

              <strong>
                {beautyProfile.dominantOutfit}
                {' · '}
                {beautyProfile.outfitStyle}
              </strong>

            </div>

          </div>


          {/* DIRECTION */}

          <div className="beauty-direction">

            <span>
              YOUR BEAUTY DIRECTION
            </span>

            <div className="direction-tags">

              {beautyProfile.beautyDirection.map(
                (item) => (
                  <span key={item}>
                    <Check size={10} />
                    {item}
                  </span>
                )
              )}

            </div>

          </div>

        </section>


        {/* AI EXPLANATION */}

        <section className="recommendation-explanation">

          <div className="explanation-icon">
            <WandSparkles size={17} />
          </div>

          <div>

            <span>
              WHY THESE RECOMMENDATIONS?
            </span>

            <p>
              MakeMyLook.Ai combines your skin tone,
              undertone, skin characteristics and outfit
              colours to create recommendations that
              work together as one complete look.
            </p>

          </div>

        </section>


        {/* FOUNDATION */}

        <section className="recommendation-foundation">

          <div className="foundation-item">

            <div className="foundation-icon">
              <Droplets size={15} />
            </div>

            <div>

              <strong>
                Skin-aware
              </strong>

              <span>
                Recommendations consider your skin profile.
              </span>

            </div>

          </div>


          <div className="foundation-item">

            <div className="foundation-icon">
              <Sun size={15} />
            </div>

            <div>

              <strong>
                Everyday friendly
              </strong>

              <span>
                Suggestions are designed to be practical.
              </span>

            </div>

          </div>

        </section>


        {/* CTA */}

        <button
          className="build-look-button"
          onClick={handleContinue}
        >

          <Sparkles size={17} />

          Show My Recommendations

          <ChevronRight size={17} />

        </button>


        <p className="recommendation-footer-note">
          Makeup • Hair • Grooming • Skincare • Lip Care • Nails
        </p>

      </div>

    </main>
  );
}

export default RecommendationProfile;
