export const FILTER = {
    ALL: 'ALL',
    OPEN: 'OPEN',
    CLOSED: 'CLOSED'
} as const;

export type FILTER_TYPE = keyof typeof FILTER;
