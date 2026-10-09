import {
  ArrowLeft,
  ChevronRight,
  Droplets,
  Flower2,
  Heart,
  Scissors,
  Sparkles,
  UserRound,
  WandSparkles,
} from 'lucide-react';

import { useLocation, useNavigate } from 'react-router-dom';

import './RecommendationCategories.css';

function RecommendationCategories() {
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
  } = location.state || {};

  const savedBeautyProfile = (() => {
  try {
    const saved = localStorage.getItem('makemylook_beauty_profile');
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
})();

const stylePreference =
  savedBeautyProfile?.stylePreference ||
  beautyProfile?.stylePreference ||
  'natural';

const effectiveBeautyProfile = {
  ...(savedBeautyProfile || {}),
  ...(beautyProfile || {}),
};

  /*
   * Temporary preference.
   *
   * Later this will come from the user's account/profile.
   *
   * Possible values:
   * "women"
   * "men"
   * "unisex"
   */

  const profileGender =
    savedBeautyProfile?.gender ||
    beautyProfile?.gender ||
    'prefer-not';

  const userType =
    profileGender === 'woman'
      ? 'women'
      : profileGender === 'man'
        ? 'men'
        : 'unisex';

  const commonCategories = [
    {
      id: 'skincare',
      title: 'Skincare',
      description: 'Cleanser, moisturizer & sunscreen',
      icon: Droplets,
      tag: 'ESSENTIAL',
      className: 'category-skincare',
    },

    {
      id: 'lip-care',
      title: 'Lip Care',
      description: 'Lip balm & dry-lip care',
      icon: Heart,
      tag: 'UNISEX',
      className: 'category-lip-care',
    },

    {
      id: 'outfit-harmony',
      title: 'Outfit Harmony',
      description: 'Colours that complete your look',
      icon: WandSparkles,
      tag: 'AI MATCH',
      className: 'category-harmony',
    },
  ];

  const womenCategories = [
    {
      id: 'makeup',
      title: 'Makeup',
      description: 'Foundation, blush & eye makeup',
      icon: Sparkles,
      tag: 'AI CURATED',
      className: 'category-makeup',
    },

    {
      id: 'lip-colour',
      title: 'Lip Colour',
      description: 'Lipstick shades for your skin tone',
      icon: Heart,
      tag: 'COLOUR MATCH',
      className: 'category-lip-colour',
    },

    {
      id: 'hair',
      title: 'Hair',
      description: 'Hairstyles for your face & outfit',
      icon: Scissors,
      tag: 'STYLE MATCH',
      className: 'category-hair',
    },

    {
      id: 'nails',
      title: 'Nails',
      description: 'Manicure, nail colour & designs',
      icon: Flower2,
      tag: 'STYLE MATCH',
      className: 'category-nails',
    },
  ];

  const menCategories = [
    {
      id: 'hair',
      title: 'Hair',
      description: 'Hairstyles matched to your look',
      icon: Scissors,
      tag: 'STYLE MATCH',
      className: 'category-hair',
    },

    {
      id: 'beard',
      title: 'Beard',
      description: 'Beard styles for your face shape',
      icon: UserRound,
      tag: 'FACE MATCH',
      className: 'category-beard',
    },

    {
      id: 'mustache',
      title: 'Mustache',
      description: 'Mustache styles for your features',
      icon: UserRound,
      tag: 'STYLE MATCH',
      className: 'category-mustache',
    },
  ];

  const getCategories = () => {
    if (userType === 'women') {
      return [
        ...womenCategories,
        ...commonCategories,
      ];
    }

    if (userType === 'men') {
      return [
        ...menCategories,
        ...commonCategories,
      ];
    }

    return commonCategories;
  };

  const categories = getCategories();

  const handleBack = () => {
    navigate('/profile', {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
        outfitImage,
        outfitData,
        beautyProfile: effectiveBeautyProfile,
        outfitAnalysisResult,
        returnTo: '/home',
      },
    });
  };

  const handleCategoryClick = (category) => {
    navigate(`/recommendations/${category.id}`, {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
        outfitImage,
        outfitData,
        beautyProfile: effectiveBeautyProfile,
        skinAnalysis,
        outfitAnalysisResult,
        category: category.id,
        returnTo: '/recommendations/details',
      },
    });
  };

  return (
    <main className="recommendation-categories-page">

      <div className="recommendation-categories-container">

        {/* HEADER */}

        <header className="categories-header">

          <button
            className="categories-back"
            onClick={handleBack}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="categories-title-wrapper">

            <span>
              YOUR BEAUTY PLAN
            </span>

            <strong>
              Personalized Recommendations
            </strong>

          </div>

          <div className="categories-header-icon">
            <Sparkles size={17} />
          </div>

        </header>


        {/* HERO */}

        <section className="categories-hero">

          <div className="categories-hero-icon">
            <WandSparkles size={18} />
          </div>

          <p>
            AI CURATED FOR YOU
          </p>

          <h1>
            Complete
            <span>your look.</span>
          </h1>

          <p className="categories-hero-description">
            We've analyzed your skin profile and outfit.
            Choose an area to explore your personalized
            recommendations.
          </p>

        </section>


        {/* PROFILE SUMMARY */}

        <section className="category-profile-summary">

          <div className="summary-item">

            <span>
              SKIN
            </span>

            <strong>
              {beautyProfile?.skinTone || 'Medium'}
            </strong>

          </div>

          <div className="summary-divider" />

          <div className="summary-item">

            <span>
              UNDERTONE
            </span>

            <strong>
              {beautyProfile?.undertone || 'Warm'}
            </strong>

          </div>

          <div className="summary-divider" />

          <div className="summary-item">

            <span>
              OUTFIT
            </span>

            <strong>
              {outfitData?.dominantColour || 'Soft Beige'}
            </strong>

          </div>

        </section>


        {/* CATEGORY LIST */}

        <section className="category-section">

          <div className="category-section-heading">

            <div>

              <span>
                EXPLORE YOUR LOOK
              </span>

              <h2>
                What would you like to improve?
              </h2>

            </div>

            <span className="category-count">
              {categories.length} areas
            </span>

          </div>


          <div className="category-list">

            {categories.map((category) => {

              const Icon = category.icon;

              return (
                <button
                  key={category.id}
                  className={`category-card ${category.className}`}
                  onClick={() =>
                    handleCategoryClick(category)
                  }
                >

                  <div className="category-card-icon">
                    <Icon size={20} />
                  </div>

                  <div className="category-card-content">

                    <div className="category-card-title-row">

                      <h3>
                        {category.title}
                      </h3>

                      <span>
                        {category.tag}
                      </span>

                    </div>

                    <p>
                      {category.description}
                    </p>

                  </div>

                  <div className="category-card-arrow">
                    <ChevronRight size={17} />
                  </div>

                </button>
              );
            })}

          </div>

        </section>


        {/* AI NOTE */}

        <section className="categories-ai-note">

          <div className="ai-note-icon">
            <Sparkles size={16} />
          </div>

          <div>

            <span>
              MAKE MY LOOK AI
            </span>

            <p>
              Each recommendation considers your skin,
              outfit and overall style so the final look
              feels coordinated rather than random.
            </p>

          </div>

        </section>


        {/* FOOTER */}

        <p className="categories-footer">
          Your recommendations are generated from your
          personal beauty profile.
        </p>

      </div>

    </main>
  );
}

export default RecommendationCategories;