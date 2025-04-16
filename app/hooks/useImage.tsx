import { useState } from "react";
export default function useImage(){
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = async (e, setFormData) => {
    const imageFile = e.target.files[0];
    const url = `https://api.imgbb.com/1/upload?key=d442578007c809df9db2bc11bd9acff7&image=${imageFile.name}`;
    const data = new FormData();
    data.append("image", imageFile);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: data,
      });

      const responseData = await response.json();
      const uploadedUrl = responseData.data.url;

      setImageUrl(uploadedUrl);
      setFormData(prev => ({
        ...prev,
        imagen: uploadedUrl,
      }));
    } catch (err) {
      console.error(err);
      setError(err);
  };

  return {
    handleFileChange,
    imageUrl,
    error,
  };
}; 
}

