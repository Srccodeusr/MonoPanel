import classNames from 'classnames';

interface Props {
    className?: string;
    /** Number of stacked lines to render when no explicit height is given via className. */
    lines?: number;
}

/**
 * A lightweight shimmering placeholder used while content streams in, in place of a
 * centered spinner. Pass a `className` with explicit sizing (e.g. `h-4 w-32`) for a
 * single block, or use `lines` to stack a few full-width text-line placeholders.
 */
const Skeleton = ({ className, lines }: Props) => {
    if (lines && lines > 0) {
        return (
            <div className={'flex flex-col gap-2 w-full'}>
                {Array.from({ length: lines }).map((_, index) => (
                    <div
                        key={index}
                        className={classNames(
                            'h-3 rounded-md bg-white/5 animate-pulse',
                            index === lines - 1 ? 'w-2/3' : 'w-full',
                        )}
                    />
                ))}
            </div>
        );
    }

    return <div className={classNames('rounded-md bg-white/5 animate-pulse', className)} />;
};

export default Skeleton;
