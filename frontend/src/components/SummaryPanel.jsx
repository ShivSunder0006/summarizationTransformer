import { useState } from "react";
import axios from "axios";

export default function SummaryPanel({ summary, setSummary }) {
  const [loading, setLoading] = useState(false);

  const fetchSummary = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:8000/summarize/");
    setSummary(res.data.summary);
    setLoading(false);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-2xl">
      <h2 className="text-lg font-bold mb-2">Summary</h2>
      <p>{summary || "Upload a document, then click Summarize."}</p>
      <button
        onClick={fetchSummary}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-xl"
      >
        {loading ? "Summarizing..." : "Summarize All"}
      </button>
    </div>
  );
}
