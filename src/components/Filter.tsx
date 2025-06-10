import Modal from "../components/Modal";
import useTodoStore from "../store/useTodoStore";

const Filter = () => {
  // Retrieve list of To-do with Zustand store
  const todoZustand = useTodoStore((state) => state.toDo);

  const handleFilter = () => {
    const filteredTodo = todoZustand.filter(todo => todo.priority === "Moyenne");
    console.log(filteredTodo);
    
    
  }

  return (
    <>
      <Modal title="Filtrer" btnOpen="Filtrer" showModal={true}>
        <div className="modal-cta d-flex justify-content-center gap-1">
          <button onClick={handleFilter}>Basse</button>
          <button onClick={handleFilter}>Moyenne</button>
          <button onClick={handleFilter}>Haute</button>
        </div>
      </Modal>
    </>
  );
};

export default Filter;
