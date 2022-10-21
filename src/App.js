import React from "react";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import TodoMenu from "./Components/TodoMenu";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <div id='todoContainer'>
      <Header />
      <div id='todoBody'>
          <TodoMenu />
          <TodoList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
