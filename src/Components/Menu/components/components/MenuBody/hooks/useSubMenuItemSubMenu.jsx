const useSubMenuItemSubMenu = (setSubMenuItemSubMenuArray, setIsAnimatingArrays = null, setSubMenuHiddenArrays = null, setIntermediateSubMenuHiddenArrays = null, setCheckSubMenuArrays = null) => {
    const handlerClickSubMenuItemSubMenu = (el, val) => {
        if(val === false){
            setTimeout(() => {
                setSubMenuItemSubMenuArray(prevState => {
                    return prevState.map((v, i) => {
                        if (el === i) {
                            return val;
                        }
        
                        return v;
                    });
                });
            }, 100);
        }
        else {
            setSubMenuItemSubMenuArray(prevState => {
                return prevState.map((v, i) => {
                    if (el === i) {
                        return val;
                    }
    
                    return v;
                });
            });
        }
    };

    const handlerClickSubMenuItemSubMenuOpen = (index) => {
        setIsAnimatingArrays((prevState) => {
            return prevState.map((v, i) => {
                if(index === i){
                    return true;
                }

                return v;
            });
        });
        setSubMenuHiddenArrays((prevState) => {
            return prevState.map((v, i) => {
                if(index === i){
                    return v === true ? false : v; 
                }

                return v;
            });
        });
        setIntermediateSubMenuHiddenArrays((prevState) => {
            return prevState.map((v, i) => {
                if(index === i){
                    return v === true ? false : v;
                }

                return v;
            });
        });

    }

    const handlerClickSubMenuItemSubMenuClose = (index) => {
        setIsAnimatingArrays((prevState) => {
            return prevState.map((v, i) => {
                if(index === i){
                    return true;
                }

                return v;
            });
        });
        setIntermediateSubMenuHiddenArrays((prevState) => {
            return prevState.map((v, i) => {
                if(index === i){
                    return v === false ? true : v;
                }

                return v;
            });
        });

    }

    const handlerClickCheckSubMenuItemSubMenuOpen = (index) => {
        setCheckSubMenuArrays((prevState) => {
            return prevState.map((v, i) => {
                if(index === i){
                    return v === false ? true : v;
                }

                return v;
            });
        });
        setTimeout(() => {
            setIsAnimatingArrays((prevState) => {
                return prevState.map((v, i) => {
                    if(index === i){
                        return false;
                    }

                    return v;
                });
            });
        }, 250);
    }

    const handlerClickCheckSubMenuItemSubMenuClose = (index) => {
        setCheckSubMenuArrays((prevState) => {
            return prevState.map((v, i) => {
                if(index === i){
                    return v === true ? false : v;
                }

                return v;
            });
        });
        setTimeout(() => {
            setSubMenuHiddenArrays((prevState) => {
                return prevState.map((v, i) => {
                    if(index === i){
                        return v === false ? true : v;
                    }

                    return v;
                });
            });
        }, 150);
        setTimeout(() => {
            setIsAnimatingArrays((prevState) => {
                return prevState.map((v, i) => {
                    if(index === i){
                        return false;
                    }

                    return v;
                });
            });
        }, 160);
    }

    return {
        handlerClickSubMenuItemSubMenu,
        handlerClickSubMenuItemSubMenuOpen,
        handlerClickSubMenuItemSubMenuClose,
        handlerClickCheckSubMenuItemSubMenuOpen,
        handlerClickCheckSubMenuItemSubMenuClose,
    };
}

export default useSubMenuItemSubMenu;