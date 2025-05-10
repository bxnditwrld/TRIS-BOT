import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [response, setResponse] = useState("");
  const [input, setInput] = useState("");

  const askTris = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Tris BOT</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
        style={{ width: "60%" }}
      />
      <button onClick={askTris}>Ask</button>
      <p><strong>Tris:</strong> {response}</p>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
