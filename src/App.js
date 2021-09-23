import { useState } from "react";
import "./styles.css";
// var a = 0;

export default function App() {
  var [event, setevent] = useState("Meaning Will Appear Here ");

  emojipedia = {
    "🥝": " This is 🥝 Kiwi",
    "🥥": " This is 🥥 Coconut",
    "🍇": " This is 🍇 grapes",
    "🍈": " This is 🍈 melon",
    "🍉": " This is 🍉 Watermelon",
    "🍊": " This is 🍊 Orange",
    "🍋": " This is 🍋 Lemon",
    "🍌": " This is 🍌 Banana",
    "🍍": " This is 🍍 Pineapple",
    "🥭": " This is 🥭 Mango",
    "🍎": " This is 🍎 Apple",
    "🍏": " This is 🍏 Green Apple",
    "🍐": " This is 🍐 Papaya",
    "🍑": " This is 🍑 Peach",
    "🍒": " This is 🍒 Cherry",
    "🍓": " This is 🍓 Strawberry"
  };

  list = Object.keys(emojipedia);

  function changeEventhandler(event) {
    console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = emojipedia[userInput];
    if (emojipedia[userInput] === undefined) {
      meaning =
        "Sorry, We don't have any relevant Information about this fruit in our database";
    }
    setevent(meaning);
  }
  function clickHandler(item) {
    var meaning = emojipedia[item];
    setevent(meaning);
  }

  return (
    <div className="App">
      <h1>
        Welcome to the Fruit <span style={{ fontSize: "3rem" }}>🍍🍒🍉</span>
        Interpreter{" "}
      </h1>
      <input onChange={changeEventhandler}></input>

      <div style={{ marginTop: "2rem", fontSize: "2rem" }}>
        <span style={{ marginBottom: "2rem", color: "Green" }}>{event}</span>
      </div>
      <h2 style={{}}>Fruits In Our Database</h2>
      {list.map((item) => {
        return (
          <span
            onClick={() => clickHandler(item)}
            style={{
              fontSize: "2.5rem",
              padding: ".9rem .5rem",
              cursor: "pointer"
            }}
            key={item}
          >
            {" "}
            {item}
          </span>
        );
      })}
    </div>
  );
}
