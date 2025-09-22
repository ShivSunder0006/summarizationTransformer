import { useState } from "react";
import FileUploader from "./components/FileUploader";
import ChatWindow from "./components/ChatWindow";
import SummaryPanel from "./components/SummaryPanel";

export default function App() {
  const [summary, setSummary] = useState("");

  const handleUploadComplete = () => {
    setSummary("Document processed. Start asking questions!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 grid gap-6 md:grid-cols-3">
      <div className="md:col-span-1">
        <FileUploader onUploadComplete={handleUploadComplete} />
        <SummaryPanel summary={summary} />
      </div>
      <div className="md:col-span-2">
        <ChatWindow />
      </div>
    </div>
  );
}
