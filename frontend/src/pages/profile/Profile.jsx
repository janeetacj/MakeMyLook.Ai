import {
  ArrowLeft,
  Check,
  ChevronRight,
  Scissors,
  UserRound,
  Sparkles,
  LogOut,
} from 'lucide-react';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './Profile.css';

function Profile() {
    const navigate = useNavigate();
    const location = useLocation();

    const returnTo = location.state?.returnTo || '/home';

    const [gender, setGender] = useState('');
    const [stylePreference, setStylePreference] = useState('');
    const [skinConcern, setSkinConcern] = useState('');
    const [hairType, setHairType] = useState('');
    const [hairLength, setHairLength] = useState('');

useEffect(() => {
  try {
    const savedProfile = localStorage.getItem(
      'makemylook_beauty_profile'
    );

    if (!savedProfile) {
      return;
    }

    const beautyProfile = JSON.parse(savedProfile);

    setGender(beautyProfile.gender || '');
    setStylePreference(beautyProfile.stylePreference || '');
    setSkinConcern(beautyProfile.skinConcern || '');
    setHairType(beautyProfile.hairType || '');
    setHairLength(beautyProfile.hairLength || '');
  } catch (error) {
    console.error('Failed to load beauty profile:', error);
  }
}, []);

  const genderOptions = [
    {
      id: 'woman',
      title: 'Woman',
      description: 'Makeup, hair & beauty styling',
    },
    {
      id: 'man',
      title: 'Man',
      description: 'Hair, beard & grooming styling',
    },
    {
      id: 'prefer-not',
      title: 'Prefer not to specify',
      description: 'Personalized unisex recommendations',
    },
  ];

  const styleOptions = [
    {
      id: 'natural',
      title: 'Natural',
      description: 'Fresh, simple & effortless',
    },
    {
      id: 'polished',
      title: 'Polished',
      description: 'Refined, balanced & put-together',
    },
    {
      id: 'bold',
      title: 'Bold',
      description: 'Expressive, confident & creative',
    },
  ];

  const skinConcernOptions = [
    {
        id:'none',
        title: 'No specific concern',
        description: 'General healthy-skin care',
    },
    {
        id: 'dryness',
        title: 'Dryness',
        description: 'Skin feels dry or tight',
    },
    {
        id: 'oily',
        title: 'Oily skin',
        description: 'Excess shine or oiliness',
    },
    {
        id: 'acne',
        title: 'Acne / breakouts',
        description: 'Pimples or frequent breakouts',
    },
    {
        id: 'uneven-tone',
        title: 'Uneven skin tone',
        description: 'Uneven-looking complexion',
    },
    {
        id: 'dullness',
        title: 'Dullness',
        description: 'Skin looks tired or less radiant',
    },
    {
        id: 'sensitive',
        title: 'Sensitive skin',
        description: 'Skin is easily irritated',
    },
];

const hairTypeOptions = [
  {
    id: 'straight',
    title: 'Straight',
    description: 'Naturally straight hair',
  },
  {
    id: 'wavy',
    title: 'Wavy',
    description: 'Soft waves or loose texture',
  },
  {
    id: 'curly',
    title: 'Curly',
    description: 'Defined curls or ringlets',
  },
  {
    id: 'coily',
    title: 'Coily',
    description: 'Tightly coiled or textured hair',
  },
  {
    id: 'not-sure',
    title: 'Not sure',
    description: 'I would like AI to help identify it',
  },
];

const hairLengthOptions = [
  {
    id: 'short',
    title: 'Short',
    description: 'Above the shoulders',
  },
  {
    id: 'medium',
    title: 'Medium',
    description: 'Around shoulder length',
  },
  {
    id: 'long',
    title: 'Long',
    description: 'Below the shoulders',
  },
  {
    id: 'not-sure',
    title: 'Not sure',
    description: 'I would like help choosing a style',
  },
];

  const handleContinue = () => {
    if (!gender || !stylePreference) {
        return;
    }

    const beautyProfile = {
        gender,
        stylePreference,
        skinConcern,
        hairType,
        hairLength,
    };

    localStorage.setItem(
        'makemylook_beauty_profile',
        JSON.stringify(beautyProfile)
    );

    window.dispatchEvent(
        new CustomEvent('beautyProfileUpdated', {
            detail: beautyProfile,
        })
    );

    navigate('/home');
};

  return (
    <main className="profile-page">

      <div className="profile-container">

        {/* HEADER */}

        <header className="profile-header">

          <button
            className="profile-back-button"
            aria-label="Go back"
            onClick={() => navigate(returnTo)}
          >
            <ArrowLeft size={19} />
          </button>

          <div className="profile-header-title">
            <span>YOUR BEAUTY PROFILE</span>
            <strong>Personalize your experience</strong>
          </div>

          <div className="profile-header-icon">
            <Sparkles size={17} />
          </div>

        </header>


        {/* HERO */}

        <section className="profile-hero">

          <div className="profile-hero-icon">
            <UserRound size={22} />
          </div>

          <p>LET'S GET TO KNOW YOU</p>

          <h1>
            Make your
            <span>look yours.</span>
          </h1>

          <div className="profile-hero-description">
            Tell us a little about your style so MakeMyLook.Ai
            can personalize your beauty and grooming recommendations.
          </div>

        </section>


        {/* PROGRESS */}

        <div className="profile-progress">

          <div className="profile-progress-step active">
            <span>1</span>
            <strong>Style</strong>
          </div>

          <div className="profile-progress-line" />

          <div className="profile-progress-step">
            <span>2</span>
            <strong>Preferences</strong>
          </div>

          <div className="profile-progress-line" />

          <div className="profile-progress-step">
            <span>3</span>
            <strong>Complete</strong>
          </div>

        </div>


        {/* GENDER */}

        <section className="profile-section">

          <div className="profile-section-heading">
            <div>
              <span>01 · ABOUT YOU</span>
              <h2>How would you like us to personalize your look?</h2>
            </div>

            <small>Required</small>
          </div>


          <div className="profile-option-list">

            {genderOptions.map((option) => (

              <button
                key={option.id}
                type="button"
                className={`profile-option ${
                  gender === option.id ? 'selected' : ''
                }`}
                onClick={() => setGender(option.id)}
              >

                <div className="profile-option-icon">
                  <UserRound size={18} />
                </div>

                <div className="profile-option-content">

                  <strong>
                    {option.title}
                  </strong>

                  <span>
                    {option.description}
                  </span>

                </div>

                <div className="profile-option-check">

                  {gender === option.id && (
                    <Check size={13} />
                  )}

                </div>

              </button>

            ))}

          </div>

        </section>


        {/* STYLE */}

        <section className="profile-section">

          <div className="profile-section-heading">

            <div>
              <span>02 · STYLE PERSONALITY</span>
              <h2>What kind of look do you usually prefer?</h2>
            </div>

            <small>Required</small>

          </div>


          <div className="style-option-grid">

            {styleOptions.map((option) => (

              <button
                key={option.id}
                type="button"
                className={`style-option ${
                  stylePreference === option.id ? 'selected' : ''
                }`}
                onClick={() =>
                  setStylePreference(option.id)
                }
              >

                <div className="style-option-check">

                  {stylePreference === option.id && (
                    <Check size={11} />
                  )}

                </div>

                <strong>
                  {option.title}
                </strong>

                <span>
                  {option.description}
                </span>

              </button>

            ))}

          </div>

        </section>

                {/* SKIN CONCERN */}

        <section className="profile-section">

          <div className="profile-section-heading">

            <div>
              <span>03 · SKIN PREFERENCE</span>
              <h2>What is your main skin concern?</h2>
            </div>

            <small>Optional</small>

          </div>

          <div className="profile-option-list">

            {skinConcernOptions.map((option) => (

              <button
                key={option.id}
                type="button"
                className={`profile-option ${
                  skinConcern === option.id ? 'selected' : ''
                }`}
                onClick={() => setSkinConcern(option.id)}
              >

                <div className="profile-option-icon">
                  <Sparkles size={18} />
                </div>

                <div className="profile-option-content">

                  <strong>
                    {option.title}
                  </strong>

                  <span>
                    {option.description}
                  </span>

                </div>

                <div className="profile-option-check">

                  {skinConcern === option.id && (
                    <Check size={13} />
                  )}

                </div>

              </button>

            ))}

          </div>

        </section>

        {/* HAIR TYPE */}

<section className="profile-section">

  <div className="profile-section-heading">

    <div>
      <span>04 · HAIR PROFILE</span>
      <h2>What is your natural hair type?</h2>
    </div>

    <small>Optional</small>

  </div>

  <div className="profile-option-list">

    {hairTypeOptions.map((option) => (

      <button
        key={option.id}
        type="button"
        className={`profile-option ${
          hairType === option.id ? 'selected' : ''
        }`}
        onClick={() => setHairType(option.id)}
      >

        <div className="profile-option-icon">
          <Scissors size={18} />
        </div>

        <div className="profile-option-content">

          <strong>
            {option.title}
          </strong>

          <span>
            {option.description}
          </span>

        </div>

        <div className="profile-option-check">

          {hairType === option.id && (
            <Check size={13} />
          )}

        </div>

      </button>

    ))}

  </div>

</section>

{/* HAIR LENGTH */}

<section className="profile-section">

  <div className="profile-section-heading">

    <div>
      <span>05 · HAIR LENGTH</span>
      <h2>How long is your hair?</h2>
    </div>

    <small>Optional</small>

  </div>

  <div className="style-option-grid">

    {hairLengthOptions.map((option) => (

      <button
        key={option.id}
        type="button"
        className={`style-option ${
          hairLength === option.id ? 'selected' : ''
        }`}
        onClick={() => setHairLength(option.id)}
      >

        <div className="style-option-check">

          {hairLength === option.id && (
            <Check size={11} />
          )}

        </div>

        <strong>
          {option.title}
        </strong>

        <span>
          {option.description}
        </span>

      </button>

    ))}

  </div>

</section>

        {/* PRIVACY NOTE */}

        <div className="profile-privacy-note">

          <Sparkles size={15} />

          <div>

            <strong>
              Your profile helps us personalize your results.
            </strong>

            <span>
              You can change these preferences later from your profile.
            </span>

          </div>

        </div>


        {/* CONTINUE */}

        <button
          type="button"
          className={`profile-continue-button ${
            gender && stylePreference ? 'ready' : ''
          }`}
          onClick={handleContinue}
          disabled={!gender || !stylePreference}
        >

          <span>
            Continue
          </span>

          <ChevronRight size={18} />

        </button>


        <button
          type="button"
          className="profile-continue-button"
          onClick={() => navigate('/welcome')}
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>



        <p className="profile-footer">
          MakeMyLook.Ai · Your personal beauty intelligence
        </p>

      </div>

    </main>
  );
}

export default Profile;
