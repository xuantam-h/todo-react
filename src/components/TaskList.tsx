import Task from "../components/Task";
import useTodoStore from "../store/useTodoStore";

const TaskList = () => {
  // Retrieve list of To-do with Zustand store
  const todoZustand = useTodoStore((state) => state.toDo);

  // Sorting array depending on priority value
  const priorityOrder = { Haute: 1, Moyenne: 2, Basse: 3 };
  const sortTask = [...todoZustand].sort((a, b) => {
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
  return (
    <ul className="todo-list">
      {sortTask.map((singleToDo) => (
        <Task key={singleToDo.id} taskInfo={singleToDo} />
      ))}
    </ul>
  );
};

export default TaskList;
