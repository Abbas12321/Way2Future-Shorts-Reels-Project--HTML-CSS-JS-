import React from "https://esm.run/react@18";
import { createRoot } from "https://esm.run/react-dom@18/client";
import confetti from "https://esm.run/canvas-confetti@1";

function App() {
  function onClick() {
    confetti({
      particleCount: 150,
      spread: 60
    });
  }

  return (
    <button className="button" onClick={onClick}>
      <span>🎉</span>
      <span>Like</span>
    </button>
  );
}

createRoot(document.getElementById("root")).render(<App />);



// Abbas Shaikh