import {
  ArrowLeft,
  Check,
  ChevronRight,
  Info,
  Sparkles,
} from 'lucide-react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Scan.css';

const skinTones = [
  {
    id: 'porcelain',
    name: 'Porcelain',
    description: 'Very light',
    color: '#F6E1D2',
  },
  {
    id: 'fair',
    name: 'Fair',
    description: 'Light',
    color: '#EBC5AE',
  },
  {
    id: 'light-medium',
    name: 'Light Medium',
    description: 'Light to medium',
    color: '#D9A98C',
  },
  {
    id: 'medium',
    name: 'Medium',
    description: 'Medium',
    color: '#C58F70',
  },
  {
    id: 'tan',
    name: 'Tan',
    description: 'Medium deep',
    color: '#A96F50',
  },
  {
    id: 'deep',
    name: 'Deep',
    description: 'Deep',
    color: '#7A4935',
  },
  {
    id: 'rich-deep',
    name: 'Rich Deep',
    description: 'Very deep',
    color: '#573126',
  },
];

function SkinTone() {
  const navigate = useNavigate();

  const [selectedTone, setSelectedTone] = useState(null);

  const handleContinue = () => {
    if (!selectedTone) return;

    navigate('/scan/camera', {
      state: {
        selectedSkinTone: selectedTone,
      },
    });
  };

  return (
    <main className="scan-page">

      <div className="scan-container">

        {/* Header */}

        <header className="scan-header">

          <button
            className="scan-back-button"
            onClick={() => navigate('/home')}
            aria-label="Back to home"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="scan-progress">
            <span className="active" />
            <span />
            <span />
          </div>

          <div className="scan-step">
            1 of 3
          </div>

        </header>


        {/* Intro */}

        <section className="scan-intro">

          <div className="scan-title-icon">
            <Sparkles size={20} />
          </div>

          <p className="scan-eyebrow">
            PERSONAL BEAUTY PROFILE
          </p>

          <h1>
            Let's understand
            <span>your skin tone.</span>
          </h1>

          <p>
            Choose the closest match from the chart.
            We'll use your selection as a starting
            reference before the AI scan.
          </p>

        </section>


        {/* Tone chart */}

        <section className="tone-section">

          <div className="tone-section-header">

            <h2>
              Choose your closest match
            </h2>

            <button
              className="info-button"
              title="Why do we ask?"
            >
              <Info size={15} />
            </button>

          </div>

          <div className="tone-grid">

            {skinTones.map((tone) => {

              const isSelected =
                selectedTone?.id === tone.id;

              return (
                <button
                  key={tone.id}
                  className={`tone-card ${
                    isSelected ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedTone(tone)}
                  aria-label={`Select ${tone.name} skin tone`}
                >

                  <div
                    className="tone-swatch"
                    style={{
                      backgroundColor: tone.color,
                    }}
                  >

                    {isSelected && (
                      <span className="tone-check">
                        <Check size={16} />
                      </span>
                    )}

                  </div>

                  <strong>
                    {tone.name}
                  </strong>

                  <span>
                    {tone.description}
                  </span>

                </button>
              );
            })}

          </div>

        </section>


        {/* Calibration note */}

        <div className="scan-info-card">

          <div className="scan-info-icon">
            <Info size={17} />
          </div>

          <div>
            <strong>
              Don't worry about getting it perfect.
            </strong>

            <p>
              Our camera-based analysis will verify
              your skin tone under suitable lighting.
            </p>
          </div>

        </div>


        {/* Continue */}

        <button
          className={`scan-continue-button ${
            selectedTone ? 'enabled' : ''
          }`}
          onClick={handleContinue}
          disabled={!selectedTone}
        >
          Continue to Skin Scan
          <ChevronRight size={19} />
        </button>

      </div>

    </main>
  );
}

export default SkinTone;
