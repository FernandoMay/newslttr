import React, { useState } from 'react';
import axios from 'axios';

const NewsletterUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      await axios.post('http://localhost:8000/api/upload-newsletter', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Display success message or perform any additional actions
    } catch (error) {
      console.error('Error uploading newsletter:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload Newsletter</button>
    </div>
  );
};

export default NewsletterUpload;
