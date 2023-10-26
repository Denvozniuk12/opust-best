import { AppContext } from "../../../../../../Context";

const useClickMenu = (value: AppContext | undefined) => {
    const handlerClick = () => {
        value && value.menu(false);
    };
    return { handlerClick };
}

export default useClickMenu;