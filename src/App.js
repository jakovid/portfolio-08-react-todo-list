import React from "react";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import ProjectList from "./Components/ProjectList";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <div id='todoContainer'>
      <Header />
      <div id='todoBody'>
          <ProjectList />
          <TodoList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
