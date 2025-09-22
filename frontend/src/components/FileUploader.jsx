import { useState } from "react";
import { uploadFile } from "../api/api";

export default function FileUploader({ onUploadComplete }) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    await uploadFile(file);
    setLoading(false);
    onUploadComplete();
  };

  return (
    <div className="p-4 border-2 border-dashed rounded-2xl text-center">
      <input type="file" onChange={handleUpload} className="hidden" id="file" />
      <label
        htmlFor="file"
        className="cursor-pointer text-blue-500 hover:underline"
      >
        {loading ? "Uploading..." : "Click to Upload PDF"}
      </label>
    </div>
  );
}
