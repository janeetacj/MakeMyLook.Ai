import {
  ArrowLeft,
  Camera,
  Check,
  RotateCcw,
  Sparkles,
  X,
} from 'lucide-react';

import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './OutfitCamera.css';

function OutfitCamera() {
  const navigate = useNavigate();
  const location = useLocation();

  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const canvasRef = useRef(null);

  const {
    selectedSkinTone,
    capturedImage,
    analysisResult,
  } = location.state || {};

  const [cameraReady, setCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState('');
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [cameraFacing, setCameraFacing] = useState('user');

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, [cameraFacing]);

  const startCamera = async () => {
    setCameraError('');
    setCameraReady(false);

    try {
      stopCamera();

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: cameraFacing,
          width: {
            ideal: 1280,
          },
          height: {
            ideal: 720,
          },
        },
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;

        await videoRef.current.play();

        setCameraReady(true);
      }
    } catch (error) {
      console.error('Camera error:', error);

      setCameraError(
        'We could not access your camera. Please allow camera permission and try again.'
      );
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop();
      });

      streamRef.current = null;
    }
  };

  const handleCapture = () => {
    if (!videoRef.current || !canvasRef.current) {
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    if (cameraFacing === 'user') {
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
    }

    context.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const image = canvas.toDataURL(
      'image/jpeg',
      0.92
    );

    setCapturedPhoto(image);

    stopCamera();
  };

  const handleRetake = () => {
    setCapturedPhoto(null);
    startCamera();
  };

  const handleUsePhoto = () => {
    if (!capturedPhoto) {
      return;
    }

    navigate('/outfit/analyzing', {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
        outfitImage: capturedPhoto,
        source: 'camera',
      },
    });
  };

  const handleFlipCamera = () => {
    setCameraFacing((current) =>
      current === 'user' ? 'environment' : 'user'
    );
  };

  const handleBack = () => {
    stopCamera();

    navigate('/scan/outfit', {
      state: {
        selectedSkinTone,
        capturedImage,
        analysisResult,
      },
    });
  };

  return (
    <main className="outfit-camera-page">

      <div className="outfit-camera-container">

        {/* Header */}

        <header className="camera-header">

          <button
            className="camera-back-button"
            onClick={handleBack}
            aria-label="Go back"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="camera-progress">

            <span className="completed" />
            <span className="completed" />
            <span className="active" />
            <span />

          </div>

          <span className="camera-step">
            4 / 5
          </span>

        </header>


        {/* Title */}

        <section className="camera-title">

          <div className="camera-title-icon">
            <Sparkles size={17} />
          </div>

          <p>
            OUTFIT SCAN
          </p>

          <h1>
            Scan your
            <span>outfit</span>
          </h1>

          <p className="camera-subtitle">
            Position your full outfit inside the
            frame for the best AI analysis.
          </p>

        </section>


        {/* Camera */}

        <section className="camera-frame-wrapper">

          <div className="camera-frame">

            {!capturedPhoto && (
              <video
                ref={videoRef}
                className="camera-video"
                autoPlay
                muted
                playsInline
              />
            )}

            {capturedPhoto && (
              <img
                src={capturedPhoto}
                alt="Captured outfit"
                className="captured-outfit-photo"
              />
            )}


            {/* Guide */}

            {!capturedPhoto && (
              <div className="camera-guide">

                <div className="guide-corner top-left" />
                <div className="guide-corner top-right" />
                <div className="guide-corner bottom-left" />
                <div className="guide-corner bottom-right" />

                <div className="person-outline">

                  <div className="outline-head" />

                  <div className="outline-body" />

                </div>

                <div className="camera-guide-text">

                  <strong>
                    Full outfit
                  </strong>

                  <span>
                    Keep your outfit clearly visible
                  </span>

                </div>

              </div>
            )}


            {/* Camera loading */}

            {!cameraReady &&
              !cameraError &&
              !capturedPhoto && (
                <div className="camera-status">
                  <div className="camera-loader" />

                  <span>
                    Starting camera...
                  </span>
                </div>
              )}


            {/* Camera error */}

            {cameraError && (
              <div className="camera-error">

                <Camera size={29} />

                <strong>
                  Camera unavailable
                </strong>

                <p>
                  {cameraError}
                </p>

                <button
                  onClick={startCamera}
                >
                  Try Again
                </button>

              </div>
            )}

          </div>

        </section>


        {/* Controls */}

        {!capturedPhoto ? (
          <section className="camera-controls">

            <button
              className="flip-camera-button"
              onClick={handleFlipCamera}
              disabled={!cameraReady}
              aria-label="Flip camera"
            >
              <RotateCcw size={19} />
            </button>

            <button
              className="capture-button"
              onClick={handleCapture}
              disabled={!cameraReady}
              aria-label="Capture outfit"
            >
              <span>
                <Camera size={25} />
              </span>
            </button>

            <div className="camera-control-placeholder" />

          </section>
        ) : (
          <section className="captured-controls">

            <button
              className="retake-button"
              onClick={handleRetake}
            >
              <X size={16} />
              Retake
            </button>

            <button
              className="use-photo-button"
              onClick={handleUsePhoto}
            >
              <Check size={17} />
              Use This Photo
            </button>

          </section>
        )}


        {/* Tips */}

        <section className="camera-tips">

          <div className="tip-icon">
            <Sparkles size={14} />
          </div>

          <div>

            <strong>
              For better results
            </strong>

            <p>
              Stand in good lighting and make sure
              your complete outfit is visible.
            </p>

          </div>

        </section>


        <canvas
          ref={canvasRef}
          className="hidden-camera-canvas"
        />

      </div>

    </main>
  );
}

export default OutfitCamera;