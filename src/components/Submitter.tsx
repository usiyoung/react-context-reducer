import { useState, FormEvent } from 'react';
import { useTodos } from '../context/TodosContext.tsx';
import { Input } from './Input.tsx';
import { ActionType } from '../types/Todo.ts';
import { Button } from 'antd';

export const Submitter = () => {
    const { dispatch } = useTodos();
    const [value, setValue] = useState('');

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value.trim()) return;
        dispatch({ type: ActionType.ADD_TODO, payload: { text: value } });
        setValue('');
    };

    return (
        <form onSubmit={onSubmit} className="w-full flex gap-1 items-center mt-6">
            <Input className="size-10" value={value} onChange={setValue} />
            <Button htmlType="submit" size="large">
                submit
            </Button>
        </form>
    );
};
