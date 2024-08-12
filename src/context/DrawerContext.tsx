import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import { DrawerReducer } from '../reducer/DrawerReducer.ts';
import { Drawer, DrawerActions } from '../types/Drawer.ts';

interface DrawerContextProps {
    drawer: Drawer;
    toggleDrawer: Dispatch<DrawerActions>;
}

const initialState: Drawer = {
    open: false,
    id: null
};

const DrawerContext = createContext<DrawerContextProps>({ drawer: initialState, toggleDrawer: () => null });

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
    const [drawer, toggleDrawer] = useReducer(DrawerReducer, initialState);

    return <DrawerContext.Provider value={{ drawer, toggleDrawer }}> {children} </DrawerContext.Provider>;
};

export const useDrawer = () => useContext(DrawerContext);
