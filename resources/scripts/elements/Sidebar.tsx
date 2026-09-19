import tw, { css, styled } from 'twin.macro';

import { SiteTheme } from '@/state/theme';
import { useStoreState } from '@/state/hooks';
import React from 'react';
import { withSubComponents } from '@/lib/helpers';

const Icon: React.FC<{ icon: React.ElementType }> = ({ icon: Icon }) => {
    const theme = useStoreState(s => s.theme.data!);

    return <Icon color={theme.colors.primary} />;
};

const Wrapper = styled.div<{ theme: SiteTheme; $admin?: boolean }>`
    ${tw`w-full flex flex-col px-4`};

    & > a {
        ${tw`w-full flex flex-row items-center text-neutral-400 cursor-pointer select-none px-4 rounded-lg`};
        ${tw`hover:text-neutral-50 hover:bg-white/5`};
        height: ${({ $admin }) => ($admin ? '2.5rem' : '2.75rem')};
        ${tw`transition-colors duration-150`};

        & > svg {
            ${tw`h-5 w-5 flex flex-shrink-0`};
        }

        & > span {
            ${tw`font-header font-medium text-sm whitespace-nowrap leading-none ml-3`};
        }

        &:active,
        &.active {
            ${tw`bg-primary-500/10 ring-1 ring-primary-500/15`};
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

const Section = styled.div`
    ${tw`h-[18px] font-header font-medium text-xs text-neutral-500 whitespace-nowrap uppercase ml-4 mb-1 select-none`};

    &:not(:first-of-type) {
        ${tw`mt-4`};
    }
`;

const User = styled.div`
    ${tw`h-16 w-full flex items-center bg-black/25 justify-center border-b border-white/5`};
`;

const Sidebar = styled.div<{ $collapsed?: boolean; theme: SiteTheme }>`
    ${tw`hidden md:flex h-screen flex-col items-center flex-shrink-0 overflow-x-hidden ease-linear`};
    ${tw`transition-all duration-300 border-r border-white/5`};
    ${tw`w-[15rem]`};

    background-color: ${({ theme }) => theme.colors.sidebar};

    & > a,
    & > span > a {
        ${tw`h-10 w-full flex flex-row items-center text-neutral-400 cursor-pointer select-none px-8`};
        ${tw`hover:text-neutral-50 transition-colors duration-150`};

        & > svg {
            ${tw`h-5 w-5 flex flex-shrink-0`};
        }

        & > span {
            ${tw`font-header font-medium text-sm whitespace-nowrap leading-none ml-3`};
        }
    }

    ${props =>
        props.$collapsed &&
        css`
            ${tw`w-20`};

            ${Section} {
                ${tw`invisible`};
            }

            ${Wrapper} {
                ${tw`px-5`};

                & > a {
                    ${tw`justify-center px-0`};
                }
            }

            & > a {
                ${tw`justify-center px-4`};
            }

            & > a > span,
            ${User} > div,
            ${User} > a,
            ${Wrapper} > a > span {
                ${tw`hidden`};
            }
        `};
`;

export default withSubComponents(Sidebar, { Section, Wrapper, User, Icon });
