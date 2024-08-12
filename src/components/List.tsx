import { Item } from './Item.tsx';
import { useTodos } from '../context/TodosContext.tsx';
import { Todo } from '../types/Todo.ts';
import { FILTER_TYPE, FILTER } from '../types/Filter.ts';

interface Props {
    filter: FILTER_TYPE;
}

export const List = ({ filter }: Props) => {
    const { todos } = useTodos();

    const filterTodos = (): Todo[] => {
        if (filter === FILTER.ALL) return todos;
        return todos.filter((todo) => (filter === FILTER.OPEN ? !todo.done : todo.done));
    };

    return (
        <div className=" flex w-full flex-col items-start h-96 overflow-scroll">
            {filterTodos()?.map((todo) => <Item key={todo.id} {...todo} />)}
        </div>
    );
};
