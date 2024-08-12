export interface Todo {
    id: string;
    text: string;
    description?: string;
    timeStamp: Date;
    done: boolean;
}

export const ActionType = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    EDIT_TODO: 'EDIT_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO'
} as const;

export type TodosAction =
    | { type: typeof ActionType.ADD_TODO; payload: { text: string; description?: string } }
    | { type: typeof ActionType.REMOVE_TODO; payload: string }
    | { type: typeof ActionType.EDIT_TODO; payload: { id: string; text: string; description: string } }
    | { type: typeof ActionType.TOGGLE_TODO; payload: string };
