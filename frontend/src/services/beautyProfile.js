export function buildBeautyProfile(analysisResult, userProfile = {}) {
  const analysis = analysisResult?.analysis;

  return {
    gender: userProfile.gender || null,
    stylePreference: userProfile.stylePreference || null,
    hairType: userProfile.hairType || null,
    hairLength: userProfile.hairLength || null,
    skinConcern: userProfile.skinConcern || null,

    skinTone: analysis?.skin_tone || null,
    skinType: analysis?.skin_type || null,
    concerns: analysis?.concerns || [],

    confidence: analysis?.confidence ?? null,
    confidenceLevel: analysis?.confidence_level || 'low',
    isConfident: analysis?.is_confident || false,

    analysisVersion: analysis?.analysis_version || null,
    analysisEngine: analysis?.analysis_engine || null,
  };
}