const useShowMenu = () => {
    const isShowMenu = (value, setMenuOpen) =>{
        value.showMenu ? setMenuOpen((prevState) => {return prevState === false ? true : prevState}) : 
        setMenuOpen((prevState) => {return prevState === true ? false : prevState});
    }
    return { isShowMenu };
}

export default useShowMenu;