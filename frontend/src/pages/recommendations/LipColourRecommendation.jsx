import {
  ArrowLeft,
  Check,
  ChevronRight,
  Heart,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

import './LipColourRecommendation.css';

function LipColourRecommendation() {
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
  };

  const lipColourSets = {
  fair: [
    {
      id: 1,
      category: 'EVERYDAY NUDE',
      title: 'Soft Nude',
      subtitle: 'Your AI-selected lip',
      description:
        'A soft nude shade that keeps the complexion fresh and naturally balanced.',
      shade: '#C98278',
      featured: true,
    },
    {
      id: 2,
      category: 'SOFT PINK',
      title: 'Dusty Rose',
      subtitle: 'Fresh & delicate',
      description:
        'A gentle rose shade adds colour while keeping the overall look light and refined.',
      shade: '#C87882',
      featured: false,
    },
    {
      id: 3,
      category: 'PEACH',
      title: 'Peach Blush',
      subtitle: 'Warm & lively',
      description:
        'A soft peach tone creates a fresh finish that complements a lighter complexion.',
      shade: '#D98A78',
      featured: false,
    },
    {
      id: 4,
      category: 'DEEP ACCENT',
      title: 'Berry Rose',
      subtitle: 'Evening statement',
      description:
        'A richer berry-rose adds definition for an elegant evening look.',
      shade: '#9E4F63',
      featured: false,
    },
  ],

  light: [
    {
      id: 1,
      category: 'EVERYDAY NUDE',
      title: 'Warm Nude',
      subtitle: 'Your AI-selected lip',
      description:
        'A warm nude that blends naturally with a light complexion for an effortless everyday look.',
      shade: '#B97868',
      featured: true,
    },
    {
      id: 2,
      category: 'SOFT PINK',
      title: 'Warm Rose',
      subtitle: 'Fresh & feminine',
      description:
        'A muted rose brings gentle colour while maintaining a natural finish.',
      shade: '#B96F76',
      featured: false,
    },
    {
      id: 3,
      category: 'PEACH',
      title: 'Peach Coral',
      subtitle: 'Warm & lively',
      description:
        'A peach-coral shade adds warmth and freshness to the complexion.',
      shade: '#C97867',
      featured: false,
    },
    {
      id: 4,
      category: 'DEEP ACCENT',
      title: 'Rose Berry',
      subtitle: 'Evening statement',
      description:
        'A deeper rose-berry creates definition while keeping the look sophisticated.',
      shade: '#914C5A',
      featured: false,
    },
  ],

  medium: [
    {
      id: 1,
      category: 'EVERYDAY NUDE',
      title: 'Terracotta Nude',
      subtitle: 'Your AI-selected lip',
      description:
        'A warm terracotta nude complements a medium complexion with a balanced natural finish.',
      shade: '#A96856',
      featured: true,
    },
    {
      id: 2,
      category: 'SOFT PINK',
      title: 'Warm Rose',
      subtitle: 'Fresh & feminine',
      description:
        'A muted rose adds gentle colour without overpowering the natural complexion.',
      shade: '#B86F78',
      featured: false,
    },
    {
      id: 3,
      category: 'PEACH',
      title: 'Peach Coral',
      subtitle: 'Warm & lively',
      description:
        'A soft peach-coral creates a fresh finish and works beautifully with warm tones.',
      shade: '#C97867',
      featured: false,
    },
    {
      id: 4,
      category: 'DEEP ACCENT',
      title: 'Warm Berry',
      subtitle: 'Evening statement',
      description:
        'A richer berry tone adds definition for a more expressive evening lip.',
      shade: '#8E4F5E',
      featured: false,
    },
  ],

  tan: [
    {
      id: 1,
      category: 'EVERYDAY NUDE',
      title: 'Caramel Nude',
      subtitle: 'Your AI-selected lip',
      description:
        'A warm caramel nude enhances a tan complexion while keeping the look polished and natural.',
      shade: '#9A604B',
      featured: true,
    },
    {
      id: 2,
      category: 'WARM ROSE',
      title: 'Burnt Rose',
      subtitle: 'Rich & balanced',
      description:
        'A warm rose shade adds depth and complements golden skin beautifully.',
      shade: '#99545A',
      featured: false,
    },
    {
      id: 3,
      category: 'TERRACOTTA',
      title: 'Warm Terracotta',
      subtitle: 'Warm & lively',
      description:
        'A rich terracotta brings warmth and definition to the overall beauty look.',
      shade: '#A95645',
      featured: false,
    },
    {
      id: 4,
      category: 'DEEP ACCENT',
      title: 'Berry Brown',
      subtitle: 'Evening statement',
      description:
        'A deeper berry-brown creates a sophisticated statement for evening occasions.',
      shade: '#713F43',
      featured: false,
    },
  ],

  deep: [
    {
      id: 1,
      category: 'EVERYDAY NUDE',
      title: 'Rich Caramel Nude',
      subtitle: 'Your AI-selected lip',
      description:
        'A rich caramel nude complements deeper complexions with warmth and natural definition.',
      shade: '#8A5142',
      featured: true,
    },
    {
      id: 2,
      category: 'WARM ROSE',
      title: 'Burnt Rose',
      subtitle: 'Rich & elegant',
      description:
        'A warm burnt rose adds depth while maintaining a refined and wearable finish.',
      shade: '#8F4D50',
      featured: false,
    },
    {
      id: 3,
      category: 'TERRACOTTA',
      title: 'Deep Terracotta',
      subtitle: 'Warm & expressive',
      description:
        'A rich terracotta creates beautiful contrast and enhances deeper skin tones.',
      shade: '#984B3E',
      featured: false,
    },
    {
      id: 4,
      category: 'DEEP ACCENT',
      title: 'Berry Wine',
      subtitle: 'Evening statement',
      description:
        'A deep berry-wine shade creates a sophisticated statement with strong definition.',
      shade: '#6F3545',
      featured: false,
    },
  ],
};

const normalizedSkinTone =
  String(profile.skinTone).toLowerCase();

const lipColours =
  lipColourSets[normalizedSkinTone] ||
  lipColourSets.medium;

  const colourDirectionMap = {
    fair: 'Soft Rosy Nude',
    light: 'Warm Rose Nude',
    medium: 'Soft Warm Nude',
    tan: 'Rich Terracotta',
    deep: 'Deep Berry Nude',
  };

  const colourDirection =
    colourDirectionMap[normalizedSkinTone] ||
    colourDirectionMap.medium;

  const lipMatch =
    normalizedSkinTone === 'deep'
      ? 96
      : normalizedSkinTone === 'tan'
        ? 95
        : 94;

  const applicationTipMap = {
    fair:
      'Apply the lighter nude with a soft edge. Build the berry shade gradually for evening definition.',
    light:
      'Keep the nude layer lightweight and softly blended. Add the rose shade in thin layers for extra colour.',
    medium:
      'Keep the lip softly defined for daytime. Build the warm berry shade in thin layers for richer colour and depth.',
    tan:
      'Blend the caramel nude evenly across the lips. Layer the berry-brown shade for a deeper evening finish.',
    deep:
      'Apply the rich caramel nude as a smooth base. Layer Berry Wine at the centre and edges for a defined evening look.',
  };

  const applicationTip =
    applicationTipMap[normalizedSkinTone] ||
    applicationTipMap.medium;

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
        lipColours,
        selectedLipColour: lipColours[0],
        returnTo: '/recommendations/lip-colour',
      },
    });
  };

  return (
    <main className="lip-colour-page">
      <div className="lip-colour-container">

        {/* HEADER */}

        <header className="lip-colour-header">

          <button
            className="lip-colour-back-button"
            onClick={handleBack}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="lip-colour-header-title">

            <span>
              YOUR BEAUTY PLAN
            </span>

            <strong>
              Lip Colour Recommendations
            </strong>

          </div>

          <div className="lip-colour-header-sparkle">
            <Sparkles size={17} />
          </div>

        </header>


        {/* HERO */}

        <section className="lip-colour-hero">

          <div className="lip-colour-hero-icon">
            <WandSparkles size={21} />
          </div>

          <p className="lip-colour-eyebrow">
            AI CURATED FOR YOU
          </p>

          <h1>
            Find your perfect
            <span>lip colour.</span>
          </h1>

          <p className="lip-colour-hero-description">
            We've combined your skin tone, undertone and outfit
            to find lip colours that complete your look.
          </p>

        </section>


        {/* PROFILE SUMMARY */}

        <section className="lip-colour-profile-card">

          <div className="lip-colour-profile-item">

            <span>
              SKIN
            </span>

            <strong>
              {profile.skinTone}
            </strong>

          </div>

          <div className="lip-colour-profile-divider" />

          <div className="lip-colour-profile-item">

            <span>
              UNDERTONE
            </span>

            <strong>
              {profile.undertone}
            </strong>

          </div>

          <div className="lip-colour-profile-divider" />

          <div className="lip-colour-profile-item">

            <span>
              OUTFIT
            </span>

            <strong>
              {profile.outfit}
            </strong>

          </div>

        </section>


        {/* AI LOOK SUMMARY */}

        <section className="lip-colour-look-summary">

          <div className="lip-colour-look-summary-icon">
            <Heart size={17} />
          </div>

          <div>

            <span>
              AI COLOUR DIRECTION
            </span>

            <h2>
              {colourDirection}
            </h2>

            <p>
              A balanced lip palette designed to complement
              your complexion and current outfit.
            </p>

          </div>

          <div className="lip-colour-match">

            <strong>
              {lipMatch}
            </strong>

            <span>
              MATCH
            </span>

          </div>

        </section>


        {/* RECOMMENDATIONS */}

        <section className="lip-colour-section">

          <div className="lip-colour-section-heading">

            <span>
              YOUR RECOMMENDATIONS
            </span>

            <h2>
              Shades made for you
            </h2>

          </div>


          <div className="lip-colour-list">

            {lipColours.map((item) => (

              <article
                className={`lip-colour-card ${
                  item.featured ? 'featured' : ''
                }`}
                key={item.id}
              >

                <div
                  className="lip-colour-shade"
                  style={{
                    backgroundColor: item.shade,
                  }}
                >
                  <Heart size={16} />
                </div>

                <div className="lip-colour-card-content">

                  <span className="lip-colour-card-category">
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

                <div className="lip-colour-card-check">
                  <Check size={14} />
                </div>

              </article>

            ))}

          </div>

        </section>


        {/* COLOUR PALETTE */}

        <section className="lip-palette-section">

          <div className="lip-palette-heading">

            <div>

              <span>
                YOUR LIP COLOUR STORY
              </span>

              <h2>
                AI-selected shades
              </h2>

            </div>

            <Heart size={16} />

          </div>


          <div className="lip-palette">

            <div
              className="lip-palette-colour"
              style={{
                backgroundColor: lipColours[0].shade,
              }}
            >
              <span>
                NUDE
              </span>
            </div>

            <div
              className="lip-palette-colour"
              style={{
                backgroundColor: lipColours[1].shade,
              }}
            >
              <span>
                ROSE
              </span>
            </div>

            <div
              className="lip-palette-colour"
              style={{
                backgroundColor: lipColours[2].shade,
              }}
            >
              <span>
                PEACH
              </span>
            </div>

            <div
              className="lip-palette-colour"
              style={{
                backgroundColor: lipColours[3].shade,
              }}
            >
              <span>
                BERRY
              </span>
            </div>

          </div>

        </section>


        {/* TOP PICK */}

        <section className="lip-top-pick-card">

          <div className="lip-top-pick-left">

            <div className="lip-top-pick-icon">
              <Heart size={17} />
            </div>

            <div>

              <span>
                TOP AI PICK
              </span>

              <h3>
                {lipColours[0].title}
              </h3>

              <p>
                Best overall match for your current look.
              </p>

            </div>

          </div>


          <div className="lip-top-pick-shade">

            <div
              className="lip-top-pick-circle"
              style={{
                backgroundColor: lipColours[0].shade,
              }}
            />

            <span>
              {lipColours[0].shade}
            </span>

          </div>

        </section>


        {/* BEAUTY TIP */}

        <section className="lip-colour-tip">

          <div className="lip-colour-tip-icon">
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
          className="lip-colour-complete-button"
          onClick={handleCompleteLook}
        >

          <WandSparkles size={17} />

          See My Complete Look

          <ChevronRight size={17} />

        </button>


        <p className="lip-colour-footer">
          MakeMyLook.Ai · Personalized beauty intelligence
        </p>

      </div>
    </main>
  );
}

export default LipColourRecommendation;