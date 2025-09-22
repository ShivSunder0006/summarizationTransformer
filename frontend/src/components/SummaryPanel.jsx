export default function SummaryPanel({ summary }) {
  return (
    <div className="p-4 bg-gray-100 rounded-2xl">
      <h2 className="text-lg font-bold mb-2">Summary</h2>
      <p>{summary || "Upload a document to see its summary."}</p>
    </div>
  );
}
