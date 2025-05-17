import Badge from "../components/Badge";
import useTodoStore from "../store/useTodoStore";

const Task = ({ taskInfo }) => {
  // Retrieve deleteTodo from Zustand store (useTodoStore)
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  
  const handleEdit = () => {
    console.log(taskInfo.name + " " + taskInfo.id);
  }

  return (
    <li className="todo-item" key={taskInfo.id}>
      <div className="todo-info">
        <Badge name={taskInfo.priority} />
        {taskInfo.name}
      </div>
      <div className="todo-btn">
        <button id="complete-btn" className="btn btn-success">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12.6111L8.92308 17.5L20 6.5"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button id="edit-btn" className="btn" onClick={handleEdit}>
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 0L16 3L9 10H6V7L13 0Z" fill="#000000" />
            <path d="M1 1V15H15V9H13V13H3V3H7V1H1Z" fill="#000000" />
          </svg>
        </button>
        <button
          id="delete-btn"
          className="btn"
          onClick={() => deleteTodo(taskInfo.id)}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 2H1V4H15V2H12V0H4V2Z" fill="#000000" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 6H13V16H3V6ZM7 9H9V13H7V9Z"
              fill="#000000"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default Task;
