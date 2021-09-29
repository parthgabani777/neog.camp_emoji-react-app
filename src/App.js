import "./styles.css";
import { useState } from "react";

function App() {
  let [emojiName, setEmojiName] = useState();
  let emojiList = {
    "🍇": "Grapes",
    "🍈": "Melon",
    "🍉": "Watermelon",
    "🍊": "Tangerine",
    "🍋": "Lemon",
    "🍍": "Pineapple",
    "🥭": "Mango",
    "🍎": "Red Apple",
    "🍓": "Strawberry",
    "🍐": "Pear"
  };

  function handeleChange(e) {
    if (emojiList[e] === undefined) {
      setEmojiName("Not exist in list");
    } else {
      setEmojiName(emojiList[e]);
    }
  }

  const emojiXml = Object.keys(emojiList).map((key) => {
    return (
      <li onClick={(e) => handeleChange(e.target.innerHTML)} key={key}>
        {key}
      </li>
    );
  });

  return (
    <div className="App">
      <h1>Fruit EmojiPedia</h1>
      <input type="text" onInput={(e) => handeleChange(e.target.value)} />
      <h3>{emojiName}</h3>
      <ul>{emojiXml}</ul>
    </div>
  );
}

export default App;
