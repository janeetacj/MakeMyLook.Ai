const API_BASE_URL = "http://127.0.0.1:8000/api";

export async function analyzeOutfitImage(imageFile) {
  if (!imageFile) {
    throw new Error("No outfit image file was provided.");
  }

  const formData = new FormData();
  formData.append("file", imageFile);

  const response = await fetch(`${API_BASE_URL}/outfit/analyze`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.detail || "Outfit analysis request failed."
    );
  }

  return data;
}