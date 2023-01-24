import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import TodoDemo from "./components/TodoDemo";

function App() {
  return (
    <div className="App">
      <Counter />
      <Decrement />
      <Increment />
      <TodoDemo />
    </div>
  );
}

export default App;
