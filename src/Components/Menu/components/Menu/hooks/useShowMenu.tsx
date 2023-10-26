import { AppContext } from "../../../../../Context";

const useShowMenu = () => {
    const isShowMenu = (value: AppContext, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>) =>{
        value.showMenu ? setMenuOpen((prevState) => {return prevState === false ? true : prevState}) : 
        setMenuOpen((prevState) => {return prevState === true ? false : prevState});
    }
    return { isShowMenu };
}

export default useShowMenu;