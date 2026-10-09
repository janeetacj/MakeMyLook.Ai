import {
  ArrowLeft,
  Check,
  ChevronRight,
  Palette,
  Sparkles,
  Shirt,
  WandSparkles,
  Heart,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

import './OutfitHarmony.css';

function OutfitHarmony() {
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

  const profile = {
    skinTone:
      skinAnalysis?.skinTone ||
      beautyProfile?.skinTone ||
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

  const recommendedColours = [
    {
      name: 'Warm Beige',
      hex: '#D8B995',
      reason: 'Soft and naturally complementary',
    },
    {
      name: 'Terracotta',
      hex: '#B96952',
      reason: 'Adds warmth and definition',
    },
    {
      name: 'Olive',
      hex: '#85845A',
      reason: 'Creates a balanced earthy contrast',
    },
    {
      name: 'Dusty Rose',
      hex: '#C98D9F',
      reason: 'Adds a soft polished finish',
    },
  ];

  const makeupRecommendations = [
    {
      title: 'Warm Nude',
      category: 'LIP COLOUR',
      description:
        'A warm nude creates a balanced everyday look with your outfit.',
      shade: '#A96856',
    },
    {
      title: 'Peach Blush',
      category: 'BLUSH',
      description:
        'A soft peach tone complements warm undertones without overpowering the look.',
      shade: '#D99178',
    },
    {
      title: 'Bronze Glow',
      category: 'EYES',
      description:
        'A subtle bronze eye look adds warmth and dimension.',
      shade: '#9A6C4E',
    },
  ];

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

  const handleMakeup = () => {
    navigate('/recommendations/makeup', {
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

  return (
    <main className="outfit-harmony-page">

      <div className="outfit-harmony-container">

        {/* HEADER */}

        <header className="outfit-harmony-header">

          <button
            className="outfit-harmony-back"
            onClick={handleBack}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="outfit-harmony-header-title">

            <span>
              YOUR BEAUTY PLAN
            </span>

            <strong>
              Outfit Harmony
            </strong>

          </div>

          <div className="outfit-harmony-header-icon">
            <Sparkles size={17} />
          </div>

        </header>


        {/* HERO */}

        <section className="outfit-harmony-hero">

          <div className="outfit-harmony-hero-icon">
            <WandSparkles size={21} />
          </div>

          <p>
            AI OUTFIT ANALYSIS
          </p>

          <h1>
            Make your
            <span>colours work.</span>
          </h1>

          <p className="outfit-harmony-description">
            Your outfit colour is combined with your
            skin tone and undertone to create a
            coordinated beauty palette.
          </p>

        </section>


        {/* ANALYSIS SUMMARY */}

        <section className="outfit-analysis-card">

          <div className="outfit-analysis-heading">

            <div>
              <span>
                CURRENT LOOK
              </span>

              <h2>
                Your colour profile
              </h2>
            </div>

            <div className="outfit-ai-badge">
              <Sparkles size={10} />
              AI MATCH
            </div>

          </div>


          <div className="outfit-analysis-grid">

            <div className="outfit-profile-box">

              <span>
                SKIN TONE
              </span>

              <strong>
                {profile.skinTone}
              </strong>

            </div>

            <div className="outfit-profile-box">

              <span>
                UNDERTONE
              </span>

              <strong>
                {profile.undertone}
              </strong>

            </div>

            <div className="outfit-profile-box">

              <span>
                OUTFIT
              </span>

              <strong>
                {profile.outfit}
              </strong>

            </div>

          </div>

        </section>


        {/* COLOUR PALETTE */}

        <section className="outfit-section">

          <div className="outfit-section-heading">

            <div className="outfit-section-icon palette">
              <Palette size={17} />
            </div>

            <div>

              <span>
                RECOMMENDED PALETTE
              </span>

              <h2>
                Colours that suit you
              </h2>

            </div>

          </div>


          <div className="outfit-colour-grid">

            {recommendedColours.map((colour) => (

              <div
                className="outfit-colour-card"
                key={colour.name}
              >

                <div
                  className="outfit-colour-circle"
                  style={{
                    backgroundColor: colour.hex,
                  }}
                />

                <div className="outfit-colour-information">

                  <strong>
                    {colour.name}
                  </strong>

                  <p>
                    {colour.reason}
                  </p>

                </div>

                <Check
                  size={14}
                  className="outfit-colour-check"
                />

              </div>

            ))}

          </div>

        </section>


        {/* OUTFIT MATCH */}

        <section className="outfit-match-card">

          <div className="outfit-match-icon">
            <Shirt size={18} />
          </div>

          <div className="outfit-match-content">

            <span>
              OUTFIT HARMONY
            </span>

            <h3>
              {profile.outfit} + Warm Undertone
            </h3>

            <p>
              Your current outfit works well with warm,
              muted beauty shades. Keep the overall look
              soft and balanced.
            </p>

          </div>

          <div className="outfit-match-score">
            <strong>
              92
            </strong>

            <span>
              MATCH
            </span>
          </div>

        </section>


        {/* MAKEUP */}

        <section className="outfit-section">

          <div className="outfit-section-heading">

            <div className="outfit-section-icon makeup">
              <WandSparkles size={17} />
            </div>

            <div>

              <span>
                MAKEUP PALETTE
              </span>

              <h2>
                Complete the look
              </h2>

            </div>

          </div>


          <div className="outfit-makeup-list">

            {makeupRecommendations.map((item) => (

              <div
                className="outfit-makeup-card"
                key={item.title}
              >

                <div
                  className="outfit-makeup-shade"
                  style={{
                    backgroundColor: item.shade,
                  }}
                />

                <div className="outfit-makeup-content">

                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

                <Check
                  size={15}
                  className="outfit-makeup-check"
                />

              </div>

            ))}

          </div>

        </section>


        {/* LIPSTICK HIGHLIGHT */}

        <section className="lipstick-highlight">

          <div className="lipstick-highlight-left">

            <div className="lipstick-icon">
              <Heart size={17} />
            </div>

            <div>

              <span>
                AI LIPSTICK MATCH
              </span>

              <h3>
                Terracotta Nude
              </h3>

              <p>
                Recommended for your undertone
                and current outfit.
              </p>

            </div>

          </div>

          <div className="lipstick-shade">

            <div
              className="lipstick-shade-circle"
              style={{
                backgroundColor: '#A96856',
              }}
            />

            <span>
              #A96856
            </span>

          </div>

        </section>


        {/* AI TIP */}

        <section className="outfit-ai-tip">

          <div className="outfit-ai-tip-icon">
            <Sparkles size={16} />
          </div>

          <div>

            <span>
              AI BEAUTY TIP
            </span>

            <p>
              When your outfit already has a strong
              colour, keep either your eyes or lips
              as the main focal point rather than
              making both intense.
            </p>

          </div>

        </section>


        {/* CTA */}

        <button
          className="outfit-makeup-button"
          onClick={handleMakeup}
        >

          <WandSparkles size={17} />

          Explore Your Makeup Look

          <ChevronRight size={17} />

        </button>


        <p className="outfit-harmony-footer">
          MakeMyLook.Ai · AI-powered colour harmony
        </p>

      </div>

    </main>
  );
}

export default OutfitHarmony;