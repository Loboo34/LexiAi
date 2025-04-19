"use client";
import { useState } from "react";

export default function SummarizeTest() {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch("/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });
    const data = await res.json();
    setSummary(data.summary);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="flex flex-col  w-[600px] h-[120px] border border-gray-300 bg-grey-600 shadow-lg rounded-2xl p-4">
        {/* Input Box */}
        <input
          type="text"
          placeholder="Type your prompt..."
          className="w-full h-[70px] px-4 pt-1 pb-2 pr-1 text-lg text-gray-100  rounded shadow-sm focus:outline-none  "
        
          value={input}
          onChange={(e) => setInput(e.target.value)}
         
         
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Summarizing..." : "Summarize"}
      </button>
      {summary && (
        <div className="mt-4 border p-4 rounded bg-gray-50">
          <h2 className="font-bold">Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
