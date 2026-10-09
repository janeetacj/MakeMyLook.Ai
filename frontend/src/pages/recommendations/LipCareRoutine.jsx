import {
  ArrowLeft,
  Check,
  ChevronRight,
  Droplets,
  Heart,
  Info,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

import './LipCareRoutine.css';

function LipCareRoutine() {
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

  const daytimeRoutine = [
    {
      number: '01',
      title: 'Hydrating Lip Balm',
      description:
        'Apply a nourishing lip balm whenever your lips feel dry or tight.',
      icon: Droplets,
      label: 'HYDRATE',
    },
    {
      number: '02',
      title: 'SPF Lip Protection',
      description:
        'Use lip protection with SPF when you are exposed to sunlight.',
      icon: Sun,
      label: 'PROTECT',
    },
  ];

  const nighttimeRoutine = [
    {
      number: '01',
      title: 'Clean & Prepare',
      description:
        'Gently remove lipstick, tinted products and daily buildup.',
      icon: Droplets,
      label: 'CLEANSE',
    },
    {
      number: '02',
      title: 'Overnight Lip Treatment',
      description:
        'Apply a richer lip treatment before sleeping for overnight hydration.',
      icon: Moon,
      label: 'RESTORE',
    },
  ];

  const handleBack = () => {
    navigate('/recommendations/lip-care', {
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

  const handleExplore = () => {
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

  const renderRoutine = (items) => (
    <div className="lip-routine-list">

      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            className="lip-routine-item"
            key={item.number + item.title}
          >

            <div className="lip-routine-number">
              {item.number}
            </div>

            <div className="lip-routine-item-icon">
              <Icon size={17} />
            </div>

            <div className="lip-routine-item-content">

              <div className="lip-routine-item-title">

                <h3>
                  {item.title}
                </h3>

                <span>
                  {item.label}
                </span>

              </div>

              <p>
                {item.description}
              </p>

            </div>

            <Check
              size={15}
              className="lip-routine-check"
            />

          </div>
        );
      })}

    </div>
  );

  return (
    <main className="lip-routine-page">

      <div className="lip-routine-container">

        {/* HEADER */}

        <header className="lip-routine-header">

          <button
            className="lip-routine-back"
            onClick={handleBack}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="lip-routine-header-title">

            <span>
              YOUR BEAUTY PLAN
            </span>

            <strong>
              Lip Care Routine
            </strong>

          </div>

          <div className="lip-routine-header-icon">
            <Heart size={17} />
          </div>

        </header>


        {/* HERO */}

        <section className="lip-routine-hero">

          <div className="lip-routine-hero-icon">
            <Heart size={21} />
          </div>

          <p>
            YOUR PERSONALIZED ROUTINE
          </p>

          <h1>
            Care for your
            <span>natural smile.</span>
          </h1>

          <p className="lip-routine-hero-description">
            A simple daily routine focused on hydration,
            comfort and everyday lip protection.
          </p>

        </section>


        {/* PROFILE */}

        <section className="lip-routine-profile">

          <div className="lip-routine-profile-heading">

            <div>

              <span>
                AI PROFILE
              </span>

              <h2>
                Your lip snapshot
              </h2>

            </div>

            <div className="lip-routine-ai-badge">
              <Sparkles size={10} />
              PERSONALIZED
            </div>

          </div>


          <div className="lip-routine-profile-grid">

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
                CONDITION
              </span>

              <strong>
                {profile.lipCondition}
              </strong>
            </div>

          </div>

        </section>


        {/* DAYTIME */}

        <section className="lip-routine-section">

          <div className="lip-routine-section-heading">

            <div className="lip-routine-section-icon day">
              <Sun size={17} />
            </div>

            <div>

              <span>
                DAYTIME
              </span>

              <h2>
                Hydrate & protect
              </h2>

            </div>

          </div>

          {renderRoutine(daytimeRoutine)}

        </section>


        {/* QUICK TIP */}

        <section className="lip-routine-tip">

          <div className="lip-routine-tip-icon">
            <Sparkles size={16} />
          </div>

          <div>

            <span>
              AI BEAUTY TIP
            </span>

            <p>
              Keep a lip balm nearby so you can reapply
              whenever your lips begin to feel dry.
            </p>

          </div>

        </section>


        {/* NIGHT */}

        <section className="lip-routine-section night">

          <div className="lip-routine-section-heading">

            <div className="lip-routine-section-icon night">
              <Moon size={17} />
            </div>

            <div>

              <span>
                NIGHTTIME
              </span>

              <h2>
                Remove & restore
              </h2>

            </div>

          </div>

          {renderRoutine(nighttimeRoutine)}

        </section>


        {/* OPTIONAL CARE */}

        <section className="lip-optional-card">

          <div className="lip-optional-icon">
            <Sparkles size={16} />
          </div>

          <div className="lip-optional-content">

            <span>
              OPTIONAL WEEKLY CARE
            </span>

            <h3>
              Gentle lip exfoliation
            </h3>

            <p>
              If your lips tolerate it, occasional gentle
              exfoliation can help remove loose flakes.
              Avoid aggressive scrubbing.
            </p>

          </div>

          <span className="lip-optional-badge">
            OPTIONAL
          </span>

        </section>


        {/* PRODUCT PRINCIPLES */}

        <section className="lip-product-card">

          <div className="lip-product-heading">

            <div className="lip-product-icon">
              <ShieldCheck size={17} />
            </div>

            <div>

              <span>
                WHAT TO LOOK FOR
              </span>

              <h3>
                Choose products by function
              </h3>

            </div>

          </div>


          <div className="lip-product-tags">

            <span>
              Hydrating ingredients
            </span>

            <span>
              SPF protection
            </span>

            <span>
              Fragrance-free options
            </span>

            <span>
              Barrier-supporting ingredients
            </span>

          </div>

        </section>


        {/* WHY */}

        <section className="lip-routine-why">

          <div className="lip-routine-why-icon">
            <Info size={16} />
          </div>

          <div>

            <span>
              WHY THIS ROUTINE?
            </span>

            <p>
              Your routine is currently based on the
              estimated lip condition and beauty profile.
              In the final AI version, MakeMyLook.Ai will
              use image analysis and user feedback to
              personalize these recommendations further.
            </p>

          </div>

        </section>


        {/* SAFETY */}

        <section className="lip-routine-safety">

          <span>
            IMPORTANT
          </span>

          <p>
            Cosmetic guidance only. Stop using products
            that cause irritation. Persistent cracking,
            swelling, sores or other unusual symptoms
            should be evaluated by a qualified healthcare
            professional.
          </p>

        </section>


        {/* CTA */}

        <button
          className="lip-routine-explore"
          onClick={handleExplore}
        >

          <Sparkles size={17} />

          Explore More Beauty Recommendations

          <ChevronRight size={17} />

        </button>


        <p className="lip-routine-footer">
          MakeMyLook.Ai · Personalized beauty intelligence
        </p>

      </div>

    </main>
  );
}

export default LipCareRoutine;