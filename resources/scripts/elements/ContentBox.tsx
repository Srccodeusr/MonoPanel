import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import tw from 'twin.macro';

import FlashMessageRender from '@/elements/FlashMessageRender';
import SpinnerOverlay from '@/elements/SpinnerOverlay';
import { useStoreState } from '@/state/hooks';

type Props = Readonly<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        title?: string;
        borderColor?: string;
        showFlashes?: string | boolean;
        showLoadingOverlay?: boolean;
    }
>;

const ContentBox = ({ title, borderColor, showFlashes, showLoadingOverlay, children, ...props }: Props) => {
    const { secondary } = useStoreState(state => state.theme.data!.colors);

    return (
        <div {...props}>
            {title && <h2 css={tw`text-neutral-300 mb-4 px-4 text-2xl font-header`}>{title}</h2>}
            {showFlashes && (
                <FlashMessageRender byKey={typeof showFlashes === 'string' ? showFlashes : undefined} css={tw`mb-4`} />
            )}
            <div
                style={{ backgroundColor: secondary }}
                css={[
                    tw`p-4 rounded-xl ring-1 ring-white/5 relative transition-colors duration-150`,
                    !!borderColor && tw`border-t-2`,
                ]}
            >
                <SpinnerOverlay visible={showLoadingOverlay || false} />
                {children}
            </div>
        </div>
    );
};

export default ContentBox;
