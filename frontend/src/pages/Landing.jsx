import { ArrowRight, Sparkles, ScanFace, Shirt, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
    const navigate = useNavigate();

  return (
    <main className="landing-page">
      <section className="landing-hero">

        <div className="landing-background-shape landing-shape-one" />
        <div className="landing-background-shape landing-shape-two" />

        <nav className="landing-navbar">
          <div className="brand">
            <div className="brand-icon">
              <Sparkles size={18} />
            </div>

            <span>
              MakeMyLook<span className="brand-ai">.Ai</span>
            </span>
          </div>

            <button
                className="nav-login"
                onClick={() => navigate('/login')}
            >
                Log In
            </button>
        </nav>

        <div className="landing-content">

          <div className="landing-badge">
            <Sparkles size={15} />
            <span>AI-Powered Personal Beauty</span>
          </div>

          <h1>
            Discover the look
            <span> that's made for you.</span>
          </h1>

          <p className="landing-description">
            Your personal AI beauty and grooming assistant.
            Discover makeup, hairstyles, skincare and grooming
            recommendations designed around you.
          </p>

          <div className="landing-actions">
            <button
                className="primary-button"
                onClick={() => navigate('/welcome')}
            >
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="secondary-button">
              Explore MakeMyLook.Ai
            </button>
          </div>

        </div>

        <div className="landing-features">

          <div className="feature-card">
            <div className="feature-icon pink-icon">
              <ScanFace size={22} />
            </div>

            <div>
              <h3>AI Skin Scan</h3>
              <p>Understand your skin</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon purple-icon">
              <Shirt size={22} />
            </div>

            <div>
              <h3>Outfit Match</h3>
              <p>Find your perfect colors</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon peach-icon">
              <Heart size={22} />
            </div>

            <div>
              <h3>Personalized Looks</h3>
              <p>Made just for you</p>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}

export default Landing;
