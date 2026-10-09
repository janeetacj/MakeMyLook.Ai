import {
  ArrowLeft,
  Check,
  ChevronRight,
  Scissors,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

import './HairRecommendation.css';

function HairRecommendation() {
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
      'Soft Beige',

    gender:
      beautyProfile?.gender ||
      beautyProfile?.sex ||
      'prefer-not',

    stylePreference:
      beautyProfile?.stylePreference ||
      'natural',

    hairType:
      beautyProfile?.hairType ||
      'not-sure',

    hairLength:
      beautyProfile?.hairLength ||
      'not-sure',
  };

  const genderLabel = {
    woman: 'Woman',
    man: 'Man',
    'prefer-not': 'Unisex',
  };

  const styleLabel = {
    natural: 'Natural',
    polished: 'Polished',
    bold: 'Bold',
  };

  const hairTypeLabel = {
    straight: 'Straight',
    wavy: 'Wavy',
    curly: 'Curly',
    coily: 'Coily',
    'not-sure': 'Not specified',
  };

  const hairLengthLabel = {
    short: 'Short',
    medium: 'Medium',
    long: 'Long',
    'not-sure': 'Not specified',
  };

  const isWoman = profile.gender === 'woman';
  const isMan = profile.gender === 'man';

  const hairRecommendationSets = {
    woman: {
      straight: {
        natural: [
          ['EVERYDAY STYLE', 'Soft Straight Layers', 'Natural & effortless'],
          ['NATURAL LOOK', 'Face-Framing Layers', 'Soft & flattering'],
          ['POLISHED LOOK', 'Smooth Defined Style', 'Refined & balanced'],
          ['STATEMENT STYLE', 'Long Sleek Finish', 'Elegant & confident'],
        ],
        polished: [
          ['EVERYDAY STYLE', 'Polished Layered Hair', 'Clean & refined'],
          ['SIGNATURE LOOK', 'Face-Framing Layers', 'Elegant & balanced'],
          ['POLISHED LOOK', 'Sleek Defined Style', 'Sophisticated & smooth'],
          ['STATEMENT STYLE', 'Glossy Long Finish', 'Refined & confident'],
        ],
        bold: [
          ['EVERYDAY STYLE', 'Sharp Layered Cut', 'Modern & confident'],
          ['STATEMENT LOOK', 'Long Face-Framing Layers', 'Bold & expressive'],
          ['POLISHED LOOK', 'Sleek Statement Style', 'Strong & refined'],
          ['EVENING STYLE', 'Glossy Dramatic Finish', 'Elegant & striking'],
        ],
      },

      wavy: {
        natural: [
          ['EVERYDAY STYLE', 'Soft Layered Waves', 'Your AI-selected style'],
          ['NATURAL LOOK', 'Face-Framing Waves', 'Soft & flattering'],
          ['POLISHED LOOK', 'Defined Natural Waves', 'Refined & balanced'],
          ['STATEMENT STYLE', 'Voluminous Waves', 'Expressive & confident'],
        ],
        polished: [
          ['EVERYDAY STYLE', 'Polished Soft Waves', 'Elegant & refined'],
          ['SIGNATURE LOOK', 'Structured Wave Layers', 'Balanced & flattering'],
          ['POLISHED LOOK', 'Defined Glossy Waves', 'Smooth & sophisticated'],
          ['STATEMENT STYLE', 'Voluminous Styled Waves', 'Glamorous & confident'],
        ],
        bold: [
          ['EVERYDAY STYLE', 'Textured Statement Waves', 'Modern & expressive'],
          ['STATEMENT LOOK', 'Layered Volume Waves', 'Bold & flattering'],
          ['POLISHED LOOK', 'Defined Glam Waves', 'Strong & refined'],
          ['EVENING STYLE', 'Full Voluminous Waves', 'Dramatic & confident'],
        ],
      },

      curly: {
        natural: [
          ['EVERYDAY STYLE', 'Defined Natural Curls', 'Soft & effortless'],
          ['NATURAL LOOK', 'Curly Face-Framing Layers', 'Balanced & flattering'],
          ['POLISHED LOOK', 'Defined Curl Shape', 'Refined & natural'],
          ['STATEMENT STYLE', 'Voluminous Curls', 'Expressive & confident'],
        ],
        polished: [
          ['EVERYDAY STYLE', 'Polished Defined Curls', 'Clean & elegant'],
          ['SIGNATURE LOOK', 'Structured Curl Layers', 'Balanced & flattering'],
          ['POLISHED LOOK', 'Glossy Curl Definition', 'Refined & sophisticated'],
          ['STATEMENT STYLE', 'Controlled Curl Volume', 'Elegant & confident'],
        ],
        bold: [
          ['EVERYDAY STYLE', 'Statement Curly Layers', 'Bold & natural'],
          ['SIGNATURE LOOK', 'Voluminous Face-Framing Curls', 'Expressive & flattering'],
          ['POLISHED LOOK', 'Defined Statement Curls', 'Strong & refined'],
          ['EVENING STYLE', 'Maximum Curl Volume', 'Dramatic & confident'],
        ],
      },

      coily: {
        natural: [
          ['EVERYDAY STYLE', 'Defined Natural Coils', 'Natural & confident'],
          ['NATURAL LOOK', 'Soft Coily Layers', 'Balanced & flattering'],
          ['POLISHED LOOK', 'Defined Coil Shape', 'Refined & elegant'],
          ['STATEMENT STYLE', 'Voluminous Coils', 'Expressive & confident'],
        ],
        polished: [
          ['EVERYDAY STYLE', 'Polished Coil Definition', 'Clean & elegant'],
          ['SIGNATURE LOOK', 'Structured Coily Layers', 'Balanced & refined'],
          ['POLISHED LOOK', 'Defined Glossy Coils', 'Sophisticated & natural'],
          ['STATEMENT STYLE', 'Controlled Coil Volume', 'Elegant & confident'],
        ],
        bold: [
          ['EVERYDAY STYLE', 'Bold Defined Coils', 'Strong & natural'],
          ['SIGNATURE LOOK', 'Voluminous Coily Layers', 'Expressive & confident'],
          ['POLISHED LOOK', 'Statement Coil Shape', 'Modern & refined'],
          ['EVENING STYLE', 'Full Coily Volume', 'Dramatic & confident'],
        ],
      },
    },

    man: {
      natural: [
        ['EVERYDAY STYLE', 'Textured Side Sweep', 'Clean & effortless'],
        ['SMART CASUAL', 'Soft Taper', 'Refined & balanced'],
        ['TEXTURED LOOK', 'Natural Volume', 'Relaxed & confident'],
        ['EVENING STYLE', 'Defined Sweep Back', 'Structured & refined'],
      ],
      polished: [
        ['EVERYDAY STYLE', 'Classic Side Sweep', 'Clean & polished'],
        ['SMART CASUAL', 'Clean Taper', 'Refined & balanced'],
        ['POLISHED LOOK', 'Structured Side Part', 'Sharp & professional'],
        ['EVENING STYLE', 'Sleek Sweep Back', 'Sophisticated & refined'],
      ],
      bold: [
        ['EVERYDAY STYLE', 'Textured Modern Sweep', 'Bold & effortless'],
        ['STATEMENT LOOK', 'High Volume Top', 'Strong & confident'],
        ['TEXTURED LOOK', 'Defined Textured Crop', 'Modern & expressive'],
        ['EVENING STYLE', 'Sharp Sweep Back', 'Structured & striking'],
      ],
    },
  };

  const selectedStyle =
    profile.stylePreference || 'natural';

  const selectedHairType =
    profile.hairType || 'not-sure';

  const selectedGender =
    isMan ? 'man' : 'woman';

  const recommendationSet =
    selectedGender === 'man'
      ? hairRecommendationSets.man[selectedStyle] ||
        hairRecommendationSets.man.natural
      : hairRecommendationSets.woman[selectedHairType]?.[selectedStyle] ||
        hairRecommendationSets.woman.wavy[selectedStyle] ||
        hairRecommendationSets.woman.wavy.natural;

  const hairItems = recommendationSet.map(
    ([category, title, subtitle], index) => ({
      id: index + 1,
      category,
      title,
      subtitle,
      description:
        index === 0
          ? `An AI-curated hairstyle selected for your ${hairTypeLabel[selectedHairType] || 'natural'} hair and ${styleLabel[selectedStyle] || 'natural'} style preference.`
          : `A ${selectedStyle} hairstyle direction designed to work with your ${hairTypeLabel[selectedHairType] || 'natural'} hair profile.`,
      featured: index === 0,
    })
  );

  const hairStyleDirection = isMan
    ? selectedStyle === 'bold'
      ? 'Bold Textured Finish'
      : selectedStyle === 'polished'
        ? 'Clean Structured Finish'
        : 'Clean Textured Finish'
    : selectedHairType === 'straight'
      ? selectedStyle === 'bold'
        ? 'Sleek Statement Movement'
        : 'Smooth Natural Movement'
      : selectedHairType === 'curly'
        ? selectedStyle === 'bold'
          ? 'Defined Volume & Texture'
          : 'Defined Natural Curls'
        : selectedHairType === 'coily'
          ? selectedStyle === 'bold'
            ? 'Bold Coily Definition'
            : 'Defined Natural Coils'
          : selectedStyle === 'bold'
            ? 'Expressive Wave Movement'
            : selectedStyle === 'polished'
              ? 'Polished Wave Movement'
              : 'Soft Natural Movement';

  const hairMatch =
    selectedStyle === 'bold'
      ? 96
      : selectedHairType === 'curly' ||
          selectedHairType === 'coily'
        ? 95
        : 93;

  const hairTipMap = {
    straight: {
      natural:
        'Keep the natural shape visible and use a lightweight smoothing product to maintain movement without weighing the hair down.',
      polished:
        'Use a lightweight smoothing product and finish with a soft shine spray for a clean, polished appearance.',
      bold:
        'Create stronger definition with a lightweight styling product while keeping the hair smooth and controlled.',
    },

    wavy: {
      natural:
        'Enhance the natural wave pattern with a lightweight curl cream and avoid heavy products that can flatten the movement.',
      polished:
        'Define the waves with a lightweight styling cream and finish with a soft-hold product for a polished look.',
      bold:
        'Build volume at the roots and define the natural waves with a lightweight styling product for extra movement.',
    },

    curly: {
      natural:
        'Keep the natural curl pattern visible and use a moisturizing curl cream to enhance definition without stiffness.',
      polished:
        'Use a curl-defining cream and gently shape the curls for a polished finish while maintaining natural movement.',
      bold:
        'Build controlled volume and definition with a curl cream, focusing on shape while keeping the curls touchable.',
    },

    coily: {
      natural:
        'Keep the natural coil pattern hydrated and defined with a lightweight moisturizing product.',
      polished:
        'Use a nourishing styling product to define the coils and create a neat, polished finish without losing texture.',
      bold:
        'Emphasize natural volume and definition with a moisturizing styling product while maintaining the coil pattern.',
    },

    'not-sure': {
      natural:
        'Start with a lightweight styling product and work with your natural texture rather than heavily reshaping the hair.',
      polished:
        'Use a lightweight styling product to create a clean finish while keeping the natural texture visible.',
      bold:
        'Build controlled volume gradually and use a lightweight product to create definition without a heavy finish.',
    },
  };

  const hairStylingTip =
    hairTipMap[selectedHairType]?.[selectedStyle] ||
    hairTipMap['not-sure'].natural;

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
        hairItems,
        selectedHairStyle: hairItems[0],
        returnTo: '/recommendations/hair',
      },
    });
  };

  return (
    <main className="hair-page">
      <div className="hair-container">

        {/* HEADER */}

        <header className="hair-header">

          <button
            className="hair-back-button"
            onClick={handleBack}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="hair-header-title">

            <span>
              YOUR BEAUTY PLAN
            </span>

            <strong>
              Hair Recommendations
            </strong>

          </div>

          <div className="hair-header-sparkle">
            <Sparkles size={17} />
          </div>

        </header>


        {/* HERO */}

        <section className="hair-hero">

          <div className="hair-hero-icon">
            <WandSparkles size={21} />
          </div>

          <p className="hair-eyebrow">
            AI CURATED FOR YOU
          </p>

          <h1>
            Find your perfect
            <span>hair style.</span>
          </h1>

          <p className="hair-hero-description">
            We've combined your hair profile, personal style
            and current outfit to create coordinated hairstyle ideas.
          </p>

        </section>


        {/* PROFILE SUMMARY */}

        <section className="hair-profile-card">

          <div className="hair-profile-item">

            <span>
              PROFILE
            </span>

            <strong>
              {genderLabel[profile.gender]}
            </strong>

          </div>

          <div className="hair-profile-divider" />

          <div className="hair-profile-item">

            <span>
              HAIR TYPE
            </span>

            <strong>
              {hairTypeLabel[profile.hairType]}
            </strong>

          </div>

          <div className="hair-profile-divider" />

          <div className="hair-profile-item">

            <span>
              LENGTH
            </span>

            <strong>
              {hairLengthLabel[profile.hairLength]}
            </strong>

          </div>

        </section>


        {/* HAIR PROFILE DETAILS */}

        <section className="hair-details-card">

          <div className="hair-detail">

            <span>
              STYLE
            </span>

            <strong>
              {styleLabel[profile.stylePreference]}
            </strong>

          </div>

          <div className="hair-detail">

            <span>
              SKIN
            </span>

            <strong>
              {profile.skinTone}
            </strong>

          </div>

          <div className="hair-detail">

            <span>
              UNDERTONE
            </span>

            <strong>
              {profile.undertone}
            </strong>

          </div>

          <div className="hair-detail">

            <span>
              OUTFIT
            </span>

            <strong>
              {profile.outfit}
            </strong>

          </div>

        </section>


        {/* AI LOOK SUMMARY */}

        <section className="hair-look-summary">

          <div className="hair-look-summary-icon">
            <Scissors size={17} />
          </div>

          <div>

            <span>
              AI STYLE DIRECTION
            </span>

            <h2>
              {hairStyleDirection}
            </h2>

            <p>
              A hairstyle direction designed around your
              selected hair profile and personal style.
            </p>

          </div>

          <div className="hair-match">

            <strong>
              {hairMatch}
            </strong>

            <span>
              MATCH
            </span>

          </div>

        </section>


        {/* RECOMMENDATIONS */}

        <section className="hair-section">

          <div className="hair-section-heading">

            <span>
              YOUR RECOMMENDATIONS
            </span>

            <h2>
              Styles made for you
            </h2>

          </div>


          <div className="hair-list">

            {hairItems.map((item) => (

              <article
                className={`hair-card ${
                  item.featured ? 'featured' : ''
                }`}
                key={item.id}
              >

                <div className="hair-card-icon">
                  <Scissors size={17} />
                </div>

                <div className="hair-card-content">

                  <span className="hair-card-category">
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

                <div className="hair-card-check">
                  <Check size={14} />
                </div>

              </article>

            ))}

          </div>

        </section>


        {/* STYLE DIRECTION */}

        <section className="hair-style-section">

          <div className="hair-style-heading">

            <div>

              <span>
                YOUR STYLE STORY
              </span>

              <h2>
                AI-selected directions
              </h2>

            </div>

            <Sparkles size={16} />

          </div>


          <div className="hair-style-grid">

            <div className="hair-style-chip">
              <Scissors size={14} />
              <span>
                {hairTypeLabel[profile.hairType]}
              </span>
            </div>

            <div className="hair-style-chip">
              <Sparkles size={14} />
              <span>
                {styleLabel[profile.stylePreference]}
              </span>
            </div>

            <div className="hair-style-chip">
              <WandSparkles size={14} />
              <span>
                {hairLengthLabel[profile.hairLength]}
              </span>
            </div>

          </div>

        </section>


        {/* TOP PICK */}

        <section className="hair-top-pick-card">

          <div className="hair-top-pick-left">

            <div className="hair-top-pick-icon">
              <Scissors size={17} />
            </div>

            <div>

              <span>
                TOP AI PICK
              </span>

              <h3>
                {hairItems[0].title}
              </h3>

              <p>
                Best overall match for your current profile.
              </p>

            </div>

          </div>

          <div className="hair-top-pick-badge">
            <Check size={15} />
          </div>

        </section>


        {/* BEAUTY TIP */}

        <section className="hair-tip">

          <div className="hair-tip-icon">
            <Sparkles size={16} />
          </div>

          <div>

            <span>
              AI STYLING TIP
            </span>

            <p>
              {hairStylingTip}
            </p>

          </div>

        </section>


        {/* CTA */}

        <button
          className="hair-complete-button"
          onClick={handleCompleteLook}
        >

          <WandSparkles size={17} />

          See My Complete Look

          <ChevronRight size={17} />

        </button>


        <p className="hair-footer">
          MakeMyLook.Ai · Personalized beauty intelligence
        </p>

      </div>
    </main>
  );
}

export default HairRecommendation;