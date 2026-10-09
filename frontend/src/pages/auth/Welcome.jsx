import { ArrowLeft, Sparkles, ScanFace, WandSparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Welcome() {
  const navigate = useNavigate();

  return (
    <main className="auth-page">
      <div className="auth-background auth-background-one" />
      <div className="auth-background auth-background-two" />

      <div className="auth-container">

        <button
          className="auth-back-button"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="welcome-content">

          <div className="auth-logo">
            <Sparkles size={22} />
          </div>

          <div className="auth-brand">
            MakeMyLook<span>.Ai</span>
          </div>

          <p className="auth-eyebrow">
            YOUR PERSONAL BEAUTY ASSISTANT
          </p>

          <h1>
            Welcome to your
            <span>personal look studio.</span>
          </h1>

          <p className="auth-description">
            Discover makeup, hairstyles, skincare and grooming
            recommendations personalized just for you.
          </p>

          <div className="welcome-illustration">

            <div className="illustration-glow" />

            <div className="illustration-card illustration-card-one">
              <ScanFace size={24} />
              <span>AI Skin Scan</span>
            </div>

            <div className="illustration-main">
              <WandSparkles size={64} />
            </div>

            <div className="illustration-card illustration-card-two">
              <Sparkles size={20} />
              <span>Personalized</span>
            </div>

          </div>

          <div className="auth-buttons">

            <button
              className="auth-primary-button"
              onClick={() => navigate('/register')}
            >
              Create Account
            </button>

            <button
              className="auth-secondary-button"
              onClick={() => navigate('/login')}
            >
              Log In
            </button>

          </div>

          <p className="auth-footer-text">
            Your beauty. Your style. Your way.
          </p>

        </div>

      </div>
    </main>
  );
}

export default Welcome;