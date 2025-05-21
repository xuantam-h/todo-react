import { create } from "zustand";
import { v4 as uuid } from 'uuid';

interface TodoState {
  toDo: {
    id: number;
    name: string;
    priority: string;
    isCompleted: boolean;
  }[],
}

interface TodoActions {
  addTodo: (todoName: string, priority: string) => void;
  deleteTodo: (todoId: number) => void;
  clearTodo: () => void;
  completeTodo: (todoId: number) => void;
}

const useTodoStore = create<TodoState & TodoActions>((set) => ({
  toDo: [
    { id: 0, name: "Contacter Xuan-Tam", priority: "Haute", isCompleted: false },
    { id: 1, name: "Faire le ménage", priority: "Basse", isCompleted: false },
    { id: 2, name: "Apprendre React", priority: "Moyenne", isCompleted: false },
    { id: 3, name: "Manger une poutine à la Banquise", priority: "Haute", isCompleted: false },
    { id: 4, name: "Préparer le repas", priority: "Basse", isCompleted: false },
    { id: 5, name: "Sortir les poubelles", priority: "Basse", isCompleted: false },
    { id: 6, name: "Faire les courses", priority: "Moyenne", isCompleted: false },
    { id: 7, name: "Acheter un ticket de cinéma", priority: "Moyenne", isCompleted: false },
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
  editTodo: (todoId) =>
      set((state) => ({
      toDo: state.toDo.filter((todoItem) => todoItem.id !== todoId),
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
}));

export default useTodoStore;
