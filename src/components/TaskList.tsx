import Collapse from "../components/Collapse";
import Task from "../components/Task";
import useTodoStore from "../store/useTodoStore";

const TaskList = () => {
  // Retrieve list of To-do with Zustand store
  const todoZustand = useTodoStore((state) => state.toDo);
  const filteredToDo = useTodoStore((state) => state.filteredToDo);
  const completeToDoList = useTodoStore((state) => state.completeToDoList);

  // Sorting array depending on priority value
  const priorityOrder = { Haute: 1, Moyenne: 2, Basse: 3 };

  // Use filteredToDo if not empty, otherwise use todoZustand
  const tasksToDisplay =
    filteredToDo && filteredToDo.length > 0 ? filteredToDo : todoZustand;

  const sortTask = [...tasksToDisplay].sort((a, b) => {
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
  
  return (
    <>
      <Collapse title="À faire" count={sortTask.length}>
        <ul className="todo-list">
          {sortTask?.map((singleToDo) => (
            <Task key={singleToDo.id} taskInfo={singleToDo} />
        ))}
        </ul>
      </Collapse>
      <Collapse title="Terminées" count={completeToDoList.length}>
        <ul className="todo-list">
          {completeToDoList?.map((singleToDo) => (
            <Task key={singleToDo.id} taskInfo={singleToDo} />
        ))}
        </ul>
      </Collapse>
    </>
  );
};

export default TaskList;