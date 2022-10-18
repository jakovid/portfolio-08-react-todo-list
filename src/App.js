import React from "react";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <TodoList />
      <input type='text' />
      <Footer />
    </div>
  );
}

export default App;
