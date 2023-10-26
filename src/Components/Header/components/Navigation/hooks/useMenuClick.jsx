const useMenuClick = () => {
    const menuOpen = (value) => value.menu(true);
    return { menuOpen };
}

export default useMenuClick;