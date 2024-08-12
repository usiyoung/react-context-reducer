import { useMemo, MouseEvent } from 'react';
import { useTodos } from '../context/TodosContext.tsx';
import { Card, Typography } from 'antd';
import { CheckCircleFilled, DeleteOutlined } from '@ant-design/icons';
import { useDrawer } from '../context/DrawerContext.tsx';
import { Todo, ActionType } from '../types/Todo.ts';
import { ActionType as DrawerActionType } from '../types/Drawer.ts';

const { Text } = Typography;

export const Item = ({ id, text, done, description, timeStamp }: Todo) => {
    const { dispatch } = useTodos();
    const { toggleDrawer } = useDrawer();

    const onDrawer = () => {
        toggleDrawer({ type: DrawerActionType.OPEN_DRAWER, payload: id });
    };

    const onUpdate = (event: MouseEvent<HTMLSpanElement>) => {
        event.stopPropagation();
        dispatch({ type: ActionType.TOGGLE_TODO, payload: id });
    };

    const onDelete = (event: MouseEvent<HTMLSpanElement>) => {
        event.stopPropagation();
        dispatch({ type: ActionType.REMOVE_TODO, payload: id });
    };

    const date = useMemo(() => (timeStamp instanceof Date ? timeStamp : new Date(timeStamp)), []);

    const Title = () => {
        return (
            <Text delete={done} className="font-sans font-semibold dark:text-slate-400">
                {done}
                {text}
            </Text>
        );
    };

    const CheckButton = () => {
        return (
            <span onClick={onUpdate}>
                <CheckCircleFilled
                    className={`${done ? 'text-soft-blue' : 'text-mediumGray'} cursor-pointer text-2xl`}
                />
            </span>
        );
    };

    const ActionButton = () => {
        return (
            <span className="cursor-pointer text-mediumGray hover:text-gray" onClick={onDelete}>
                <DeleteOutlined />
            </span>
        );
    };

    return (
        <Card
            onClick={onDrawer}
            bordered={false}
            className="flex flex-col w-full mb-4 cursor-pointer"
            title={
                <div className="flex justify-between">
                    <div>
                        <Title />
                        <p className="font-semibold text-xs text-gray">{description ?? '-'}</p>
                    </div>
                    <CheckButton />
                </div>
            }
        >
            <div className="flex justify-between items-center">
                <span className="font-sans font-extralight text-xs">{date.toLocaleDateString()}</span>
                <ActionButton />
            </div>
        </Card>
    );
};
