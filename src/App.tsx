import { useState, useEffect } from "react";
import AddForm from "./components/AddForm";
import ClearTask from "./components/ClearTask";
import Filter from "./components/Filter";
import TaskList from "./components/TaskList";
import Header from "./layouts/Header";
import "./styles.css";
import useTodoStore from "./store/useTodoStore";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Retrieve list of To-do with Zustand store
  const todoZustand = useTodoStore((state) => state.toDo);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1>Ta Do-Do list</h1>
        <div className="todo-cta">
          <AddForm />
          <Filter />
          <ClearTask />
        </div>
        <TaskList />
      </div>
    </div>
  );
}
