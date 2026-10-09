import {
  ArrowLeft,
  Camera,
  Check,
  ImagePlus,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Sun,
  Upload,
  X,
} from 'lucide-react';

import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './Scan.css';

function CameraScan() {
  const navigate = useNavigate();
  const location = useLocation();

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState('');
  const [capturedImage, setCapturedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isStartingCamera, setIsStartingCamera] = useState(false);

  const selectedSkinTone =
    location.state?.selectedSkinTone || null;

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    setCameraError('');
    setIsStartingCamera(true);

    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error(
          'Camera access is not supported by this browser.'
        );
      }

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user',
            width: {
              ideal: 1280,
            },
            height: {
              ideal: 720,
            },
          },
          audio: false,
        });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;

        await videoRef.current.play();

        setCameraActive(true);
      }
    } catch (error) {
      console.error('Camera error:', error);

      setCameraError(
        'Camera access was unavailable. Please allow camera permission or upload a photo instead.'
      );
    } finally {
      setIsStartingCamera(false);
    }
  };

  const stopCamera = () => {
    const video = videoRef.current;

    if (!video?.srcObject) {
      return;
    }

    const tracks = video.srcObject.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });

    video.srcObject = null;

    setCameraActive(false);
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas || !cameraActive) {
      return;
    }

    const width = video.videoWidth;
    const height = video.videoHeight;

    if (!width || !height) {
      return;
    }

    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');

    context.drawImage(
      video,
      0,
      0,
      width,
      height
    );

    const imageData = canvas.toDataURL(
      'image/jpeg',
      0.92
    );

    setCapturedImage(imageData);
    setSelectedFile(null);

    stopCamera();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      setCameraError(
        'Please select a valid image file.'
      );

      return;
    }

    const maxSize =
      10 * 1024 * 1024;

    if (file.size > maxSize) {
      setCameraError(
        'Please choose an image smaller than 10 MB.'
      );

      return;
    }

    setCameraError('');

    const imageUrl =
      URL.createObjectURL(file);

    setCapturedImage(imageUrl);
    setSelectedFile(file);

    stopCamera();
  };

  const retakePhoto = () => {
    setCapturedImage(null);
    setSelectedFile(null);
    setCameraError('');

    startCamera();
  };

  const clearPhoto = () => {
    setCapturedImage(null);
    setSelectedFile(null);
    setCameraError('');
  };

  const handleAnalyze = () => {
    if (!capturedImage) {
      return;
    }

    navigate('/scan/analyzing', {
      state: {
        selectedSkinTone,
        capturedImage,
        selectedFile,
      },
    });
  };

  return (
    <main className="camera-page">

      <div className="camera-container">

        {/* Header */}

        <header className="scan-header">

          <button
            className="scan-back-button"
            onClick={() => {
              stopCamera();
              navigate('/scan');
            }}
            aria-label="Back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="scan-progress">
            <span className="active" />
            <span className="active" />
            <span />
          </div>

          <div className="scan-step">
            2 of 3
          </div>

        </header>


        {/* Heading */}

        <section className="camera-heading">

          <div className="camera-title-icon">
            <Camera size={20} />
          </div>

          <p className="scan-eyebrow">
            AI SKIN SCAN
          </p>

          <h1>
            Let's scan
            <span>your skin.</span>
          </h1>

          <p>
            Use your camera or upload a clear,
            front-facing photo for the best analysis.
          </p>

        </section>


        {/* Selected tone reference */}

        {selectedSkinTone && (
          <div className="selected-tone-reference">

            <div
              className="reference-swatch"
              style={{
                backgroundColor:
                  selectedSkinTone.color,
              }}
            />

            <div>
              <span>
                YOUR REFERENCE
              </span>

              <strong>
                {selectedSkinTone.name}
              </strong>
            </div>

            <Check size={17} />

          </div>
        )}


        {/* Camera area */}

        <section className="camera-section">

          <div className="camera-frame">

            {capturedImage ? (

              <>
                <img
                  src={capturedImage}
                  alt="Selected skin scan"
                  className="captured-preview"
                />

                <div className="preview-overlay">

                  <div className="preview-status">
                    <Check size={15} />
                    Photo ready
                  </div>

                </div>

                <button
                  className="clear-photo-button"
                  onClick={clearPhoto}
                  aria-label="Remove photo"
                >
                  <X size={17} />
                </button>

              </>

            ) : (

              <>

                <video
                  ref={videoRef}
                  className="camera-video"
                  autoPlay
                  muted
                  playsInline
                />

                {!cameraActive && (
                  <div className="camera-placeholder">

                    <div className="camera-placeholder-icon">
                      <Camera size={27} />
                    </div>

                    <strong>
                      Camera ready
                    </strong>

                    <p>
                      Position your face inside
                      the guide.
                    </p>

                  </div>
                )}

                {/* Face guide */}

                <div className="face-guide">

                  <div className="face-guide-corner top-left" />
                  <div className="face-guide-corner top-right" />
                  <div className="face-guide-corner bottom-left" />
                  <div className="face-guide-corner bottom-right" />

                </div>

                {cameraActive && (
                  <div className="camera-status">
                    <span />
                    Camera active
                  </div>
                )}

              </>
            )}

          </div>


          {/* Camera controls */}

          {!capturedImage ? (

            <div className="camera-controls">

              <button
                className="upload-button"
                onClick={() =>
                  fileInputRef.current?.click()
                }
              >
                <ImagePlus size={19} />
                Upload Photo
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                hidden
              />

              <button
                className="capture-button"
                onClick={capturePhoto}
                disabled={!cameraActive}
                aria-label="Capture photo"
              >
                <span>
                  <Camera size={25} />
                </span>
              </button>

              <button
                className="start-camera-button"
                onClick={startCamera}
                disabled={
                  cameraActive ||
                  isStartingCamera
                }
              >
                {isStartingCamera ? (
                  'Starting...'
                ) : cameraActive ? (
                  'Camera On'
                ) : (
                  <>
                    <Camera size={17} />
                    Open Camera
                  </>
                )}
              </button>

            </div>

          ) : (

            <div className="retake-controls">

              <button
                className="retake-button"
                onClick={retakePhoto}
              >
                <RotateCcw size={17} />
                Retake
              </button>

            </div>

          )}

        </section>


        {/* Lighting tips */}

        <section className="lighting-card">

          <div className="lighting-icon">
            <Sun size={18} />
          </div>

          <div>

            <strong>
              For a more accurate scan
            </strong>

            <div className="lighting-tips">

              <span>
                <Lightbulb size={13} />
                Use natural light
              </span>

              <span>
                <Sparkles size={13} />
                No heavy filters
              </span>

              <span>
                <Upload size={13} />
                Face the camera
              </span>

            </div>

          </div>

        </section>


        {/* Error */}

        {cameraError && (
          <div className="camera-error">
            {cameraError}
          </div>
        )}


        {/* Analyze */}

        <button
          className={`analyze-button ${
            capturedImage ? 'enabled' : ''
          }`}
          disabled={!capturedImage}
          onClick={handleAnalyze}
        >
          <Sparkles size={18} />
          Analyze My Skin
        </button>


        <p className="privacy-note">
          Your photo will be used for your
          personalized beauty analysis.
        </p>


        <canvas
          ref={canvasRef}
          className="hidden-canvas"
        />

      </div>

    </main>
  );
}

export default CameraScan;