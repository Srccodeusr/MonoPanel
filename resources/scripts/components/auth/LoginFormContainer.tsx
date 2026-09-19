import { forwardRef, useEffect, useState } from 'react';
import * as React from 'react';
import { Form } from 'formik';
import styled from 'styled-components';
import { breakpoint } from '@/assets/theme';
import FlashMessageRender from '@/elements/FlashMessageRender';
import tw from 'twin.macro';

type Props = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    title?: string;
};

const Container = styled.div<{ isVisible: boolean }>`
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: opacity 0.5s ease-in;

    ${breakpoint('sm')`
        ${tw`w-4/5 mx-auto`}
    `};

    ${breakpoint('md')`
        ${tw`p-10`}
    `};

    ${breakpoint('lg')`
        ${tw`w-3/5`}
    `};

    ${breakpoint('xl')`
        ${tw`w-full my-auto`}
    `};
`;

/** Fills the second half of the split-screen layout on large displays. Purely decorative. */
const BrandPanel = () => (
    <div css={tw`hidden 2xl:flex flex-col items-start justify-center border-l border-white/5 pl-16`}>
        <div css={tw`flex items-center gap-x-3`}>
            <div css={tw`w-9 h-9 rounded-lg bg-primary-500/10 ring-1 ring-primary-500/20 flex items-center justify-center`}>
                <div css={tw`w-3.5 h-3.5 rounded-sm bg-primary-400`} />
            </div>
            <span css={tw`font-header font-semibold text-xl text-neutral-100 tracking-tight`}>MonoNode</span>
        </div>
        <p css={tw`mt-4 max-w-xs text-sm text-neutral-400 leading-relaxed`}>
            Manage your servers from a panel built to feel fast, quiet, and out of your way.
        </p>
    </div>
);

export default forwardRef<HTMLFormElement, Props>(({ title, ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 50);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <Container isVisible={visible}>
            <div className={'w-full grid 2xl:grid-cols-2 2xl:gap-16 items-center'}>
                <div className={'w-full lg:w-1/2 lg:mx-auto'}>
                    {title && (
                        <h2 css={tw`text-3xl text-center text-neutral-100 font-semibold tracking-tight py-4`}>
                            {title}
                        </h2>
                    )}
                    <FlashMessageRender css={tw`mb-2 px-1`} />
                    <Form {...props} ref={ref}>
                        <div css={tw`w-full bg-white/[0.03] ring-1 ring-white/10 backdrop-blur-sm rounded-xl p-6 mx-1`}>
                            <div css={tw`flex-1`}>{props.children}</div>
                        </div>
                    </Form>
                    <p css={tw`text-center text-neutral-400 text-xs mt-4`}>
                        &copy; {new Date().getFullYear()}&nbsp;MonoNode
                    </p>
                </div>
                <BrandPanel />
            </div>
        </Container>
    );
});
