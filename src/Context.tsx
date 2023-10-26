import { createContext } from "react";

export type AppContext = {
    showMenu: boolean;
    beforeShowMenu: boolean;
    showHeaderSearch: boolean;
    menu: (val: boolean) => void;
    closeMenu: () => void;
    isShowHeaderSearch: (val: boolean) => void;
    wrap: React.RefObject<HTMLDivElement | null>;
    firstSetMenuItems: boolean;
    settingInitialMenuItemsFinish: () => void;
}

export const Context = createContext<AppContext | undefined>(undefined);
