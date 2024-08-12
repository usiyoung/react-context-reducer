import { Todo, TodosAction } from '../types/Todo.ts';
import { v4 as uuidv4 } from 'uuid';

type TodosState = Todo[];

export const TodosReducer = (state: TodosState, action: TodosAction): TodosState => {
    switch (action.type) {
        case 'ADD_TODO':
            return [{ id: uuidv4(), timeStamp: new Date(), ...action.payload, done: false }, ...state];
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.payload);
        case 'EDIT_TODO':
            const { id, text, description } = action.payload;
            return state.map((todo) => (todo.id === id ? { ...todo, text, description } : todo));
        case 'TOGGLE_TODO':
            return state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));
        default:
            return state;
    }
};
