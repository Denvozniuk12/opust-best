import { AppContext } from "../../../../../Context";

const useMenuClick = () => {
    const menuOpen = (value: AppContext) => value.menu(true);
    return { menuOpen };
}

export default useMenuClick;