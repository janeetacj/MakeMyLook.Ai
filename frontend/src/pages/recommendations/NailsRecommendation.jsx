import {
  ArrowLeft,
  Check,
  ChevronRight,
  Circle,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

import './NailsRecommendation.css';

function NailsRecommendation() {
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

    stylePreference:
      beautyProfile?.stylePreference ||
      'natural',
  };

  const nailColourSets = {
    fair: [
      {
        id: 1,
        category: 'EVERYDAY NUDE',
        title: 'Soft Blush Nude',
        subtitle: 'Your AI-selected nail',
        description:
          'A delicate blush nude that keeps the manicure soft, clean and naturally elegant.',
        shade: '#D9AAA0',
        featured: true,
      },
      {
        id: 2,
        category: 'SOFT PINK',
        title: 'Dusty Rose',
        subtitle: 'Soft & refined',
        description:
          'A muted rose adds gentle colour while maintaining a light and polished finish.',
        shade: '#C88A95',
        featured: false,
      },
      {
        id: 3,
        category: 'PEACH',
        title: 'Peach Beige',
        subtitle: 'Fresh & coordinated',
        description:
          'A soft peach-beige creates a fresh manicure that complements a fair complexion.',
        shade: '#D9A28D',
        featured: false,
      },
      {
        id: 4,
        category: 'STATEMENT',
        title: 'Berry Rose',
        subtitle: 'Expressive & elegant',
        description:
          'A deeper berry-rose adds definition while keeping the manicure sophisticated.',
        shade: '#9C5265',
        featured: false,
      },
    ],

    light: [
      {
        id: 1,
        category: 'EVERYDAY NUDE',
        title: 'Warm Beige Nude',
        subtitle: 'Your AI-selected nail',
        description:
          'A warm beige nude creates a polished everyday manicure that complements lighter skin.',
        shade: '#C99A86',
        featured: true,
      },
      {
        id: 2,
        category: 'SOFT PINK',
        title: 'Warm Rose',
        subtitle: 'Soft & refined',
        description:
          'A warm rose shade adds subtle colour while keeping the overall look balanced.',
        shade: '#B97886',
        featured: false,
      },
      {
        id: 3,
        category: 'PEACH',
        title: 'Peach Coral',
        subtitle: 'Fresh & coordinated',
        description:
          'A peach-coral shade adds warmth and creates a fresh coordinated finish.',
        shade: '#C98F78',
        featured: false,
      },
      {
        id: 4,
        category: 'STATEMENT',
        title: 'Berry Mauve',
        subtitle: 'Expressive & elegant',
        description:
          'A richer berry-mauve provides definition for a more noticeable manicure.',
        shade: '#874F60',
        featured: false,
      },
    ],

    medium: [
      {
        id: 1,
        category: 'EVERYDAY NUDE',
        title: 'Warm Blush Nude',
        subtitle: 'Your AI-selected nail',
        description:
          'A soft warm nude that complements a medium complexion with an elegant everyday finish.',
        shade: '#C99482',
        featured: true,
      },
      {
        id: 2,
        category: 'SOFT PINK',
        title: 'Dusty Rose',
        subtitle: 'Soft & refined',
        description:
          'A muted rose adds subtle colour while keeping the manicure polished and balanced.',
        shade: '#B87986',
        featured: false,
      },
      {
        id: 3,
        category: 'PEACH',
        title: 'Peach Beige',
        subtitle: 'Fresh & coordinated',
        description:
          'A gentle peach-beige shade works naturally with warm undertones and soft outfits.',
        shade: '#C98F78',
        featured: false,
      },
      {
        id: 4,
        category: 'STATEMENT',
        title: 'Warm Berry',
        subtitle: 'Expressive & confident',
        description:
          'A richer berry tone creates a noticeable manicure while maintaining harmony with the complete look.',
        shade: '#874F60',
        featured: false,
      },
    ],

    tan: [
      {
        id: 1,
        category: 'EVERYDAY NUDE',
        title: 'Caramel Nude',
        subtitle: 'Your AI-selected nail',
        description:
          'A warm caramel nude enhances a tan complexion with a polished and natural finish.',
        shade: '#A96F55',
        featured: true,
      },
      {
        id: 2,
        category: 'WARM ROSE',
        title: 'Burnt Rose',
        subtitle: 'Rich & refined',
        description:
          'A warm burnt rose adds depth while complementing golden skin beautifully.',
        shade: '#98545A',
        featured: false,
      },
      {
        id: 3,
        category: 'TERRACOTTA',
        title: 'Warm Terracotta',
        subtitle: 'Fresh & coordinated',
        description:
          'A rich terracotta creates warmth and definition while coordinating with the overall look.',
        shade: '#A85B46',
        featured: false,
      },
      {
        id: 4,
        category: 'STATEMENT',
        title: 'Berry Brown',
        subtitle: 'Expressive & confident',
        description:
          'A deeper berry-brown creates an elegant statement for a more dramatic manicure.',
        shade: '#713F43',
        featured: false,
      },
    ],

    deep: [
      {
        id: 1,
        category: 'EVERYDAY NUDE',
        title: 'Rich Caramel Nude',
        subtitle: 'Your AI-selected nail',
        description:
          'A rich caramel nude complements deeper complexions with warmth and natural definition.',
        shade: '#925746',
        featured: true,
      },
      {
        id: 2,
        category: 'WARM ROSE',
        title: 'Burnt Rose',
        subtitle: 'Rich & elegant',
        description:
          'A warm burnt rose creates beautiful depth while keeping the manicure refined.',
        shade: '#8F4D50',
        featured: false,
      },
      {
        id: 3,
        category: 'TERRACOTTA',
        title: 'Deep Terracotta',
        subtitle: 'Warm & expressive',
        description:
          'A rich terracotta provides contrast and enhances deeper skin tones beautifully.',
        shade: '#984B3E',
        featured: false,
      },
      {
        id: 4,
        category: 'STATEMENT',
        title: 'Berry Wine',
        subtitle: 'Expressive & confident',
        description:
          'A deep berry-wine shade creates a sophisticated statement manicure.',
        shade: '#6F3545',
        featured: false,
      },
    ],
  };

  const normalizedSkinTone =
    String(profile.skinTone).toLowerCase();

  const nailColours =
    nailColourSets[normalizedSkinTone] ||
    nailColourSets.medium;

  const nailStyleDirection =
    profile.stylePreference === 'bold'
      ? 'Bold Statement Nails'
      : profile.stylePreference === 'polished'
        ? 'Polished Elegant Nails'
        : 'Soft Natural Nails';

  const nailMatch =
    normalizedSkinTone === 'deep'
      ? 96
      : normalizedSkinTone === 'tan'
        ? 95
        : 94;

  const nailApplicationTip =
    profile.stylePreference === 'bold'
      ? `Use ${nailColours[0].title} as the base and add ${nailColours[3].title} as the accent for a bold statement finish.`
      : profile.stylePreference === 'polished'
        ? `Apply ${nailColours[0].title} evenly as the base and layer ${nailColours[1].title} for a refined polished finish.`
        : `Apply ${nailColours[0].title} as a soft base and add ${nailColours[2].title} as a subtle accent for a natural finish.`;


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
        nailColours,
        selectedNailColour: nailColours[0],
        returnTo: '/recommendations/nails',
      },
    });
  };

  return (
    <main className="nails-page">
      <div className="nails-container">

        {/* HEADER */}

        <header className="nails-header">

          <button
            className="nails-back-button"
            onClick={handleBack}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="nails-header-title">

            <span>
              YOUR BEAUTY PLAN
            </span>

            <strong>
              Nail Recommendations
            </strong>

          </div>

          <div className="nails-header-sparkle">
            <Sparkles size={17} />
          </div>

        </header>


        {/* HERO */}

        <section className="nails-hero">

          <div className="nails-hero-icon">
            <WandSparkles size={21} />
          </div>

          <p className="nails-eyebrow">
            AI CURATED FOR YOU
          </p>

          <h1>
            Find your perfect
            <span>nail colour.</span>
          </h1>

          <p className="nails-hero-description">
            We've combined your skin tone, undertone, outfit
            and personal style to create a coordinated nail palette.
          </p>

        </section>


        {/* PROFILE SUMMARY */}

        <section className="nails-profile-card">

          <div className="nails-profile-item">

            <span>
              SKIN
            </span>

            <strong>
              {profile.skinTone}
            </strong>

          </div>

          <div className="nails-profile-divider" />

          <div className="nails-profile-item">

            <span>
              UNDERTONE
            </span>

            <strong>
              {profile.undertone}
            </strong>

          </div>

          <div className="nails-profile-divider" />

          <div className="nails-profile-item">

            <span>
              OUTFIT
            </span>

            <strong>
              {profile.outfit}
            </strong>

          </div>

        </section>


        {/* STYLE SUMMARY */}

        <section className="nails-style-summary">

          <div className="nails-style-summary-icon">
            <Circle size={17} />
          </div>

          <div>

            <span>
              YOUR STYLE DIRECTION
            </span>

            <h2>{nailStyleDirection}</h2>

            <p>
              A manicure direction designed to complement
              your personal style and complete your current look.
            </p>

          </div>

          <div className="nails-match">

            <strong>
              {nailMatch}%
            </strong>

            <span>
              MATCH
            </span>

          </div>

        </section>


        {/* RECOMMENDATIONS */}

        <section className="nails-section">

          <div className="nails-section-heading">

            <span>
              YOUR RECOMMENDATIONS
            </span>

            <h2>
              Shades made for you
            </h2>

          </div>


          <div className="nails-list">

            {nailColours.map((item) => (

              <article
                className={`nails-card ${
                  item.featured ? 'featured' : ''
                }`}
                key={item.id}
              >

                <div
                  className="nails-shade"
                  style={{
                    backgroundColor: item.shade,
                  }}
                >
                  <Circle size={17} />
                </div>

                <div className="nails-card-content">

                  <span className="nails-card-category">
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

                <div className="nails-card-check">
                  <Check size={14} />
                </div>

              </article>

            ))}

          </div>

        </section>


        {/* COLOUR PALETTE */}

        <section className="nail-palette-section">

          <div className="nail-palette-heading">

            <div>

              <span>
                YOUR NAIL COLOUR STORY
              </span>

              <h2>
                AI-selected palette
              </h2>

            </div>

            <Sparkles size={16} />

          </div>


          <div className="nail-palette">

            <div
              className="nail-palette-colour"
              style={{
                backgroundColor: nailColours[0].shade,
              }}
            >
              <span>
                NUDE
              </span>
            </div>

            <div
              className="nail-palette-colour"
              style={{
                backgroundColor: nailColours[1].shade,
              }}
            >
              <span>
                ROSE
              </span>
            </div>

            <div
              className="nail-palette-colour"
              style={{
                backgroundColor: nailColours[2].shade,
              }}
            >
              <span>
                PEACH
              </span>
            </div>

            <div
              className="nail-palette-colour"
              style={{
                backgroundColor: nailColours[3].shade,
              }}
            >
              <span>
                BERRY
              </span>
            </div>

          </div>

        </section>


        {/* TOP PICK */}

        <section className="nails-top-pick-card">

          <div className="nails-top-pick-left">

            <div className="nails-top-pick-icon">
              <Circle size={17} />
            </div>

            <div>

              <span>
                TOP AI PICK
              </span>

              <h3>
                {nailColours[0].title}
              </h3>

              <p>
                Best overall match for your current look.
              </p>

            </div>

          </div>


          <div className="nails-top-pick-shade">

            <div
              className="nails-top-pick-circle"
              style={{
                backgroundColor: nailColours[0].shade,
              }}
            />

            <span>
              {nailColours[0].shade}
            </span>

          </div>

        </section>


        {/* BEAUTY TIP */}

        <section className="nails-tip">

          <div className="nails-tip-icon">
            <Sparkles size={16} />
          </div>

          <div>

            <span>
              AI APPLICATION TIP
            </span>

            <p>
              {nailApplicationTip}
            </p>

          </div>

        </section>


        {/* CTA */}

        <button
          className="nails-complete-button"
          onClick={handleCompleteLook}
        >

          <WandSparkles size={17} />

          See My Complete Look

          <ChevronRight size={17} />

        </button>


        <p className="nails-footer">
          MakeMyLook.Ai · Personalized beauty intelligence
        </p>

      </div>
    </main>
  );
}

export default NailsRecommendation;