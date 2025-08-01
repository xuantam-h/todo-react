import { useState } from "react";
import Modal from "../components/Modal";
import Input from "../components/Input";
import useTodoStore from "../store/useTodoStore";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("Basse");
  const [error, setError] = useState("");

  // Retrieve addTodo from Zustand store (useTodoStore)
  const addTodo = useTodoStore((state) => state.addTodo);

  // Check if the input fields are empty before submitting the form
  const checkFields = () => {
    if(title.trim() === ""){
      alert("Empty field !");
    }else{
      addTodo(title, selectedPriority);
    }
  }

  // Reset the input fields after submitting the form
  const clearFields = () => {
    const inputField = document.getElementById("input-name") as HTMLInputElement;
    if (inputField) inputField.value = "";
    setTitle("");
    setSelectedPriority("Basse");
  };

  return (
    <>
      <Modal
        title="Ajouter une tâche"
        btnClass="btn-primary"
        btnOpen="Ajouter une tâche"
      >
        <Input
          id="input-name"
          label="Intitulé de la tâche"
          type="text"
          placeholder="(Ex : Promener le chien)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="input-wrapper">
          <p className="input-label">Priorité</p>
          <select
            name="todo-priority"
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
          >
            <option value="Basse">Basse</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Haute">Haute</option>
          </select>
        </div>
        <div className="modal-cta d-flex justify-content-center gap-1">
          <button
            onClick={() => {
              checkFields();
              clearFields();
            }}
            className="d-flex btn-primary"
          >
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Ajouter
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AddForm;
