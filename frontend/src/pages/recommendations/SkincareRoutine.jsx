import {
  ArrowLeft,
  Check,
  ChevronRight,
  Droplets,
  Heart,
  Info,
  Moon,
  Sparkles,
  Sun,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

import './SkincareRoutine.css';

function SkincareRoutine() {
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
    detectedSkinAnalysis,
  } = location.state || {};

  const profile = {
    skinTone: skinAnalysis?.skinTone || beautyProfile?.skinTone || 'Medium',
    undertone:
      skinAnalysis?.undertone ||
      beautyProfile?.undertone ||
      'Warm',
    skinType:
      skinAnalysis?.skinType ||
      beautyProfile?.skinType ||
      'Combination',
  };

  const actualSkinType =
    detectedSkinAnalysis?.skin_type ||
    skinAnalysis?.skinType ||
    beautyProfile?.skinType ||
    'normal';

  const actualSkinConcerns =
    detectedSkinAnalysis?.concerns ||
    [];

  const morningRoutine =
    actualSkinType === 'dry'
      ? [
          {
            step: '01',
            title: 'Gentle Hydrating Cleanser',
            description:
              'Start with a gentle cleanser to remove overnight buildup without stripping essential moisture.',
            focus: 'Cleanse',
            icon: Droplets,
          },
          {
            step: '02',
            title: 'Hydrating Serum',
            description:
              'Apply a hydrating serum to replenish moisture and support comfortable skin throughout the day.',
            focus: 'Hydrate',
            icon: Sparkles,
          },
          {
            step: '03',
            title: 'Barrier Moisturizer',
            description:
              'Use a richer moisturizer to support the skin barrier and reduce dryness.',
            focus: 'Repair',
            icon: Droplets,
          },
          {
            step: '04',
            title: 'Broad-Spectrum Sunscreen',
            description:
              'Finish with daily UV protection on exposed skin.',
            focus: 'Protect',
            icon: Sun,
          },
        ]
      : actualSkinType === 'oily'
        ? [
            {
              step: '01',
              title: 'Gentle Foaming Cleanser',
              description:
                'Start by removing overnight oil and buildup without over-cleansing.',
              focus: 'Cleanse',
              icon: Droplets,
            },
            {
              step: '02',
              title: 'Lightweight Hydrating Serum',
              description:
                'Add lightweight hydration without creating a heavy finish.',
              focus: 'Hydrate',
              icon: Sparkles,
            },
            {
              step: '03',
              title: 'Lightweight Moisturizer',
              description:
                'Maintain hydration with a lightweight moisturizer that feels comfortable on oily skin.',
              focus: 'Balance',
              icon: Droplets,
            },
            {
              step: '04',
              title: 'Broad-Spectrum Sunscreen',
              description:
                'Finish with lightweight daily UV protection.',
              focus: 'Protect',
              icon: Sun,
            },
          ]
        : actualSkinType === 'combination'
          ? [
              {
                step: '01',
                title: 'Gentle Cleanser',
                description:
                  'Start with a gentle cleanser to remove overnight buildup.',
                focus: 'Cleanse',
                icon: Droplets,
              },
              {
                step: '02',
                title: 'Hydrating Serum',
                description:
                  'Add lightweight hydration before moisturizing.',
                focus: 'Hydrate',
                icon: Sparkles,
              },
              {
                step: '03',
                title: 'Lightweight Moisturizer',
                description:
                  'Maintain hydration without making the skin feel heavy.',
                focus: 'Moisturize',
                icon: Droplets,
              },
              {
                step: '04',
                title: 'Broad-Spectrum Sunscreen',
                description:
                  'Finish with daily UV protection on exposed skin.',
                focus: 'Protect',
                icon: Sun,
              },
            ]
          : [
              {
                step: '01',
                title: 'Gentle Cleanser',
                description:
                  'Start with a gentle cleanser to remove overnight buildup while maintaining the skin barrier.',
                focus: 'Cleanse',
                icon: Droplets,
              },
              {
                step: '02',
                title: 'Hydrating Serum',
                description:
                  'Add lightweight hydration to keep the skin comfortable throughout the day.',
                focus: 'Hydrate',
                icon: Sparkles,
              },
              {
                step: '03',
                title: 'Balanced Moisturizer',
                description:
                  'Maintain balanced hydration with a comfortable everyday moisturizer.',
                focus: 'Moisturize',
                icon: Droplets,
              },
              {
                step: '04',
                title: 'Broad-Spectrum Sunscreen',
                description:
                  'Finish with daily UV protection on exposed skin.',
                focus: 'Protect',
                icon: Sun,
              },
            ];

  const eveningRoutine =
    actualSkinType === 'dry'
      ? [
          {
            step: '01',
            title: 'Gentle Hydrating Cleanser',
            description:
              'Remove makeup, sunscreen and daily buildup without stripping essential moisture.',
            focus: 'Cleanse',
            icon: Droplets,
          },
          {
            step: '02',
            title: 'Hydrating Treatment',
            description:
              'Use a gentle hydrating treatment to replenish moisture and support the skin barrier.',
            focus: 'Restore',
            icon: Sparkles,
          },
          {
            step: '03',
            title: 'Barrier Repair Moisturizer',
            description:
              'Finish with a nourishing moisturizer to support the skin barrier overnight.',
            focus: 'Repair',
            icon: Moon,
          },
        ]
      : actualSkinType === 'oily'
        ? [
            {
              step: '01',
              title: 'Gentle Foaming Cleanser',
              description:
                'Remove makeup, sunscreen, excess oil and daily buildup without over-cleansing.',
              focus: 'Cleanse',
              icon: Droplets,
            },
            {
              step: '02',
              title: 'Lightweight Hydrating Treatment',
              description:
                'Add comfortable hydration without creating a heavy finish.',
              focus: 'Hydrate',
              icon: Sparkles,
            },
            {
              step: '03',
              title: 'Lightweight Night Moisturizer',
              description:
                'Maintain hydration overnight with a lightweight moisturizer.',
              focus: 'Balance',
              icon: Moon,
            },
          ]
        : actualSkinType === 'combination'
          ? [
              {
                step: '01',
                title: 'Gentle Cleanser',
                description:
                  'Remove makeup, sunscreen, dirt and daily buildup.',
                focus: 'Cleanse',
                icon: Droplets,
              },
              {
                step: '02',
                title: 'Hydrating Treatment',
                description:
                  'Use a gentle hydrating treatment according to your skin needs.',
                focus: 'Restore',
                icon: Sparkles,
              },
              {
                step: '03',
                title: 'Barrier Moisturizer',
                description:
                  'Support the skin barrier while you sleep.',
                focus: 'Repair',
                icon: Moon,
              },
            ]
          : [
              {
                step: '01',
                title: 'Gentle Cleanser',
                description:
                  'Remove makeup, sunscreen, dirt and daily buildup while maintaining the skin barrier.',
                focus: 'Cleanse',
                icon: Droplets,
              },
              {
                step: '02',
                title: 'Hydrating Treatment',
                description:
                  'Use a gentle hydrating treatment to maintain comfortable overnight hydration.',
                focus: 'Hydrate',
                icon: Sparkles,
              },
              {
                step: '03',
                title: 'Balanced Night Moisturizer',
                description:
                  'Support the skin barrier and maintain balanced hydration while you sleep.',
                focus: 'Repair',
                icon: Moon,
              },
            ];

  const handleBack = () => {
    navigate('/recommendations/skincare', {
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

  const handleCategories = () => {
    navigate('/recommendations/details', {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
        outfitImage,
        outfitData,
        beautyProfile,
        skinAnalysis,
        detectedSkinAnalysis,
      },
    });
  };

  const renderRoutine = (routine) => (
    <div className="complete-routine-list">

      {routine.map((item) => {
        const Icon = item.icon;

        return (
          <div
            className="complete-routine-card"
            key={item.step}
          >

            <div className="complete-step-number">
              {item.step}
            </div>

            <div className="complete-step-icon">
              <Icon size={17} />
            </div>

            <div className="complete-step-content">

              <div className="complete-step-title-row">

                <h3>
                  {item.title}
                </h3>

                <span>
                  {item.focus}
                </span>

              </div>

              <p>
                {item.description}
              </p>

            </div>

            <Check
              className="complete-step-check"
              size={15}
            />

          </div>
        );
      })}

    </div>
  );

  return (
    <main className="routine-page">

      <div className="routine-container">

        {/* HEADER */}

        <header className="routine-header">

          <button
            className="routine-back"
            onClick={handleBack}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="routine-header-title">

            <span>
              YOUR BEAUTY PLAN
            </span>

            <strong>
              Complete Routine
            </strong>

          </div>

          <div className="routine-header-icon">
            <Sparkles size={17} />
          </div>

        </header>


        {/* HERO */}

        <section className="routine-hero">

          <div className="routine-hero-badge">
            <Sparkles size={15} />
          </div>

          <p>
            PERSONALIZED FOR YOU
          </p>

          <h1>
            Your daily
            <span>skin ritual.</span>
          </h1>

          <p className="routine-hero-description">
            A simple routine designed around your
            AI-analyzed skin profile.
          </p>

        </section>


        {/* PROFILE SUMMARY */}

        <section className="routine-profile-card">

          <div className="routine-profile-heading">

            <div>

              <span>
                YOUR PROFILE
              </span>

              <h2>
                Skin snapshot
              </h2>

            </div>

            <div className="routine-profile-status">
              <Check size={11} />
              Personalized
            </div>

          </div>


          <div className="routine-profile-values">

            <div>
              <span>
                SKIN TONE
              </span>

              <strong>
                {profile.skinTone}
              </strong>
            </div>

            <div>
              <span>
                UNDERTONE
              </span>

              <strong>
                {profile.undertone}
              </strong>
            </div>

            <div>
              <span>
                SKIN TYPE
              </span>

              <strong>
                {profile.skinType}
              </strong>
            </div>

          </div>

        </section>


        {/* MORNING */}

        <section className="complete-routine-section">

          <div className="complete-section-heading">

            <div className="complete-heading-icon morning">
              <Sun size={17} />
            </div>

            <div>

              <span>
                MORNING
              </span>

              <h2>
                Protect & hydrate
              </h2>

            </div>

          </div>

          {renderRoutine(morningRoutine)}

        </section>


        {/* DAYTIME */}

        <section className="daytime-card">

          <div className="daytime-icon">
            <Heart size={17} />
          </div>

          <div>

            <span>
              THROUGHOUT THE DAY
            </span>

            <h3>
              {actualSkinConcerns.includes('dryness')
                ? 'Keep your skin and lips hydrated'
                : 'Keep your lips comfortable'}
            </h3>

            <p>
              {actualSkinConcerns.includes('dryness')
                ? 'Focus on gentle hydration and use a nourishing lip balm whenever your lips feel dry or uncomfortable.'
                : 'Apply a nourishing lip balm whenever your lips feel dry or uncomfortable.'}
            </p>

          </div>

        </section>


        {/* EVENING */}

        <section className="complete-routine-section evening-routine">

          <div className="complete-section-heading">

            <div className="complete-heading-icon evening">
              <Moon size={17} />
            </div>

            <div>

              <span>
                EVENING
              </span>

              <h2>
                Cleanse & restore
              </h2>

            </div>

          </div>

          {renderRoutine(eveningRoutine)}

        </section>


        {/* WEEKLY */}

        <section className="weekly-card">

          <div className="weekly-icon">
            <Sparkles size={17} />
          </div>

          <div className="weekly-content">

            <span>
              WEEKLY CARE
            </span>

            <h3>
              {actualSkinType === 'oily'
                ? 'Gentle weekly exfoliation'
                : actualSkinType === 'dry'
                  ? 'Barrier-friendly weekly care'
                  : actualSkinType === 'combination'
                    ? 'Balanced weekly care'
                    : 'Gentle exfoliation'}
            </h3>

            <p>
              {actualSkinType === 'oily'
                ? 'Consider gentle exfoliation occasionally to help manage buildup. Avoid over-exfoliating.'
                : actualSkinType === 'dry'
                  ? 'Prioritize hydration and barrier support. Use exfoliation sparingly and only if your skin tolerates it.'
                  : actualSkinType === 'combination'
                    ? 'Use gentle exfoliation occasionally if your skin tolerates it, focusing on balance rather than over-exfoliation.'
                    : 'Consider gentle exfoliation occasionally if it suits your skin. Avoid over-exfoliating.'}
            </p>

          </div>

          <div className="weekly-badge">
            OPTIONAL
          </div>

        </section>


        {/* WHY */}

        <section className="why-card">

          <div className="why-icon">
            <Info size={16} />
          </div>

          <div>

            <span>
              WHY THIS ROUTINE?
            </span>

            <p>
              {actualSkinType === 'dry'
                ? 'MakeMyLook.Ai selected these routine categories to support hydration, strengthen the skin barrier and provide comfortable daily protection for dry skin.'
                : actualSkinType === 'oily'
                  ? 'MakeMyLook.Ai selected these routine categories to help balance excess oil, maintain hydration and provide lightweight daily protection for oily skin.'
                  : actualSkinType === 'combination'
                    ? 'MakeMyLook.Ai selected these routine categories to balance hydration, support the skin barrier and provide comfortable daily protection for combination skin.'
                    : 'MakeMyLook.Ai selected these routine categories to maintain balanced hydration, support the skin barrier and provide comfortable daily protection for normal skin.'}
              </p>

          </div>

        </section>


        {/* SAFETY */}

        <section className="routine-safety">

          <span>
            AI BEAUTY GUIDANCE
          </span>

          <p>
            Recommendations are for general cosmetic
            skincare guidance and are not a medical
            diagnosis. Patch-test new products and
            consult a dermatologist for persistent
            skin concerns.
          </p>

        </section>


        {/* CTA */}

        <button
          className="routine-categories-button"
          onClick={handleCategories}
        >

          <Sparkles size={17} />

          Explore More Beauty Recommendations

          <ChevronRight size={17} />

        </button>


        <p className="routine-footer">
          MakeMyLook.Ai · Personalized beauty intelligence
        </p>

      </div>

    </main>
  );
}

export default SkincareRoutine;