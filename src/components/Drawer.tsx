import { Button, Drawer as AntdDrawer, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useDrawer } from '../context/DrawerContext.tsx';
import { useTodos } from '../context/TodosContext.tsx';
import { Todo, ActionType } from '../types/Todo.ts';
import { ActionType as DrawerActionType } from '../types/Drawer.ts';
import { TextArea } from './TextArea.tsx';
import { Input } from './Input.tsx';

export const Drawer = () => {
    const { drawer, toggleDrawer } = useDrawer();
    const { todos, dispatch } = useTodos();
    const [data, setData] = useState<Todo>();

    useEffect(() => {
        const selectedTodo = todos.find((todo) => todo.id === drawer.id);
        setData(selectedTodo);
    }, [drawer.id]);

    const onClose = () => {
        toggleDrawer({ type: DrawerActionType.CLOSE_DRAWER });
    };

    const onSubmit = () => {
        if (data) {
            const { id, text, description } = data as Todo;
            dispatch({ type: ActionType.EDIT_TODO, payload: { id, text, description: description as string } });
            onClose();
        }
    };

    const handleInputChange = (key: keyof Todo, value: string) => {
        setData((prevData) => (prevData ? { ...prevData, [key]: value } : undefined));
    };

    return (
        <AntdDrawer
            title="Edit Page"
            placement="bottom"
            closable={false}
            onClose={onClose}
            open={drawer.open}
            getContainer={false}
            extra={
                <Space>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary" onClick={onSubmit}>
                        OK
                    </Button>
                </Space>
            }
        >
            <span>title:</span>
            <Input value={data?.text || ''} onChange={(value) => handleInputChange('text', value)} className="mb-3" />

            <span>description:</span>
            <TextArea value={data?.description || ''} onChange={(value) => handleInputChange('description', value)} />
        </AntdDrawer>
    );
};
