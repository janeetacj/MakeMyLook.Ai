import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Landing from './pages/Landing';
import Welcome from './pages/auth/Welcome';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/home/Home';
import SkinTone from './pages/scan/SkinTone';
import CameraScan from './pages/scan/CameraScan';
import Analyzing from './pages/scan/Analyzing';
import SkinResult from './pages/scan/SkinResult';
import OutfitAnalysis from './pages/outfit/OutfitAnalysis';
import OutfitCamera from './pages/outfit/OutfitCamera';
import OutfitAnalyzing from './pages/outfit/OutfitAnalyzing';
import OutfitResult from './pages/outfit/OutfitResult';
import RecommendationProfile from './pages/recommendations/RecommendationProfile';
import RecommendationCategories
  from './pages/recommendations/RecommendationCategories';
import SkincareRecommendation
  from './pages/recommendations/SkincareRecommendation';
import SkincareRoutine
  from './pages/recommendations/SkincareRoutine';
import LipCareRecommendation
  from './pages/recommendations/LipCareRecommendation';
import LipCareRoutine
  from './pages/recommendations/LipCareRoutine';
import OutfitHarmony
  from './pages/recommendations/OutfitHarmony';
import MakeupRecommendation
  from './pages/recommendations/MakeupRecommendation';
import LipColourRecommendation
  from './pages/recommendations/LipColourRecommendation';
import HairRecommendation
  from './pages/recommendations/HairRecommendation';
import NailsRecommendation
  from './pages/recommendations/NailsRecommendation';
import BeardRecommendation
  from './pages/recommendations/BeardRecommendation';
import MustacheRecommendation
  from './pages/recommendations/MustacheRecommendation';
import BeforeAfter
  from './pages/recommendations/BeforeAfter';
import Profile
  from './pages/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/welcome"
          element={<Welcome />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
        path="/home"
        element={<Home />}
        />

        <Route
        path="/scan"
        element={<SkinTone />}
        />

        <Route
        path="/scan/camera"
        element={<CameraScan />}
        />

        <Route
        path="/scan/analyzing"
        element={<Analyzing />}
        />

        <Route
        path="/scan/result"
        element={<SkinResult />}
        />

        <Route
        path="/scan/outfit"
        element={<OutfitAnalysis />}
        />

        <Route
        path="/outfit/camera"
        element={<OutfitCamera />}
        />

        <Route
        path="/outfit/analyzing"
        element={<OutfitAnalyzing />}
        />

        <Route
        path="/outfit/result"
        element={<OutfitResult />}
        />

        <Route
        path="/recommendations"
        element={<RecommendationProfile />}
        />

        <Route
        path="/recommendations/details"
        element={<RecommendationCategories />}
        />

        <Route
        path="/recommendations/skincare"
        element={<SkincareRecommendation />}
        />

        <Route
        path="/recommendations/skincare/routine"
        element={<SkincareRoutine />}
        />

        <Route
        path="/recommendations/lip-care"
        element={<LipCareRecommendation />}
        />

        <Route
        path="/recommendations/lip-care/routine"
        element={<LipCareRoutine />}
        />

        <Route
        path="/recommendations/outfit-harmony"
        element={<OutfitHarmony />}
        />

        <Route
        path="/recommendations/makeup"
        element={<MakeupRecommendation />}
        />

        <Route
        path="/recommendations/lip-colour"
        element={<LipColourRecommendation />}
        />

        <Route
        path="/recommendations/hair"
        element={<HairRecommendation />}
        />

        <Route
        path="/recommendations/nails"
        element={<NailsRecommendation />}
        />

        <Route
        path="/recommendations/beard"
        element={<BeardRecommendation />}
        />

        <Route
        path="/recommendations/mustache"
        element={<MustacheRecommendation />}
        />

        <Route
        path="/recommendations/before-after"
        element={<BeforeAfter />}
        />

        <Route
        path="/profile"
        element={<Profile />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
