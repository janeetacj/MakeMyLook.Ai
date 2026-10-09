import {
  ArrowLeft,
  Camera,
  Check,
  ImagePlus,
  Sparkles,
  Upload,
} from 'lucide-react';

import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './Outfit.css';

function OutfitAnalysis() {
  const navigate = useNavigate();
  const location = useLocation();

  const fileInputRef = useRef(null);

  const {
    selectedSkinTone,
    capturedImage,
    analysisResult,
    beautyProfile,
  } = location.state || {};

  const [outfitImage, setOutfitImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setSelectedFile(file);

    const imageUrl = URL.createObjectURL(file);

    setOutfitImage(imageUrl);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleCameraClick = () => {
    navigate('/outfit/camera', {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
        beautyProfile,
      },
    });
  };

  const handleAnalyzeOutfit = () => {
    if (!outfitImage) {
      return;
    }

    navigate('/outfit/analyzing', {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
        beautyProfile,
        outfitImage,
        selectedFile,
      },
    });
  };

  return (
    <main className="outfit-page">

      <div className="outfit-container">

        {/* Header */}

        <header className="outfit-header">

          <button
            className="outfit-back-button"
            onClick={() =>
              navigate('/scan/result', {
                state: {
                  selectedSkinTone,
                  capturedImage,
                  analysisResult,
                  beautyProfile,
                },
              })
            }
            aria-label="Back to skin result"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="outfit-progress">

            <span className="completed" />
            <span className="completed" />
            <span className="active" />
            <span />

          </div>

          <div className="outfit-step-label">
            4 / 5
          </div>

        </header>


        {/* Heading */}

        <section className="outfit-heading">

          <div className="outfit-title-icon">
            <Sparkles size={19} />
          </div>

          <p className="outfit-eyebrow">
            STEP 4 • OUTFIT ANALYSIS
          </p>

          <h1>
            What's your
            <span>look?</span>
          </h1>

          <p>
            Show us the outfit you're planning to
            wear so we can find shades and styles
            that complement you.
          </p>

        </section>


        {/* Outfit upload area */}

        <section className="outfit-upload-card">

          <div
            className={`outfit-preview ${
              outfitImage ? 'has-image' : ''
            }`}
          >

            {outfitImage ? (
              <>
                <img
                  src={outfitImage}
                  alt="Selected outfit"
                  className="outfit-preview-image"
                />

                <div className="outfit-image-overlay">

                  <div className="outfit-detected-badge">
                    <Check size={13} />
                    Photo ready
                  </div>

                  <button
                    className="change-outfit-button"
                    onClick={handleUploadClick}
                  >
                    Change Photo
                  </button>

                </div>
              </>
            ) : (
              <>

                <div className="outfit-placeholder-icon">
                  <ImagePlus size={28} />
                </div>

                <h2>
                  Show us your outfit
                </h2>

                <p>
                  Upload a clear photo of your
                  outfit for AI colour analysis.
                </p>

                <span className="outfit-photo-tip">
                  Full outfit photos work best
                </span>

              </>
            )}

          </div>


          {/* Hidden file input */}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            hidden
          />


          {/* Actions */}

          <div className="outfit-actions">

            <button
              className="outfit-upload-button"
              onClick={handleUploadClick}
            >
              <Upload size={17} />
              Upload Outfit
            </button>

            <div className="outfit-or">

              <span />
              OR
              <span />

            </div>

            <button
              className="outfit-camera-button"
              onClick={handleCameraClick}
            >
              <Camera size={17} />
              Open Camera
            </button>

          </div>

        </section>


        {/* Skin profile */}

        <section className="outfit-profile-card">

          <div className="outfit-profile-icon">
            <Sparkles size={16} />
          </div>

          <div className="outfit-profile-content">

            <span>
              YOUR SKIN PROFILE
            </span>

            <strong>
              {selectedSkinTone?.name || 'Medium'}
            </strong>

            <p>
              {analysisResult?.undertone || 'Warm'}
              {' '}
              undertone
            </p>

          </div>

          <div className="profile-ready">

            <Check size={13} />

            Ready

          </div>

        </section>


        {/* What AI will analyze */}

        <section className="outfit-ai-card">

          <div className="outfit-ai-header">

            <div className="outfit-ai-icon">
              <Sparkles size={15} />
            </div>

            <div>

              <span>
                MAKE MY LOOK.AI
              </span>

              <strong>
                What we'll analyze
              </strong>

            </div>

          </div>


          <div className="outfit-ai-items">

            <div>
              <span className="ai-dot" />
              Dominant outfit colour
            </div>

            <div>
              <span className="ai-dot" />
              Accent colours
            </div>

            <div>
              <span className="ai-dot" />
              Colour compatibility
            </div>

            <div>
              <span className="ai-dot" />
              Overall outfit style
            </div>

          </div>

        </section>


        {/* Analyze button */}

        <button
          className={`outfit-analyze-button ${
            outfitImage ? 'enabled' : ''
          }`}
          disabled={!outfitImage}
          onClick={handleAnalyzeOutfit}
        >
          <Sparkles size={18} />

          {outfitImage
            ? 'Analyze My Outfit'
            : 'Upload an Outfit First'}
        </button>


        <p className="outfit-security-note">
          Your outfit image is used only to create
          personalized recommendations.
        </p>

      </div>

    </main>
  );
}

export default OutfitAnalysis;