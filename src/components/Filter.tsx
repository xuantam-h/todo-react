import Modal from "../components/Modal";
import useTodoStore from "../store/useTodoStore";

const Filter = () => {
  // Retrieve list of To-do with Zustand store
  const todoZustand = useTodoStore((state) => state.toDo);

  // Retrieve filter action with Zustand store
  const filterTodo = useTodoStore((state) => state.filterTodo);

  const handleFilter = (priority) => {
    filterTodo(priority);
  }

  return (
    <>
      <Modal title="Filtrer" btnOpen="Filtrer">
        <div className="modal-cta d-flex justify-content-center gap-1">
          <button onClick={() => handleFilter("Basse")}>Basse</button>
          <button onClick={() => handleFilter("Moyenne")}>Moyenne</button>
          <button onClick={() => handleFilter("Haute")}>Haute</button>
        </div>
      </Modal>
    </>
  );
};

export default Filter;
