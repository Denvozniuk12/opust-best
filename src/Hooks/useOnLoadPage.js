export const useOnLoadPage = () => {
    const onLoadSettings = (value, backgroundColor, isShowHeaderSearch) => {
        if(backgroundColor === ''){
            if(value.wrap.current.hasAttribute('style')){
                value.wrap.current.removeAttribute('style');
            }
        }
        else {
            value.wrap.current.setAttribute('style', `background-color: ${backgroundColor}`);
        }
        value.closeMenu();
        value.isShowHeaderSearch(isShowHeaderSearch);
    }
    return { onLoadSettings };
}