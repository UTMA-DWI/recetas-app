import { useState } from "react";

function LetterSelector({ onSelect }) {
  const [selectedLetter, setSelectedLetter] = useState("a");

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    onSelect(letter);
  };

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="flex w-64 flex-wrap justify-center">
      {alphabet.map((letter) => (
        <>
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            className={`mx-2 font-bold uppercase ${
              letter === selectedLetter ? "font-extrabold text-primary" : ""
            }`}
          >
            {letter}
          </button>
          {letter !== "z" && "|"}
        </>
      ))}
      <p>You selected: {selectedLetter}</p>
    </div>
  );
}

export default LetterSelector;
