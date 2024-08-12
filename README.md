# State Management with Context API and useReducer
This project utilizes React’s `Context API` combined with the `useReducer` hook to manage the state of a to-do list application. Here’s a simplified overview of the implementation

<p>
<img src="https://github.com/user-attachments/assets/07ccbef3-8982-46e6-bbe6-385365d883d2" width="500"/>
<img src="https://github.com/user-attachments/assets/e3fcc33d-efd7-4b34-88b7-c51754cf4c0e" width="500"/>
</p>


## Project Structure

```plaintext
src/
├── components/       
├── hooks/           
├── context/         # Context API setup
├── reducer/         # Reducer logic for managing to-do states and Drawer states
├── types/            
├── App.tsx
```     

### 1. TodosReducer for State Management
We use a TodosReducer to handle various actions such as adding, removing, editing, and toggling to-do items.

```typescript
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
```

### 2. Creating a Context with useReducer
The TodosContext is created to provide global state management for the to-do list. The state is initialized from local storage, and updates are persisted


```typescript 
interface TodosContextProps {
    todos: Todo[];
    dispatch: Dispatch<TodosAction>;
}

const TodosContext = createContext<TodosContextProps>({ todos: [], dispatch: () => null });

export function TodosProvider({ children }: { children: ReactNode }) {
    const [todos, dispatch] = useReducer(TodosReducer, []);

    return <TodosContext.Provider value={{ todos, dispatch }}>{children}</TodosContext.Provider>;
}

export const useTodos = () => useContext(TodosContext);
```

### 3. Using the Context in Components
To update the state within your components, simply call the dispatch function with the appropriate action type and payload

```typescript
import { useTodos } from '../context/TodosContext.ts';

export const Todos = () => {
    const { todos, dispatch } = useTodos();

    const onUpdate = () => {
        dispatch(...);
    };

    return (
        <div>{todos?.map((todo) => <Item key={todo.id} {...todo} onClick={onUpdate}/>)}</div>
    );
};

```
