import { Drawer, DrawerActions } from '../types/Drawer.ts';

type DrawerState = Drawer;

export const DrawerReducer = (state: DrawerState, action: DrawerActions): DrawerState => {
    switch (action.type) {
        case 'OPEN_DRAWER':
            return { ...state, open: true, id: action.payload };
        case 'CLOSE_DRAWER':
            return { ...state, open: false, id: null };
        default:
            return state;
    }
};
