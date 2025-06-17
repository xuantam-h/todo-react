import AddForm from "./components/AddForm";
import ClearTask from "./components/ClearTask";
import Collapse from "./components/Collapse";
import Filter from "./components/Filter";
import TaskList from "./components/TaskList";
import Header from "./layouts/Header";
import "./styles.css";

export default function App() {

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
