function showImage(src) {
  const preview = document.getElementById("previewContainer");
  const previewImage = document.getElementById("previewImage");
  previewImage.src = src;
  preview.style.display = "flex";
}

function closePreview() {
  document.getElementById("previewContainer").style.display = "none";
}
