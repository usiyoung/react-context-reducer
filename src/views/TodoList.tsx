import { Submitter } from '../components/Submitter.tsx';
import { TodosProvider } from '../context/TodosContext';
import { Header } from '../components/Header.tsx';
import { Tabs } from '../components/Tabs.tsx';
import { Drawer } from '../components/Drawer.tsx';
import { DrawerProvider } from '../context/DrawerContext.tsx';
import { FILTER, FILTER_TYPE } from '../types/Filter.ts';
import { List } from '../components/List.tsx';

export const TodoList = () => {
    const filterList: FILTER_TYPE[] = Object.keys(FILTER) as FILTER_TYPE[];

    const items = filterList.map((filter, i) => {
        return {
            label: filter.toUpperCase(),
            key: i.toString(),
            children: <List filter={filter} />
        };
    });

    return (
        <TodosProvider>
            <div className="relative bg-neutral-50 dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-96 flex flex-col items-center justify-center">
                <Header />
                <DrawerProvider>
                    <Tabs items={items} />
                    <Submitter />
                    <Drawer />
                </DrawerProvider>
            </div>
        </TodosProvider>
    );
};
