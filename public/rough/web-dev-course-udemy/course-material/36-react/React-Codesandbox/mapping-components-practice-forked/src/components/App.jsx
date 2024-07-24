import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

const newEmoji = emojipedia.map((emoji) => {
  return emoji.meaning.substring(0, 100);
});

console.log(newEmoji);

function createEntry(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEntry)}
    </div>
  );
}

export default App;
