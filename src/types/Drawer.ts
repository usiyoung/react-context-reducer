export interface Drawer {
    open: boolean;
    id: string | null;
}

export const ActionType = {
    OPEN_DRAWER: 'OPEN_DRAWER',
    CLOSE_DRAWER: 'CLOSE_DRAWER'
} as const;

export type DrawerActions =
    | { type: typeof ActionType.OPEN_DRAWER; payload: string }
    | { type: typeof ActionType.CLOSE_DRAWER };
