import { useState } from "react";

const ImageUploadForm = () => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Image File:", image);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Upload an Image</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="imageUpload">Select an Image:</label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "block", marginTop: "5px" }}
            />
          </div>
          {previewUrl && (
            <div style={{ marginBottom: "15px" }}>
              <img
                src={previewUrl}
                alt="Preview"
                style={{ width: "100%", borderRadius: "5px" }}
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          style={{
            background: "#007BFF",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ImageUploadForm;
