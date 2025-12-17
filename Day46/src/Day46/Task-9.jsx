import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        placeholder="Start typing..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        cols={40}
      />

      <p>Characters: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;
