import Modal from "../components/Modal";

const Filter = () => {
  return (
    <>
      <Modal title="Filtrer" btnOpen="Filtrer">
        <button>Basse</button>
        <button>Moyenne</button>
        <button>Haute</button>
      </Modal>
    </>
  );
};

export default Filter;
