import { useMemo } from 'react';

interface Props {
    /** Most recent value last. Rendered left-to-right in the order given. */
    data: number[];
    /** Fixed scale to normalize against (e.g. 100 for a percentage). Falls back to the max value seen. */
    max?: number;
    color?: string;
    width?: number;
    height?: number;
    className?: string;
}

/**
 * A tiny inline SVG line chart with a soft area fill, used to show a short rolling
 * history of a metric (CPU/RAM/disk %) without the weight of a full charting library.
 */
const Sparkline = ({ data, max, color = '#3b82f6', width = 64, height = 20, className }: Props) => {
    const path = useMemo(() => {
        if (data.length < 2) return null;

        const ceiling = max ?? Math.max(...data, 1);
        const stepX = width / (data.length - 1);

        const points = data.map((value, index) => {
            const x = index * stepX;
            const y = height - (Math.min(Math.max(value, 0), ceiling) / ceiling) * height;
            return [x, y];
        });

        const line = points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
        const area = `0,${height} ${line} ${width},${height}`;

        return { line, area };
    }, [data, max, width, height]);

    if (!path) {
        return <div className={className} style={{ width, height }} />;
    }

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            width={width}
            height={height}
            className={className}
            preserveAspectRatio={'none'}
        >
            <polygon points={path.area} fill={color} fillOpacity={0.12} stroke={'none'} />
            <polyline
                points={path.line}
                fill={'none'}
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
            />
        </svg>
    );
};

export default Sparkline;
