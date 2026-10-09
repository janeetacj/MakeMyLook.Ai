import {
  ArrowLeft,
  Check,
  ChevronRight,
  Circle,
  Eye,
  Heart,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

import './MakeupRecommendation.css';

function MakeupRecommendation() {
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
    outfitAnalysisResult,
    returnTo,
  } = location.state || {};

  const detectedOutfitAnalysis =
    outfitAnalysisResult || {};

  const detectedOutfitColour =
    detectedOutfitAnalysis.dominant_colour ||
    outfitData?.dominantColour ||
    outfitData?.color ||
    'Not detected';

  const detectedOutfitHex =
    detectedOutfitAnalysis.dominant_hex ||
    outfitData?.dominantHex ||
    '#D8C1A8';

  const profile = {
    skinTone:
      analysisResult?.analysis?.skin_tone ||
      skinAnalysis?.skinTone ||
      beautyProfile?.skinTone ||
      selectedSkinTone ||
      'Medium',

    undertone:
      skinAnalysis?.undertone ||
      beautyProfile?.undertone ||
      'Warm',

    outfit:
      detectedOutfitColour ||
      outfitData?.color ||
      outfitData?.outfitColor ||
      'Not detected',
  };

  const makeupItems =
    profile.skinTone === 'fair'
      ? [
          {
            id: 1,
            category: 'COMPLEXION',
            title: 'Ivory Beige Base',
            subtitle: 'Natural skin-like finish',
            description:
              'A light ivory-beige base selected to blend naturally with your complexion.',
            shade: '#E8C7B5',
            icon: <Circle size={17} />,
          },
          {
            id: 2,
            category: 'BLUSH',
            title: 'Soft Peach Blush',
            subtitle: 'Fresh natural flush',
            description:
              'A soft peach shade adds a fresh glow while keeping the look natural.',
            shade: '#E9A08A',
            icon: <Heart size={17} />,
          },
          {
            id: 3,
            category: 'EYES',
            title: 'Champagne Bronze',
            subtitle: 'Soft dimensional eyes',
            description:
              'A subtle champagne-bronze tone adds warmth and definition without overpowering the complexion.',
            shade: '#C9A477',
            icon: <Eye size={17} />,
          },
          {
            id: 4,
            category: 'LIPSTICK',
            title: 'Rose Nude',
            subtitle: 'Your AI-selected lip',
            description:
              'A balanced rose-nude shade that complements a fair complexion beautifully.',
            shade: '#B97876',
            icon: <Heart size={17} />,
          },
        ]
      : profile.skinTone === 'light'
        ? [
            {
              id: 1,
              category: 'COMPLEXION',
              title: 'Light Warm Beige Base',
              subtitle: 'Natural skin-like finish',
              description:
                'A warm beige base selected to blend naturally with your light complexion.',
              shade: '#D9AA8F',
              icon: <Circle size={17} />,
            },
            {
              id: 2,
              category: 'BLUSH',
              title: 'Peach Coral Blush',
              subtitle: 'Soft warm flush',
              description:
                'A peach-coral shade adds warmth and a healthy natural flush.',
              shade: '#D9826F',
              icon: <Heart size={17} />,
            },
            {
              id: 3,
              category: 'EYES',
              title: 'Soft Bronze',
              subtitle: 'Warm dimensional eyes',
              description:
                'A versatile bronze shade that enhances light complexions with soft definition.',
              shade: '#9A6C4E',
              icon: <Eye size={17} />,
            },
            {
              id: 4,
              category: 'LIPSTICK',
              title: 'Warm Rose Nude',
              subtitle: 'Your AI-selected lip',
              description:
                'A warm rose-nude shade selected to complement your complexion.',
              shade: '#A96856',
              icon: <Heart size={17} />,
            },
          ]
        : profile.skinTone === 'medium'
          ? [
              {
                id: 1,
                category: 'COMPLEXION',
                title: 'Warm Beige Base',
                subtitle: 'Natural skin-like finish',
                description:
                  'A warm beige base selected to blend naturally with your medium complexion.',
                shade: '#C58F70',
                icon: <Circle size={17} />,
              },
              {
                id: 2,
                category: 'BLUSH',
                title: 'Peach Blush',
                subtitle: 'Soft warm flush',
                description:
                  'A muted peach shade adds warmth while keeping the look natural.',
                shade: '#D99178',
                icon: <Heart size={17} />,
              },
              {
                id: 3,
                category: 'EYES',
                title: 'Soft Bronze',
                subtitle: 'Warm dimensional eyes',
                description:
                  'A soft bronze tone provides warmth and definition for a polished look.',
                shade: '#9A6C4E',
                icon: <Eye size={17} />,
              },
              {
                id: 4,
                category: 'LIPSTICK',
                title: 'Terracotta Nude',
                subtitle: 'Your AI-selected lip',
                description:
                  'A warm terracotta-nude shade selected to complement your complexion.',
                shade: '#A96856',
                icon: <Heart size={17} />,
              },
            ]
          : profile.skinTone === 'tan'
            ? [
                {
                  id: 1,
                  category: 'COMPLEXION',
                  title: 'Golden Tan Base',
                  subtitle: 'Natural skin-like finish',
                  description:
                    'A golden-warm base selected to complement your tan complexion.',
                  shade: '#A96F50',
                  icon: <Circle size={17} />,
                },
                {
                  id: 2,
                  category: 'BLUSH',
                  title: 'Warm Terracotta Blush',
                  subtitle: 'Rich warm flush',
                  description:
                    'A warm terracotta shade adds natural warmth and dimension.',
                  shade: '#B9654E',
                  icon: <Heart size={17} />,
                },
                {
                  id: 3,
                  category: 'EYES',
                  title: 'Rich Bronze',
                  subtitle: 'Defined dimensional eyes',
                  description:
                    'A deeper bronze shade creates definition while complementing tan skin.',
                  shade: '#79513A',
                  icon: <Eye size={17} />,
                },
                {
                  id: 4,
                  category: 'LIPSTICK',
                  title: 'Burnt Rose',
                  subtitle: 'Your AI-selected lip',
                  description:
                    'A warm burnt-rose shade creates an elegant finishing touch.',
                  shade: '#914C48',
                  icon: <Heart size={17} />,
                },
              ]
            : [
                {
                  id: 1,
                  category: 'COMPLEXION',
                  title: 'Deep Golden Base',
                  subtitle: 'Natural skin-like finish',
                  description:
                    'A rich golden-brown base selected to complement your deep complexion.',
                  shade: '#754936',
                  icon: <Circle size={17} />,
                },
                {
                  id: 2,
                  category: 'BLUSH',
                  title: 'Deep Terracotta Blush',
                  subtitle: 'Rich warm flush',
                  description:
                    'A rich terracotta shade adds warmth and definition to the complexion.',
                  shade: '#A65342',
                  icon: <Heart size={17} />,
                },
                {
                  id: 3,
                  category: 'EYES',
                  title: 'Deep Bronze',
                  subtitle: 'Rich dimensional eyes',
                  description:
                    'A deep bronze tone provides elegant definition and warmth.',
                  shade: '#5C392B',
                  icon: <Eye size={17} />,
                },
                {
                  id: 4,
                  category: 'LIPSTICK',
                  title: 'Warm Berry Nude',
                  subtitle: 'Your AI-selected lip',
                  description:
                    'A rich berry-nude shade creates a sophisticated finishing look.',
                  shade: '#783E46',
                  icon: <Heart size={17} />,
                },
              ];

  const lookDirection =
    profile.skinTone === 'fair'
      ? {
          title: 'Soft Radiant Glow',
          description:
            'A luminous everyday look designed to enhance your natural complexion with soft, fresh tones.',
        }
      : profile.skinTone === 'light'
        ? {
            title: 'Warm Everyday Glow',
            description:
              'A polished warm look designed to complement your complexion with natural peach and bronze tones.',
          }
        : profile.skinTone === 'medium'
          ? {
              title: 'Soft Warm Glow',
              description:
                'A polished everyday look designed to complement your natural features with warm, balanced tones.',
            }
          : profile.skinTone === 'tan'
            ? {
                title: 'Golden Defined Glow',
                description:
                  'A warm, defined look designed to enhance your complexion with rich bronze and terracotta tones.',
              }
            : {
                title: 'Rich Radiant Glow',
                description:
                  'A sophisticated look designed to enhance your complexion with rich bronze and warm berry tones.',
              };

  const makeupMatch =
    detectedOutfitAnalysis.confidence != null
      ? Math.round(detectedOutfitAnalysis.confidence * 100)
      : 94;

  const applicationTip =
    `Keep the complexion lightweight and softly blended. ` +
    `Build the ${makeupItems[2].title.toLowerCase()} gradually and ` +
    `use the ${makeupItems[3].title.toLowerCase()} lip as the finishing focal point.`;

  const handleBack = () => {
    navigate(returnTo || '/recommendations/details', {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
        outfitImage,
        outfitData,
        beautyProfile,
        skinAnalysis,
        outfitAnalysisResult,
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
        outfitAnalysisResult,
      },
    });
  };

  return (
    <main className="makeup-page">

      <div className="makeup-container">

        {/* HEADER */}

        <header className="makeup-header">

          <button
            className="makeup-back-button"
            onClick={handleBack}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="makeup-header-title">

            <span>
              YOUR BEAUTY PLAN
            </span>

            <strong>
              Makeup Recommendations
            </strong>

          </div>

          <div className="makeup-header-sparkle">
            <Sparkles size={17} />
          </div>

        </header>


        {/* HERO */}

        <section className="makeup-hero">

          <div className="makeup-hero-icon">
            <WandSparkles size={21} />
          </div>

          <p className="makeup-eyebrow">
            AI CURATED FOR YOU
          </p>

          <h1>
            Your perfect
            <span>beauty palette.</span>
          </h1>

          <p className="makeup-hero-description">
            We've combined your skin profile, undertone
            and outfit to create a coordinated makeup look.
          </p>

        </section>


        {/* PROFILE SUMMARY */}

        <section className="makeup-profile-card">

          <div className="makeup-profile-item">

            <span>
              SKIN
            </span>

            <strong>
              {profile.skinTone}
            </strong>

          </div>

          <div className="makeup-profile-divider" />

          <div className="makeup-profile-item">

            <span>
              UNDERTONE
            </span>

            <strong>
              {profile.undertone}
            </strong>

          </div>

          <div className="makeup-profile-divider" />

          <div className="makeup-profile-item">

            <span>
              OUTFIT
            </span>

            <strong>
              {profile.outfit}
            </strong>

          </div>

        </section>


        {/* LOOK SUMMARY */}

        <section className="makeup-look-summary">

          <div className="makeup-look-summary-icon">
            <Sparkles size={17} />
          </div>

          <div>

            <span>
              AI LOOK DIRECTION
            </span>

            <h2>
              {lookDirection.title}
            </h2>

            <p>
              {lookDirection.description}
            </p>

          </div>

          <div className="makeup-match">

            <strong>
              {makeupMatch}
            </strong>

            <span>
              MATCH
            </span>

          </div>

        </section>


        {/* MAKEUP SECTIONS */}

        <section className="makeup-section">

          <div className="makeup-section-heading">

            <span>
              YOUR RECOMMENDATIONS
            </span>

            <h2>
              Complete your makeup
            </h2>

          </div>


          <div className="makeup-list">

            {makeupItems.map((item) => (

              <article
                className={`makeup-card ${
                  item.category === 'LIPSTICK'
                    ? 'featured'
                    : ''
                }`}
                key={item.id}
              >

                <div
                  className="makeup-shade"
                  style={{
                    backgroundColor: item.shade,
                  }}
                >
                  {item.icon}
                </div>

                <div className="makeup-card-content">

                  <span className="makeup-card-category">
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

                <div className="makeup-card-check">
                  <Check size={14} />
                </div>

              </article>

            ))}

          </div>

        </section>


        {/* SHADE PALETTE */}

        <section className="shade-palette-section">

          <div className="shade-palette-heading">

            <div>

              <span>
                YOUR COLOUR STORY
              </span>

              <h2>
                AI-selected shades
              </h2>

            </div>

            <Sparkles size={16} />

          </div>


          <div className="shade-palette">

            <div
              className="palette-colour"
              style={{
                backgroundColor: makeupItems[0].shade,
              }}
            >
              <span>
                BASE
              </span>
            </div>

            <div
              className="palette-colour"
              style={{
                backgroundColor: makeupItems[1].shade,
              }}
            >
              <span>
                BLUSH
              </span>
            </div>

            <div
              className="palette-colour"
              style={{
                backgroundColor: makeupItems[2].shade,
              }}
            >
              <span>
                EYES
              </span>
            </div>

            <div
              className="palette-colour"
              style={{
                backgroundColor: makeupItems[3].shade,
              }}
            >
              <span>
                LIPS
              </span>
            </div>

          </div>

        </section>


        {/* LIPSTICK FOCUS */}

        <section className="lipstick-focus-card">

          <div className="lipstick-focus-left">

            <div className="lipstick-focus-icon">
              <Heart size={17} />
            </div>

            <div>

              <span>
                TOP AI PICK
              </span>

              <h3>
                {makeupItems[3].title}
              </h3>

              <p>
                {makeupItems[3].description}
              </p>

            </div>

          </div>

          <div className="lipstick-focus-shade">

            <div
              className="lipstick-focus-circle"
              style={{
                backgroundColor: makeupItems[3].shade,
              }}
            />

            <span>
              {makeupItems[3].shade}
            </span>

          </div>

        </section>


        {/* BEAUTY TIP */}

        <section className="makeup-tip">

          <div className="makeup-tip-icon">
            <Sparkles size={16} />
          </div>

          <div>

            <span>
              AI APPLICATION TIP
            </span>

            <p>
              {applicationTip}
            </p>

          </div>

        </section>


        {/* CTA */}

        <button
          className="makeup-complete-button"
          onClick={handleCompleteLook}
        >

          <WandSparkles size={17} />

          See My Complete Look

          <ChevronRight size={17} />

        </button>


        <p className="makeup-footer">
          MakeMyLook.Ai · Personalized beauty intelligence
        </p>

      </div>

    </main>
  );
}

export default MakeupRecommendation;