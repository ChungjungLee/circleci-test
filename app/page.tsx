"use client";

import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState("Initial text");

  const handleClick = () => {
    setText("Button clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>
        Click here
      </button>
      <p>
        {text}
      </p>
    </div>
  );
}