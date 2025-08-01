import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuid } from 'uuid';

interface TodoState {
  toDo: {
    id: string;
    name: string;
    priority: string;
    isCompleted: boolean;
  }[];
    filteredToDo: {
    id: string;
    name: string;
    priority: string;
    isCompleted: boolean;
  }[];
    completeToDoList: {
    id: string;
    name: string;
    priority: string;
    isCompleted: boolean;
  }[];
}

interface TodoActions {
  addTodo: (todoName: string, priority: string) => void;
  deleteTodo: (todoId: string) => void;
  clearTodo: () => void;
  completeTodo: (todoId: string) => void;
  filterTodo: (priority: string) => void;
  editTodo: (todoId: string, newName: string) => void;
}

const useTodoStore = create<TodoState & TodoActions>()(
  persist(
    (set) => ({
      toDo: [
        { id: "0", name: "Contacter Xuan-Tam", priority: "Haute", isCompleted: false },
        { id: "1", name: "Faire le ménage", priority: "Basse", isCompleted: false },
        { id: "2", name: "Apprendre React", priority: "Moyenne", isCompleted: false },
        { id: "3", name: "Manger une poutine à la Banquise", priority: "Haute", isCompleted: false },
        { id: "4", name: "Préparer le repas", priority: "Basse", isCompleted: false },
        { id: "5", name: "Sortir les poubelles", priority: "Basse", isCompleted: false },
        { id: "6", name: "Faire les courses", priority: "Moyenne", isCompleted: false },
        { id: "7", name: "Acheter un ticket de cinéma", priority: "Moyenne", isCompleted: false },
      ],
      filteredToDo: [],
      completeToDoList:  [
        { id: "9", name: "Tâche complétée", priority: "Haute", isCompleted: true },
        { id: "10", name: "Tâche complétée 2", priority: "Moyenne", isCompleted: true },
      ],
      addTodo: (todoName, priority) =>
        set((state) => ({
          toDo: [
            ...state.toDo,
            {
              id: uuid(),
              name: todoName,
              priority: priority,
              isCompleted: false,
            },
          ],
        })),
      deleteTodo: (todoId) =>
        set((state) => ({
          toDo: state.toDo.filter((todoItem) => todoItem.id !== todoId),
        })),
      editTodo: (todoId, newName) =>
        set((state) => ({
          toDo: state.toDo.map((todo) =>
            todo.id === todoId
              ? { ...todo, name: newName }
              : todo
          ),
        })),
      filterTodo: (priority) =>
        set((state) => ({
          filteredToDo: [...state.toDo.filter((todoItem) => todoItem.priority === priority)]
        })),
      clearTodo: () => set(() => ({ toDo: [] })),
      completeTodo: (todoId) =>
        set((state) => ({
          toDo: state.toDo.map((todo) =>
            todo.id === todoId
              ? { ...todo, isCompleted: true }
              : todo
          ),
        })),
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
    }
  )
);

export default useTodoStore;