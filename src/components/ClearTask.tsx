import Modal from "../components/Modal";
import useTodoStore from "../store/useTodoStore";

const ClearTask = () => {
  const clearTask = useTodoStore((state) => state.clearTodo);
  return (
    <Modal title="Êtes-vous sûr de vider la liste ?" btnOpen="Effacer la liste" showModal={true}>
      <div className="modal-cta d-flex justify-content-center gap-1">
        <button onClick={clearTask}>Confirmer</button>
        <button>Annuler</button>
      </div>
    </Modal>
  );
};

export default ClearTask;
