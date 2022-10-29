import React from "react";
import Header from "./Components/Header";
import TodoMain from "./Components/TodoMain";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <div id='appContainer'>
      <Header />
      <TodoMain />
      <Footer />
    </div>
  );
}

export default App;
