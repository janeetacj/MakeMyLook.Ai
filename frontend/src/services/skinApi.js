const API_BASE_URL = "http://127.0.0.1:8000/api";

export async function analyzeSkinImage(imageFile) {
  if (!imageFile) {
    throw new Error("No image file was provided.");
  }

  const formData = new FormData();
  formData.append("file", imageFile);

  const response = await fetch(`${API_BASE_URL}/skin/analyze`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.detail || "Skin analysis request failed."
    );
  }

  return data;
}