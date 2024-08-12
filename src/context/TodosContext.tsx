import { createContext, useReducer, ReactNode, Dispatch, useEffect, useContext } from 'react';
import { TodosReducer } from '../reducer/TodosReducer.ts';
import { Todo, TodosAction } from '../types/Todo.ts';
import { useLocalStorage } from '../hooks/useLocalStorage.ts';
import { mockTodos } from '../mock/todo.ts';
const STORAGE_KEY = 'todos';

interface TodosContextProps {
    todos: Todo[];
    dispatch: Dispatch<TodosAction>;
}

const TodosContext = createContext<TodosContextProps>({ todos: [], dispatch: () => null });

export function TodosProvider({ children }: { children: ReactNode }) {
    const [storedValue, setLocalStorage] = useLocalStorage(STORAGE_KEY, mockTodos);
    const [todos, dispatch] = useReducer(TodosReducer, storedValue);

    useEffect(() => {
        setLocalStorage(todos as []);
    }, [todos]);

    return <TodosContext.Provider value={{ todos: storedValue, dispatch }}>{children}</TodosContext.Provider>;
}

export const useTodos = () => useContext(TodosContext);
