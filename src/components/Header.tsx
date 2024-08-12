import { useMemo } from 'react';

export const Header = () => {
    const date: Date = useMemo(() => new Date(), []);
    return (
        <div className="flex w-full flex-row items-start justify-between">
            <div className="flex m-0 max-w-xs flex-col gap-y-2">
                <dd className="order-first text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
                    Today's Task
                </dd>
                <dt className="text-xs font-semibold text-neutral-400 leading-3 mb-3 dark:text-slate-400">
                    {date.toLocaleDateString()}
                </dt>
            </div>
        </div>
    );
};
