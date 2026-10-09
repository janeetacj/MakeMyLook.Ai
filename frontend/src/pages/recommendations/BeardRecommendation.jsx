import {
  ArrowLeft,
  Check,
  ChevronRight,
  Circle,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

import './BeardRecommendation.css';

function BeardRecommendation() {
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

  const beardRecommendationSets = {
    natural: [
      {
        id: 1,
        category: 'EVERYDAY BALANCED',
        title: 'Short Boxed Beard',
        subtitle: 'Your AI-selected beard style',
        description:
          'A clean, balanced beard that keeps the face looking natural while remaining easy to maintain.',
        featured: true,
      },
      {
        id: 2,
        category: 'CLEAN & REFINED',
        title: 'Short Stubble',
        subtitle: 'Minimal & effortless',
        description:
          'A neat stubble style that adds definition without making the grooming look too heavy.',
        featured: false,
      },
      {
        id: 3,
        category: 'CLASSIC',
        title: 'Natural Corporate Beard',
        subtitle: 'Sharp but relaxed',
        description:
          'A carefully trimmed beard with natural edges for a polished appearance that still feels effortless.',
        featured: false,
      },
      {
        id: 4,
        category: 'FULL & NATURAL',
        title: 'Full Groomed Beard',
        subtitle: 'Controlled natural volume',
        description:
          'A fuller beard option with controlled volume for a confident but naturally groomed finish.',
        featured: false,
      },
    ],

    polished: [
      {
        id: 1,
        category: 'STRUCTURED',
        title: 'Defined Boxed Beard',
        subtitle: 'Your AI-selected beard style',
        description:
          'A precisely shaped beard with clean edges for a refined and professional appearance.',
        featured: true,
      },
      {
        id: 2,
        category: 'CLEAN & REFINED',
        title: 'Precision Stubble',
        subtitle: 'Sharp & controlled',
        description:
          'A closely maintained stubble style that gives the face definition while keeping the finish clean.',
        featured: false,
      },
      {
        id: 3,
        category: 'PROFESSIONAL',
        title: 'Corporate Beard',
        subtitle: 'Sharp & professional',
        description:
          'A neatly trimmed beard with defined edges designed for a sophisticated professional look.',
        featured: false,
      },
      {
        id: 4,
        category: 'FULL & STRUCTURED',
        title: 'Groomed Full Beard',
        subtitle: 'Refined strong finish',
        description:
          'A fuller beard with controlled volume and precise shaping for a stronger polished appearance.',
        featured: false,
      },
    ],

    bold: [
      {
        id: 1,
        category: 'STATEMENT',
        title: 'Full Sculpted Beard',
        subtitle: 'Your AI-selected beard style',
        description:
          'A stronger beard silhouette with controlled volume for a confident and expressive appearance.',
        featured: true,
      },
      {
        id: 2,
        category: 'TEXTURED',
        title: 'Heavy Stubble',
        subtitle: 'Bold & masculine',
        description:
          'A fuller stubble style that adds stronger definition and a more noticeable grooming direction.',
        featured: false,
      },
      {
        id: 3,
        category: 'DEFINED',
        title: 'Sharp Faded Beard',
        subtitle: 'Modern & expressive',
        description:
          'A structured beard with stronger cheek and neckline definition for a contemporary statement look.',
        featured: false,
      },
      {
        id: 4,
        category: 'SIGNATURE',
        title: 'Long Groomed Beard',
        subtitle: 'Strong & expressive',
        description:
          'A longer beard option with controlled shape and volume for a distinctive signature appearance.',
        featured: false,
      },
    ],
  };

  const beardItems =
    beardRecommendationSets[profile.stylePreference] ||
    beardRecommendationSets.natural;

  const beardStyleDirection =
    profile.stylePreference === 'bold'
      ? 'Bold Statement Beard'
      : profile.stylePreference === 'polished'
        ? 'Polished Structured Beard'
        : 'Natural Balanced Beard';

  const beardMatch =
    profile.stylePreference === 'bold'
      ? 96
      : profile.stylePreference === 'polished'
        ? 95
        : 93;

  const beardGroomingTip =
    profile.stylePreference === 'bold'
      ? 'Maintain strong cheek and neckline definition. Use a lightweight beard balm to control volume while keeping the fuller shape looking intentional.'
      : profile.stylePreference === 'polished'
        ? 'Keep the beard precisely trimmed and the edges clean. Use a small amount of beard balm to maintain a structured, polished finish.'
        : 'Keep the beard evenly trimmed and use a small amount of beard balm to maintain a natural shape and soft finish.';

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
        beardItems,
        selectedBeardStyle: beardItems[0],
        returnTo: '/recommendations/beard',
      },
    });
  };

  return (
    <main className="beard-page">
      <div className="beard-container">

        {/* HEADER */}

        <header className="beard-header">

          <button
            className="beard-back-button"
            onClick={handleBack}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="beard-header-title">

            <span>
              YOUR BEAUTY PLAN
            </span>

            <strong>
              Beard Recommendations
            </strong>

          </div>

          <div className="beard-header-sparkle">
            <Sparkles size={17} />
          </div>

        </header>


        {/* HERO */}

        <section className="beard-hero">

          <div className="beard-hero-icon">
            <WandSparkles size={21} />
          </div>

          <p className="beard-eyebrow">
            AI CURATED FOR YOU
          </p>

          <h1>
            Find your perfect
            <span>beard style.</span>
          </h1>

          <p className="beard-hero-description">
            We've combined your skin profile, outfit and personal
            style to create a balanced grooming direction.
          </p>

        </section>


        {/* PROFILE SUMMARY */}

        <section className="beard-profile-card">

          <div className="beard-profile-item">

            <span>
              SKIN
            </span>

            <strong>
              {profile.skinTone}
            </strong>

          </div>

          <div className="beard-profile-divider" />

          <div className="beard-profile-item">

            <span>
              UNDERTONE
            </span>

            <strong>
              {profile.undertone}
            </strong>

          </div>

          <div className="beard-profile-divider" />

          <div className="beard-profile-item">

            <span>
              OUTFIT
            </span>

            <strong>
              {profile.outfit}
            </strong>

          </div>

        </section>


        {/* STYLE SUMMARY */}

        <section className="beard-style-summary">

          <div className="beard-style-summary-icon">
            <Circle size={17} />
          </div>

          <div>

            <span>
              YOUR GROOMING DIRECTION
            </span>

            <h2>
              {beardStyleDirection}
            </h2>

            <p>
              A beard direction designed to complement your
              personal style and complete your current look.
            </p>

          </div>

          <div className="beard-match">

            <strong>
              {beardMatch}
            </strong>

            <span>
              MATCH
            </span>

          </div>

        </section>


        {/* GROOMING DETAILS */}

        <section className="beard-details">

          <div className="beard-details-heading">

            <span>
              YOUR PROFILE
            </span>

            <h2>
              Grooming details
            </h2>

          </div>

          <div className="beard-details-grid">

            <div className="beard-detail-item">

              <span>
                HAIR TYPE
              </span>

              <strong>
                {profile.hairType}
              </strong>

            </div>

            <div className="beard-detail-item">

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

        <section className="beard-section">

          <div className="beard-section-heading">

            <span>
              YOUR RECOMMENDATIONS
            </span>

            <h2>
              Styles made for you
            </h2>

          </div>


          <div className="beard-list">

            {beardItems.map((item) => (

              <article
                className={`beard-card ${
                  item.featured ? 'featured' : ''
                }`}
                key={item.id}
              >

                <div className="beard-style-visual">

                  <div className="beard-face-shape">
                    <Circle size={19} />
                  </div>

                  <span>
                    STYLE
                  </span>

                </div>

                <div className="beard-card-content">

                  <span className="beard-card-category">
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

                <div className="beard-card-check">
                  <Check size={14} />
                </div>

              </article>

            ))}

          </div>

        </section>


        {/* STYLE DIRECTION */}

        <section className="beard-direction">

          <div className="beard-direction-heading">

            <div>

              <span>
                AI GROOMING DIRECTION
              </span>

              <h2>
                Clean structure
              </h2>

            </div>

            <Sparkles size={16} />

          </div>


          <div className="beard-direction-points">

            <div>
              <Circle size={10} />
              <span>Keep cheek lines clean and natural.</span>
            </div>

            <div>
              <Circle size={10} />
              <span>Define the neckline without over-shaving.</span>
            </div>

            <div>
              <Circle size={10} />
              <span>Maintain even length across the beard.</span>
            </div>

          </div>

        </section>


        {/* TOP PICK */}

        <section className="beard-top-pick-card">

          <div className="beard-top-pick-left">

            <div className="beard-top-pick-icon">
              <Circle size={17} />
            </div>

            <div>

              <span>
                TOP AI PICK
              </span>

              <h3>
                {beardItems[0].title}
              </h3>

              <p>
                Best overall match for your current style.
              </p>

            </div>

          </div>


          <div className="beard-top-pick-score">

            <strong>
              {beardMatch}%
            </strong>

            <span>
              STYLE MATCH
            </span>

          </div>

        </section>


        {/* GROOMING TIP */}

        <section className="beard-tip">

          <div className="beard-tip-icon">
            <Sparkles size={16} />
          </div>

          <div>

            <span>
              AI GROOMING TIP
            </span>

            <p>
              {beardGroomingTip}
            </p>

          </div>

        </section>


        {/* CTA */}

        <button
          className="beard-complete-button"
          onClick={handleCompleteLook}
        >

          <WandSparkles size={17} />

          See My Complete Look

          <ChevronRight size={17} />

        </button>


        <p className="beard-footer">
          MakeMyLook.Ai · Personalized beauty intelligence
        </p>

      </div>
    </main>
  );
}

export default BeardRecommendation;