import {
  Bell,
  ChevronRight,
  CircleUserRound,
  Droplets,
  Heart,
  ScanFace,
  Scissors,
  Sparkles,
  Sun,
  Shirt,
  WandSparkles,
  Palette,
  UserRound,
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-page">

      <div className="home-container">

        {/* Header */}

        <header className="home-header">

          <div className="home-brand">
            <div className="home-brand-icon">
              <Sparkles size={17} />
            </div>

            <div>
              <span className="home-brand-name">
                MakeMyLook<span>.Ai</span>
              </span>

              <p>Your personal look studio</p>
            </div>
          </div>

          <div className="home-header-actions">

            <button
              className="icon-button"
              aria-label="Notifications"
            >
              <Bell size={19} />
            </button>

            <button
              className="profile-mini-button"
              onClick={() => navigate('/profile', { state: { returnTo: '/home' } })}
              aria-label="Profile"
            >
              <CircleUserRound size={21} />
            </button>

          </div>

        </header>


        {/* Greeting */}

        <section className="home-greeting">

          <div>

            <p className="greeting-label">
              GOOD EVENING
            </p>

            <h1>
              Ready to create
              <span>your look?</span>
            </h1>

            <p className="greeting-description">
              Let's find colors, styles and products
              that work beautifully for you.
            </p>

          </div>

        </section>


        {/* Main AI CTA */}

        <section className="create-look-card">

          <div className="create-look-glow" />

          <div className="create-look-content">

            <div className="create-look-icon">
              <WandSparkles size={25} />
            </div>

            <div>

              <p className="small-label">
                AI BEAUTY STUDIO
              </p>

              <h2>
                Create My Look
              </h2>

              <p>
                Scan yourself and let AI
                personalize your complete look.
              </p>

            </div>

          </div>

          <button
            className="create-look-button"
            onClick={() => navigate('/scan')}
          >
            Start
            <ChevronRight size={18} />
          </button>

        </section>


        {/* Analysis Status */}

        <section className="section-block">

          <div className="section-heading">

            <div>
              <p className="section-eyebrow">
                YOUR PROFILE
              </p>

              <h2>
                Personal Analysis
              </h2>
            </div>

            <button
              className="text-button"
              onClick={() => navigate('/scan')}
            >
              Update
            </button>

          </div>

          <div className="analysis-grid">

            <div className="analysis-card">

              <div className="analysis-icon skin-analysis-icon">
                <ScanFace size={21} />
              </div>

              <div className="analysis-info">
                <span>Skin Tone</span>

                <strong>
                  Not scanned yet
                </strong>

                <p>
                  Complete your skin scan
                </p>
              </div>

            </div>

            <div className="analysis-card">

              <div className="analysis-icon outfit-analysis-icon">
                <Shirt size={21} />
              </div>

              <div className="analysis-info">
                <span>Outfit</span>

                <strong>
                  No outfit detected
                </strong>

                <p>
                  Scan your outfit
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* Quick Recommendations */}

        <section className="section-block">

          <div className="section-heading">

            <div>
              <p className="section-eyebrow">
                EXPLORE
              </p>

              <h2>
                Beauty & Grooming
              </h2>
            </div>

          </div>

          <div className="recommendation-grid">

            <button
              className="recommendation-card"
              onClick={() => navigate('/recommendations')}
            >
              <div className="recommendation-icon makeup-icon">
                <Palette size={22} />
              </div>

              <div>
                <strong>Makeup</strong>
                <span>Shades & colors</span>
              </div>

              <ChevronRight size={17} />
            </button>


            <button
              className="recommendation-card"
              onClick={() => navigate('/recommendations')}
            >
              <div className="recommendation-icon hair-icon">
                <Scissors size={22} />
              </div>

              <div>
                <strong>Hair Style</strong>
                <span>Find your style</span>
              </div>

              <ChevronRight size={17} />
            </button>


            <button
              className="recommendation-card"
              onClick={() => navigate('/recommendations')}
            >
              <div className="recommendation-icon skin-icon">
                <Droplets size={22} />
              </div>

              <div>
                <strong>Skincare</strong>
                <span>Daily essentials</span>
              </div>

              <ChevronRight size={17} />
            </button>


            <button
              className="recommendation-card"
              onClick={() => navigate('/recommendations')}
            >
              <div className="recommendation-icon grooming-icon">
                <UserRound size={22} />
              </div>

              <div>
                <strong>Grooming</strong>
                <span>Beard & moustache</span>
              </div>

              <ChevronRight size={17} />
            </button>

          </div>

        </section>


        {/* Daily Care */}

        <section className="care-card">

          <div className="care-card-icon">
            <Sun size={21} />
          </div>

          <div className="care-card-content">

            <p className="section-eyebrow">
              TODAY'S CARE
            </p>

            <h3>
              Don't forget your SPF
            </h3>

            <p>
              Protect your skin with sunscreen
              before heading outdoors.
            </p>

          </div>

          <button
            className="care-arrow"
            onClick={() => navigate('/recommendations')}
          >
            <ChevronRight size={18} />
          </button>

        </section>


        {/* Bottom Navigation */}

        <nav className="bottom-navigation">

          <button className="bottom-nav-item active">

            <Sparkles size={20} />

            <span>Home</span>

          </button>


          <button
            className="bottom-nav-item"
            onClick={() => navigate('/scan')}
          >

            <div className="scan-nav-button">
              <ScanFace size={22} />
            </div>

            <span>Scan</span>

          </button>


          <button
            className="bottom-nav-item"
            onClick={() => navigate('/looks')}
          >

            <Heart size={20} />

            <span>Looks</span>

          </button>


          <button
            className="bottom-nav-item"
            onClick={() => navigate('/assistant')}
          >

            <WandSparkles size={20} />

            <span>AI</span>

          </button>


          <button
            className="bottom-nav-item"
            onClick={() => navigate('/profile', { state: { returnTo: '/home' } })}
          >

            <CircleUserRound size={20} />

            <span>Me</span>

          </button>

        </nav>

      </div>

    </main>
  );
}

export default Home;