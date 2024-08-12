import { Todo } from '../types/Todo.ts';

export const mockTodos: Todo[] = [
    {
        id: '1',
        text: 'Finish React project 🚚',
        description: 'Complete the final tasks for the React project by the end of the week.',
        timeStamp: new Date(),
        done: false
    },
    {
        id: '2',
        text: 'Write blog post !',
        description: 'Draft and publish the next blog post on state management in React.',
        timeStamp: new Date(),
        done: false
    },
    {
        id: '3',
        text: 'Grocery shopping 🐷',
        description: 'Buy groceries for the week: milk, eggs, bread, and fruits.',
        timeStamp: new Date(),
        done: false
    }
];
