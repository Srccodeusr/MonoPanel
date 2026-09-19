import { ElementType, ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useStoreState } from '@/state/hooks';
import { HomeIcon } from '@heroicons/react/outline';
import { withSubComponents } from '@/lib/helpers';

const MobileSidebar = ({ children }: { children: ReactNode[] }) => {
    return (
        <div
            className={
                'block md:hidden w-full fixed bottom-0 h-16 z-50 bg-black/70 backdrop-blur-lg border-t border-white/10'
            }
        >
            <div className={'flex h-full px-8 space-x-8 overflow-x-auto'}>{children}</div>
        </div>
    );
};

const Link = ({
    icon: Icon,
    text,
    linkTo,
    end,
}: {
    icon: ElementType;
    text?: string;
    linkTo: string;
    end?: boolean;
}) => {
    const [active, setActive] = useState<boolean>(false);
    const { colors } = useStoreState(s => s.theme.data!);

    return (
        <NavLink
            to={linkTo}
            end={end}
            className={({ isActive }) =>
                `h-full flex items-center justify-center font-medium transition-colors duration-150 ${
                    isActive ? setActive(true) : setActive(false)
                }`
            }
            style={{ color: active ? colors.primary : '' }}
        >
            {Icon && <Icon className={'w-4 h-4 mr-2'} />}
            {text}
        </NavLink>
    );
};

const Home = () => {
    const { colors } = useStoreState(s => s.theme.data!);
    return (
        <>
            <NavLink to={'/'}>
                <div className={'h-full flex items-center justify-center font-medium my-auto'}>
                    <HomeIcon className={'w-5 h-5'} style={{ color: colors.primary }} />
                </div>
            </NavLink>
            <div className={'mx-3 my-auto text-neutral-600'}>&bull;</div>
        </>
    );
};

export default withSubComponents(MobileSidebar, { Link, Home });
