import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    // formData.append("folder", "your-folder-name"); // Replace with your actual folder name

    try {
      const response = await axios.post(
        "https://test.campuspal.iccflifeskills.com.ng/api/v1/media",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer 62|Z7V7hIyfVbFpfKrBytf8fZjEzz7NepXTcQryRTZR`,
          },
        }
      );

      if (response.status === 200) {
        setUploadStatus("File uploaded successfully");
        console.log("Upload response:", response.data);
      } else {
        setUploadStatus("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Upload failed");
    }
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default ImageUpload;
