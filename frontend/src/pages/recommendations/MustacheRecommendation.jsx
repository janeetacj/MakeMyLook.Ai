import {
  ArrowLeft,
  Check,
  ChevronRight,
  Circle,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

import './MustacheRecommendation.css';

function MustacheRecommendation() {
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
  } = location.state || {};

  const detectedSkinAnalysis =
    analysisResult?.analysis || {};

  const profile = {
    skinTone:
      detectedSkinAnalysis?.skin_tone ||
      skinAnalysis?.skinTone ||
      beautyProfile?.skinTone ||
      selectedSkinTone?.name ||
      selectedSkinTone ||
      'Medium',

    undertone:
      skinAnalysis?.undertone ||
      beautyProfile?.undertone ||
      'Warm',

    outfit:
      outfitData?.color ||
      outfitData?.outfitColor ||
      outfitData?.dominantColour ||
      'Soft Beige',

    stylePreference:
      beautyProfile?.stylePreference ||
      'natural',

    hairType:
      beautyProfile?.hairType ||
      'Not specified',

    hairLength:
      beautyProfile?.hairLength ||
      'Not specified',
  };

  const styleLabel = {
    natural: 'Natural',
    polished: 'Polished',
    bold: 'Bold',
  };

  const mustacheStyleDirection =
    profile.stylePreference === 'bold'
      ? 'Bold Statement Mustache'
      : profile.stylePreference === 'polished'
        ? 'Polished Structured Mustache'
        : 'Natural Balanced Mustache';

  const mustacheMatch =
    profile.stylePreference === 'bold'
      ? 96
      : profile.stylePreference === 'polished'
        ? 95
        : 92;

  const mustacheGroomingTip =
    profile.stylePreference === 'bold'
      ? 'Maintain a fuller mustache shape with clean edges. Trim regularly and use a small amount of mustache balm to keep the stronger silhouette controlled.'
      : profile.stylePreference === 'polished'
        ? 'Keep the mustache precisely trimmed with clean upper-lip edges. Use a small amount of grooming balm to maintain a structured, polished finish.'
        : 'Trim regularly to maintain an even outline and keep the area around the upper lip clean for a natural, polished finish.';

  const mustacheRecommendationSets = {
    natural: [
      {
        id: 1,
        category: 'EVERYDAY BALANCED',
        title: 'Classic Short Mustache',
        subtitle: 'Your AI-selected style',
        description:
          'A clean, balanced mustache that follows the natural shape of the upper lip and works well for an everyday polished appearance.',
        featured: true,
      },
      {
        id: 2,
        category: 'CLEAN & REFINED',
        title: 'Neat Pencil Mustache',
        subtitle: 'Minimal & defined',
        description:
          'A slimmer mustache style with clean edges for a subtle and refined grooming appearance.',
        featured: false,
      },
      {
        id: 3,
        category: 'CLASSIC',
        title: 'Natural Full Mustache',
        subtitle: 'Classic & confident',
        description:
          'A naturally fuller option that adds character while keeping the overall grooming look controlled.',
        featured: false,
      },
      {
        id: 4,
        category: 'SOFT STATEMENT',
        title: 'Natural Chevron Mustache',
        subtitle: 'Balanced & expressive',
        description:
          'A fuller natural shape that adds definition while keeping the overall appearance balanced and easy to maintain.',
        featured: false,
      },
    ],

    polished: [
      {
        id: 1,
        category: 'STRUCTURED',
        title: 'Defined Classic Mustache',
        subtitle: 'Your AI-selected style',
        description:
          'A precisely maintained mustache with clean edges for a refined and professional appearance.',
        featured: true,
      },
      {
        id: 2,
        category: 'CLEAN & REFINED',
        title: 'Precision Pencil Mustache',
        subtitle: 'Sharp & controlled',
        description:
          'A slim, carefully shaped mustache that creates a clean and sophisticated grooming finish.',
        featured: false,
      },
      {
        id: 3,
        category: 'PROFESSIONAL',
        title: 'Groomed Full Mustache',
        subtitle: 'Classic & polished',
        description:
          'A fuller mustache with controlled length and precise edges for a confident professional appearance.',
        featured: false,
      },
      {
        id: 4,
        category: 'STRUCTURED STATEMENT',
        title: 'Defined Chevron Mustache',
        subtitle: 'Sharp & expressive',
        description:
          'A stronger mustache silhouette with clean shaping for a sophisticated statement look.',
        featured: false,
      },
    ],

    bold: [
      {
        id: 1,
        category: 'STATEMENT',
        title: 'Full Chevron Mustache',
        subtitle: 'Your AI-selected style',
        description:
          'A stronger, fuller mustache silhouette designed to create a confident and expressive grooming statement.',
        featured: true,
      },
      {
        id: 2,
        category: 'TEXTURED',
        title: 'Heavy Natural Mustache',
        subtitle: 'Bold & masculine',
        description:
          'A fuller natural style that adds stronger definition and a more noticeable facial presence.',
        featured: false,
      },
      {
        id: 3,
        category: 'DEFINED',
        title: 'Sharp Chevron Mustache',
        subtitle: 'Modern & expressive',
        description:
          'A structured mustache with stronger edges for a contemporary and distinctive appearance.',
        featured: false,
      },
      {
        id: 4,
        category: 'SIGNATURE',
        title: 'Full Groomed Mustache',
        subtitle: 'Strong & confident',
        description:
          'A fuller mustache with controlled shape and volume for a distinctive signature grooming look.',
        featured: false,
      },
    ],
  };

  const mustacheItems =
    mustacheRecommendationSets[profile.stylePreference] ||
    mustacheRecommendationSets.natural;

  const handleBack = () => {
    navigate('/recommendations/details', {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
        outfitImage,
        outfitData,
        beautyProfile,
        skinAnalysis,
      },
    });
  };

  const handleCompleteLook = () => {
    navigate('/recommendations/before-after', {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
        outfitImage,
        outfitData,
        beautyProfile,
        skinAnalysis,
        mustacheItems,
        selectedMustacheStyle: mustacheItems[0],
        returnTo: '/recommendations/mustache',
      },
    });
  };

  return (
    <main className="mustache-page">
      <div className="mustache-container">

        {/* HEADER */}

        <header className="mustache-header">

          <button
            className="mustache-back-button"
            onClick={handleBack}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="mustache-header-title">

            <span>
              YOUR BEAUTY PLAN
            </span>

            <strong>
              Mustache Recommendations
            </strong>

          </div>

          <div className="mustache-header-sparkle">
            <Sparkles size={17} />
          </div>

        </header>


        {/* HERO */}

        <section className="mustache-hero">

          <div className="mustache-hero-icon">
            <WandSparkles size={21} />
          </div>

          <p className="mustache-eyebrow">
            AI CURATED FOR YOU
          </p>

          <h1>
            Find your perfect
            <span>mustache style.</span>
          </h1>

          <p className="mustache-hero-description">
            We've combined your skin profile, outfit and personal
            style to create a balanced mustache direction.
          </p>

        </section>


        {/* PROFILE SUMMARY */}

        <section className="mustache-profile-card">

          <div className="mustache-profile-item">

            <span>
              SKIN
            </span>

            <strong>
              {profile.skinTone}
            </strong>

          </div>

          <div className="mustache-profile-divider" />

          <div className="mustache-profile-item">

            <span>
              UNDERTONE
            </span>

            <strong>
              {profile.undertone}
            </strong>

          </div>

          <div className="mustache-profile-divider" />

          <div className="mustache-profile-item">

            <span>
              OUTFIT
            </span>

            <strong>
              {profile.outfit}
            </strong>

          </div>

        </section>


        {/* STYLE SUMMARY */}

        <section className="mustache-style-summary">

          <div className="mustache-style-summary-icon">
            <Circle size={17} />
          </div>

          <div>

            <span>
              YOUR GROOMING DIRECTION
            </span>

            <h2>
              {mustacheStyleDirection}
            </h2>

            <p>
              A mustache direction designed to complement
              your personal style and complete your current look.
            </p>

          </div>

          <div className="mustache-match">

            <strong>
              {mustacheMatch}
            </strong>

            <span>
              MATCH
            </span>

          </div>

        </section>


        {/* GROOMING DETAILS */}

        <section className="mustache-details">

          <div className="mustache-details-heading">

            <span>
              YOUR PROFILE
            </span>

            <h2>
              Grooming details
            </h2>

          </div>

          <div className="mustache-details-grid">

            <div className="mustache-detail-item">

              <span>
                HAIR TYPE
              </span>

              <strong>
                {profile.hairType}
              </strong>

            </div>

            <div className="mustache-detail-item">

              <span>
                HAIR LENGTH
              </span>

              <strong>
                {profile.hairLength}
              </strong>

            </div>

          </div>

        </section>


        {/* RECOMMENDATIONS */}

        <section className="mustache-section">

          <div className="mustache-section-heading">

            <span>
              YOUR RECOMMENDATIONS
            </span>

            <h2>
              Styles made for you
            </h2>

          </div>


          <div className="mustache-list">

            {mustacheItems.map((item) => (

              <article
                className={`mustache-card ${
                  item.featured ? 'featured' : ''
                }`}
                key={item.id}
              >

                <div className="mustache-style-visual">

                  <div className="mustache-face-shape">
                    <Circle size={19} />
                  </div>

                  <span>
                    STYLE
                  </span>

                </div>

                <div className="mustache-card-content">

                  <span className="mustache-card-category">
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <strong>
                    {item.subtitle}
                  </strong>

                  <p>
                    {item.description}
                  </p>

                </div>

                <div className="mustache-card-check">
                  <Check size={14} />
                </div>

              </article>

            ))}

          </div>

        </section>


        {/* STYLE DIRECTION */}

        <section className="mustache-direction">

          <div className="mustache-direction-heading">

            <div>

              <span>
                AI GROOMING DIRECTION
              </span>

              <h2>
                Clean definition
              </h2>

            </div>

            <Sparkles size={16} />

          </div>


          <div className="mustache-direction-points">

            <div>
              <Circle size={10} />
              <span>Keep the upper-lip edge clean and even.</span>
            </div>

            <div>
              <Circle size={10} />
              <span>Trim stray hairs for a defined silhouette.</span>
            </div>

            <div>
              <Circle size={10} />
              <span>Maintain balanced length across both sides.</span>
            </div>

          </div>

        </section>


        {/* TOP PICK */}

        <section className="mustache-top-pick-card">

          <div className="mustache-top-pick-left">

            <div className="mustache-top-pick-icon">
              <Circle size={17} />
            </div>

            <div>

              <span>
                TOP AI PICK
              </span>

              <h3>
                {mustacheItems[0].title}
              </h3>

              <p>
                Best overall match for your current style.
              </p>

            </div>

          </div>


          <div className="mustache-top-pick-score">

            <strong>
              {mustacheMatch}%
            </strong>

            <span>
              STYLE MATCH
            </span>

          </div>

        </section>


        {/* GROOMING TIP */}

        <section className="mustache-tip">

          <div className="mustache-tip-icon">
            <Sparkles size={16} />
          </div>

          <div>

            <span>
              AI GROOMING TIP
            </span>

            <p>
              {mustacheGroomingTip}
            </p>

          </div>

        </section>


        {/* CTA */}

        <button
          className="mustache-complete-button"
          onClick={handleCompleteLook}
        >

          <WandSparkles size={17} />

          See My Complete Look

          <ChevronRight size={17} />

        </button>


        <p className="mustache-footer">
          MakeMyLook.Ai · Personalized beauty intelligence
        </p>

      </div>
    </main>
  );
}

export default MustacheRecommendation;