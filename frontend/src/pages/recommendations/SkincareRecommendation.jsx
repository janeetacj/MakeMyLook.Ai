import {
  ArrowLeft,
  Check,
  ChevronRight,
  Droplets,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

import './SkincareRecommendation.css';

function SkincareRecommendation() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    selectedSkinTone,
    capturedImage,
    analysisResult,
    outfitImage,
    outfitData,
    beautyProfile,
  } = location.state || {};

  /*
   * TEMPORARY DEMO AI SKIN PROFILE
   *
   * These values will later come from the
   * Python/FastAPI AI backend.
   */

  const detectedSkinAnalysis =
    analysisResult?.analysis || {};

  const skinAnalysis = {
    skinTone:
      detectedSkinAnalysis.skin_tone ||
      beautyProfile?.skinTone ||
      'Medium',

    undertone:
      beautyProfile?.undertone ||
      'Not available',

    skinType:
      detectedSkinAnalysis.skin_type ||
      beautyProfile?.skinType ||
      'Normal',

    hydration: 'Moderate',
    oiliness: 'Moderate',
    sensitivity: 'Low',

    concerns:
      detectedSkinAnalysis.concerns?.length
        ? detectedSkinAnalysis.concerns.map((concern) => {
          const concernLabels = {
            dryness: 'Dryness',
            oiliness: 'Oil control',
            uneven_tone: 'Uneven tone',
            redness: 'Redness',
          };

          return (
            concernLabels[concern] ||
            concern
              .replace(/_/g, ' ')
              .replace(/\b\w/g, (letter) => letter.toUpperCase())
          );
        })
      : [
          'Hydration',
          'Sun protection',
          'Balanced moisture',
        ],
  };

  const morningRoutine =
    skinAnalysis.skinType === 'dry'
      ? [
          {
            number: '01',
            title: 'Gentle Hydrating Cleanser',
            subtitle: 'Cleanse without removing essential moisture.',
            ingredient: 'Ceramides + gentle cleansing agents',
            icon: Droplets,
          },
          {
            number: '02',
            title: 'Deep Hydrating Moisturizer',
            subtitle: 'Support the skin barrier and reduce dryness.',
            ingredient: 'Hyaluronic acid + ceramides',
            icon: Droplets,
          },
          {
            number: '03',
            title: 'Daily Sunscreen',
            subtitle: 'Protect dry skin from daily UV exposure.',
            ingredient: 'Broad-spectrum SPF 30–50',
            icon: Sun,
          },
       ]
      : skinAnalysis.skinType === 'oily'
        ? [
            {
              number: '01',
              title: 'Gentle Foaming Cleanser',
              subtitle: 'Remove excess oil without over-stripping the skin.',
              ingredient: 'Gentle cleansing agents + niacinamide',
              icon: Droplets,
            },
            {
              number: '02',
              title: 'Lightweight Moisturizer',
              subtitle: 'Hydrate without adding a heavy or greasy feel.',
              ingredient: 'Hyaluronic acid + lightweight humectants',
             icon: Droplets,
            },
            {
              number: '03',
              title: 'Daily Sunscreen',
              subtitle: 'Protect skin with a lightweight daily SPF.',
              ingredient: 'Broad-spectrum SPF 30–50',
              icon: Sun,
            },
          ]
        : skinAnalysis.skinType === 'combination'
          ? [
              {
                number: '01',
                title: 'Gentle Cleanser',
                subtitle: 'Cleanse without stripping natural moisture.',
                ingredient: 'Ceramides + gentle cleansing agents',
                icon: Droplets,
              },
              {
                number: '02',
                title: 'Lightweight Moisturizer',
                subtitle: 'Keep combination skin comfortably hydrated.',
                ingredient: 'Hyaluronic acid + ceramides',
                icon: Droplets,
              },
              {
                number: '03',
                title: 'Daily Sunscreen',
                subtitle: 'Protect exposed skin from UV radiation.',
                ingredient: 'Broad-spectrum SPF 30–50',
                icon: Sun,
              },
            ]
          : [
              {
                number: '01',
                title: 'Gentle Cleanser',
                subtitle: 'Cleanse while maintaining the skin barrier.',
                ingredient: 'Gentle cleansing agents',
                icon: Droplets,
              },
              {
                number: '02',
                title: 'Balanced Moisturizer',
                subtitle: 'Maintain comfortable everyday hydration.',
                ingredient: 'Hyaluronic acid + ceramides',
                icon: Droplets,
              },
              {
                number: '03',
                title: 'Daily Sunscreen',
                subtitle: 'Protect your skin from daily UV exposure.',
                ingredient: 'Broad-spectrum SPF 30–50',
                icon: Sun,
              },
            ];

  const eveningRoutine =
    skinAnalysis.skinType === 'dry'
      ? [
          {
            number: '01',
            title: 'Gentle Hydrating Cleanser',
            subtitle: 'Remove daily buildup without drying the skin.',
            ingredient: 'Ceramides + gentle cleansing agents',
            icon: Droplets,
          },
          {
            number: '02',
            title: 'Barrier Repair Moisturizer',
            subtitle: 'Deeply moisturize and support the skin barrier overnight.',
            ingredient: 'Ceramides + hyaluronic acid + humectants',
            icon: Moon,
          },
        ]
      : skinAnalysis.skinType === 'oily'
        ? [
            {
              number: '01',
              title: 'Gentle Foaming Cleanser',
              subtitle: 'Remove excess oil and daily buildup without over-cleansing.',
              ingredient: 'Gentle cleansing agents + niacinamide',
              icon: Droplets,
            },
            {
              number: '02',
              title: 'Lightweight Night Moisturizer',
              subtitle: 'Maintain hydration with a lightweight finish.',
              ingredient: 'Hyaluronic acid + lightweight humectants',
              icon: Moon,
            },
          ]
        : skinAnalysis.skinType === 'combination'
          ? [
              {
                number: '01',
                title: 'Gentle Cleanser',
                subtitle: 'Remove dirt, oil and daily buildup.',
                ingredient: 'Low-irritation cleanser',
                icon: Droplets,
              },
              {
                number: '02',
                title: 'Hydrating Moisturizer',
                subtitle: 'Support the skin barrier overnight.',
                ingredient: 'Ceramides + humectants',
                icon: Moon,
              },
            ]
          : [
              {
                number: '01',
                title: 'Gentle Cleanser',
                subtitle: 'Remove daily buildup while maintaining the skin barrier.',
                ingredient: 'Low-irritation cleanser',
                icon: Droplets,
              },
              {
                number: '02',
                title: 'Balanced Night Moisturizer',
                subtitle: 'Maintain comfortable hydration overnight.',
                ingredient: 'Ceramides + humectants',
                icon: Moon,
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
      },
    });
  };

  const handleRoutine = () => {
    navigate('/recommendations/skincare/routine', {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
        outfitImage,
        outfitData,
        beautyProfile,
        skinAnalysis,
        detectedSkinAnalysis,
        morningRoutine,
        eveningRoutine,
      },
    });
  };

  return (
    <main className="skincare-page">

      <div className="skincare-container">

        {/* HEADER */}

        <header className="skincare-header">

          <button
            className="skincare-back"
            onClick={handleBack}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="skincare-header-title">

            <span>
              AI BEAUTY ANALYSIS
            </span>

            <strong>
              Skincare
            </strong>

          </div>

          <div className="skincare-header-icon">
            <Droplets size={17} />
          </div>

        </header>


        {/* HERO */}

        <section className="skincare-hero">

          <div className="skincare-hero-icon">
            <Sparkles size={18} />
          </div>

          <p>
            YOUR SKINCARE PROFILE
          </p>

          <h1>
            Skin that
            <span>feels cared for.</span>
          </h1>

          <div className="skincare-hero-description">
            AI recommendations based on your
            skin profile and lifestyle needs.
          </div>

        </section>


        {/* AI PROFILE CARD */}

        <section className="skin-analysis-card">

          <div className="skin-analysis-card-header">

            <div>

              <span>
                AI SKIN ANALYSIS
              </span>

              <h2>
                Your skin profile
              </h2>

            </div>

            <div className="analysis-status">
              <Check size={11} />
              Analyzed
            </div>

          </div>


          <div className="skin-profile-grid">

            <div className="skin-profile-item">

              <span>
                SKIN TONE
              </span>

              <strong>
                {skinAnalysis.skinTone}
              </strong>

            </div>

            <div className="skin-profile-item">

              <span>
                UNDERTONE
              </span>

              <strong>
                {skinAnalysis.undertone}
              </strong>

            </div>

            <div className="skin-profile-item">

              <span>
                SKIN TYPE
              </span>

              <strong>
                {skinAnalysis.skinType}
              </strong>

            </div>

            <div className="skin-profile-item">

              <span>
                HYDRATION
              </span>

              <strong>
                {skinAnalysis.hydration}
              </strong>

            </div>

            <div className="skin-profile-item">

              <span>
                OILINESS
              </span>

              <strong>
                {skinAnalysis.oiliness}
              </strong>

            </div>

            <div className="skin-profile-item">

              <span>
                SENSITIVITY
              </span>

              <strong>
                {skinAnalysis.sensitivity}
              </strong>

            </div>

          </div>


          {/* CONCERNS */}

          <div className="skin-concerns">

            <span>
              PRIORITY AREAS
            </span>

            <div className="skin-concern-tags">

              {skinAnalysis.concerns.map(
                (concern) => (
                  <span key={concern}>
                    {concern}
                  </span>
                )
              )}

            </div>

          </div>

        </section>


        {/* RECOMMENDATION INTRO */}

        <section className="skincare-intro">

          <div className="skincare-intro-icon">
            <ShieldCheck size={18} />
          </div>

          <div>

            <span>
              AI-POWERED ROUTINE
            </span>

            <p>
              {skinAnalysis.skinType === 'dry'
                ? 'Your routine focuses on restoring hydration, supporting the skin barrier and protecting your skin from daily environmental stress.'
                : skinAnalysis.skinType === 'oily'
                  ? 'Your routine focuses on balancing excess oil, maintaining hydration and protecting your skin without a heavy finish.'
                  : skinAnalysis.skinType === 'combination'
                    ? 'Your routine focuses on balancing hydration, supporting the skin barrier and protecting your skin throughout the day.'
                    : 'Your routine focuses on maintaining balanced hydration, supporting the skin barrier and protecting your skin throughout the day.'}
            </p>

          </div>

        </section>


        {/* MORNING */}

        <section className="routine-section">

          <div className="routine-section-header">

            <div>

              <span>
                MORNING
              </span>

              <h2>
                Start your day right
              </h2>

            </div>

            <Sun size={18} />

          </div>


          <div className="routine-list">

            {morningRoutine.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  className="routine-card"
                  key={item.number}
                >

                  <div className="routine-number">
                    {item.number}
                  </div>

                  <div className="routine-icon">
                    <Icon size={17} />
                  </div>

                  <div className="routine-content">

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.subtitle}
                    </p>

                    <span>
                      Suggested focus: {item.ingredient}
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

        </section>


        {/* EVENING */}

        <section className="routine-section evening-section">

          <div className="routine-section-header">

            <div>

              <span>
                EVENING
              </span>

              <h2>
                Wind down & restore
              </h2>

            </div>

            <Moon size={18} />

          </div>


          <div className="routine-list">

            {eveningRoutine.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  className="routine-card"
                  key={item.number}
                >

                  <div className="routine-number">
                    {item.number}
                  </div>

                  <div className="routine-icon">
                    <Icon size={17} />
                  </div>

                  <div className="routine-content">

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.subtitle}
                    </p>

                    <span>
                      Suggested focus: {item.ingredient}
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

        </section>


        {/* DISCLAIMER */}

        <section className="skincare-disclaimer">

          <ShieldCheck size={15} />

          <p>
            These are cosmetic skincare suggestions,
            not medical diagnoses. If you have persistent
            or severe skin concerns, consult a qualified
            dermatologist.
          </p>

        </section>


        {/* CTA */}

        <button
          className="routine-button"
          onClick={() =>
            navigate('/recommendations/skincare/routine', {
              state: {
                selectedSkinTone,
                capturedImage,
                analysisResult,
                outfitImage,
                outfitData,
                beautyProfile,
                skinAnalysis,
              },
            })
          }
        >
          <Sparkles size={17} />

          View My Complete Routine

          <ChevronRight size={17} />
        </button>


        <p className="skincare-footer">
          Personalized by MakeMyLook.Ai
        </p>

      </div>

    </main>
  );
}

export default SkincareRecommendation;
