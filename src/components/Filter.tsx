import Modal from "../components/Modal";

const Filter = () => {
  return (
    <>
      <Modal title="Filtrer" btnOpen="Filtrer" showModal={true}>
        <div className="modal-cta d-flex justify-content-center gap-1">
          <button>Basse</button>
          <button>Moyenne</button>
          <button>Haute</button>
        </div>
      </Modal>
    </>
  );
};

export default Filter;
