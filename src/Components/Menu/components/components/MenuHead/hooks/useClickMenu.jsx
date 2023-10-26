const useClickMenu = (value) => {
    const handlerClick = () => {
        value.menu(false);
    };
    return { handlerClick };
}

export default useClickMenu;