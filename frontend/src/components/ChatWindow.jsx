import { useState } from "react";
import { askQuestion } from "../api/api";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    const response = await askQuestion(input);
    const botMessage = { sender: "bot", text: response.data.answer };
    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full border rounded-2xl p-4">
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-xl max-w-xs ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-l-xl p-2"
          placeholder="Ask a question..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 rounded-r-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}
