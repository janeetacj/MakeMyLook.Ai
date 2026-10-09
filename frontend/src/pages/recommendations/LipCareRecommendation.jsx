import {
  ArrowLeft,
  ChevronRight,
  Droplets,
  Heart,
  Moon,
  Sparkles,
  Sun,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

import './LipCareRecommendation.css';

function LipCareRecommendation() {
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

    lipCondition:
      beautyProfile?.lipCondition ||
      'Dry-prone',
  };

  const recommendations = [
    {
      icon: Droplets,
      title: 'Hydrating Lip Balm',
      tag: 'DAILY',
      description:
        'Use a nourishing lip balm throughout the day to maintain comfortable, hydrated lips.',
      focus: 'Hydration',
    },
    {
      icon: Sun,
      title: 'Lip Balm With SPF',
      tag: 'DAYTIME',
      description:
        'Choose lip protection with SPF when spending time outdoors.',
      focus: 'Protection',
    },
    {
      icon: Moon,
      title: 'Overnight Lip Treatment',
      tag: 'NIGHT',
      description:
        'Apply a richer lip treatment before bed to support overnight hydration.',
      focus: 'Repair',
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

  const handleRoutine = () => {
    navigate('/recommendations/lip-care/routine', {
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
    <main className="lip-page">

      <div className="lip-container">

        {/* HEADER */}

        <header className="lip-header">

          <button
            className="lip-back-button"
            onClick={handleBack}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="lip-header-title">

            <span>
              YOUR BEAUTY PLAN
            </span>

            <strong>
              Lip Care
            </strong>

          </div>

          <div className="lip-header-icon">
            <Heart size={17} />
          </div>

        </header>


        {/* HERO */}

        <section className="lip-hero">

          <div className="lip-hero-icon">
            <Heart size={22} />
          </div>

          <p>
            PERSONALIZED LIP CARE
          </p>

          <h1>
            Soft,
            <span>comfortable lips.</span>
          </h1>

          <p className="lip-hero-description">
            Your personalized lip-care suggestions are
            designed around your beauty profile and daily needs.
          </p>

        </section>


        {/* PROFILE */}

        <section className="lip-profile-card">

          <div className="lip-profile-title">

            <div>
              <span>
                AI PROFILE
              </span>

              <h2>
                Your lip-care snapshot
              </h2>
            </div>

            <div className="lip-ai-badge">
              <Sparkles size={11} />
              AI MATCH
            </div>

          </div>


          <div className="lip-profile-grid">

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
                LIP CONDITION
              </span>

              <strong>
                {profile.lipCondition}
              </strong>
            </div>

          </div>

        </section>


        {/* ANALYSIS */}

        <section className="lip-analysis-card">

          <div className="lip-analysis-icon">
            <Sparkles size={17} />
          </div>

          <div>

            <span>
              AI OBSERVATION
            </span>

            <h3>
              Your lips may benefit from extra hydration
            </h3>

            <p>
              MakeMyLook.Ai recommends focusing on
              moisture retention and daytime protection.
            </p>

          </div>

        </section>


        {/* RECOMMENDATIONS */}

        <section className="lip-recommendations">

          <div className="lip-section-heading">

            <div>
              <span>
                RECOMMENDED FOR YOU
              </span>

              <h2>
                Your lip-care essentials
              </h2>
            </div>

            <span className="lip-count">
              3 PICKS
            </span>

          </div>


          <div className="lip-recommendation-list">

            {recommendations.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  className="lip-recommendation-card"
                  key={item.title}
                >

                  <div className="lip-recommendation-icon">
                    <Icon size={19} />
                  </div>

                  <div className="lip-recommendation-content">

                    <div className="lip-recommendation-title">

                      <h3>
                        {item.title}
                      </h3>

                      <span>
                        {item.tag}
                      </span>

                    </div>

                    <p>
                      {item.description}
                    </p>

                    <small>
                      Suggested focus: {item.focus}
                    </small>

                  </div>

                  <ChevronRight
                    size={17}
                    className="lip-card-arrow"
                  />

                </div>
              );

            })}

          </div>

        </section>


        {/* COLOR GUIDANCE */}

        <section className="lip-color-card">

          <div className="lip-color-heading">

            <div className="lip-color-icon">
              <Sparkles size={17} />
            </div>

            <div>

              <span>
                COLOR GUIDANCE
              </span>

              <h3>
                Lip shades that complement you
              </h3>

            </div>

          </div>

          <p>
            Your skin tone and undertone can also be used
            to personalize lipstick and tinted-balm shades.
            We'll connect this with your outfit analysis next.
          </p>

          <div className="lip-shade-row">

            <div>
              <span />
              <small>Rose</small>
            </div>

            <div>
              <span />
              <small>Warm Nude</small>
            </div>

            <div>
              <span />
              <small>Peach</small>
            </div>

            <div>
              <span />
              <small>Berry</small>
            </div>

          </div>

        </section>


        {/* ROUTINE CTA */}

        <button
          className="lip-routine-button"
          onClick={handleRoutine}
        >

          <Sparkles size={17} />

          View My Lip Care Routine

          <ChevronRight size={17} />

        </button>


        {/* DISCLAIMER */}

        <p className="lip-disclaimer">
          Cosmetic recommendations are general beauty guidance.
          Persistent or severe lip concerns should be evaluated
          by a qualified healthcare professional.
        </p>


        <p className="lip-footer">
          MakeMyLook.Ai · Personalized beauty intelligence
        </p>

      </div>

    </main>
  );
}

export default LipCareRecommendation;