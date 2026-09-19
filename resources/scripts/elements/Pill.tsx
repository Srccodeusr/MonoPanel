import { ReactNode } from 'react';
import classNames from 'classnames';

export type PillSize = 'normal' | 'large' | 'small' | 'xsmall';
export type PillStatus = 'success' | 'info' | 'warn' | 'danger' | 'unknown';

function getColor(type?: PillStatus): string {
    let value = 'bg-white/5 text-gray-300 ring-white/10';

    switch (type) {
        case 'success':
            value = 'bg-emerald-500/10 text-emerald-400 ring-emerald-500/20';
            break;
        case 'info':
            value = 'bg-blue-500/10 text-blue-400 ring-blue-500/20';
            break;
        case 'warn':
            value = 'bg-amber-500/10 text-amber-400 ring-amber-500/20';
            break;
        case 'danger':
            value = 'bg-red-500/10 text-red-400 ring-red-500/20';
            break;
        case 'unknown':
            value = 'bg-white/5 text-gray-400 ring-white/10';
            break;
        default:
            break;
    }

    return value;
}

export default ({ type, size, children }: { type?: PillStatus; size?: PillSize; children: ReactNode }) => (
    <span
        className={classNames(
            getColor(type),
            !size && 'text-xs px-2.5 py-0.5 rounded-full',
            size === 'large' && 'px-6 py-4 rounded-xl w-full',
            size === 'small' && 'text-sm px-3 py-0.5 rounded-full',
            size === 'xsmall' && 'text-2xs px-1 rounded-full',
            'relative mx-1 inline-flex items-center leading-5 font-medium capitalize ring-1 ring-inset backdrop-blur-sm transition-colors duration-150',
        )}
    >
        {children}
    </span>
);
