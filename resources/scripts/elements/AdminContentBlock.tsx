import type { ReactNode } from 'react';
import { useEffect } from 'react';
import tw from 'twin.macro';
import FlashMessageRender from '@/elements/FlashMessageRender';

const AdminContentBlock: React.FC<{
    children: ReactNode;
    title?: string;
    showFlashKey?: string;
}> = ({ children, title, showFlashKey }) => {
    useEffect(() => {
        if (!title) return;
        document.title = `Admin | ${title}`;
    }, [title]);

    return (
        <>
            {showFlashKey && <FlashMessageRender byKey={showFlashKey} css={tw`mb-4`} />}
            {children}
            <p css={tw`text-center text-neutral-500 text-xs mt-4 mb-8`}>
                &copy; {new Date().getFullYear()}&nbsp;
                <span css={tw`text-neutral-400`}>MonoNode</span>
            </p>
        </>
    );
};

export default AdminContentBlock;
