const useSubMenuItemSubMenu = (setSubMenuItemSubMenuArray: React.Dispatch<React.SetStateAction<boolean[]>>, setIsAnimatingArrays?: React.Dispatch<React.SetStateAction<boolean[]>>,
     setSubMenuHiddenArrays?: React.Dispatch<React.SetStateAction<boolean[]>>, setIntermediateSubMenuHiddenArrays?: React.Dispatch<React.SetStateAction<boolean[]>>, setCheckSubMenuArrays?: React.Dispatch<React.SetStateAction<boolean[]>>) => {
    const handlerClickSubMenuItemSubMenu = (el: number, val: boolean) => {
        if(val === false){
            setTimeout(() => {
                setSubMenuItemSubMenuArray((prevState: boolean[]) => {
                    return prevState.map((v: boolean, i: number) => {
                        if (el === i) {
                            return val;
                        }
        
                        return v;
                    });
                });
            }, 100);
        }
        else {
            setSubMenuItemSubMenuArray((prevState: boolean[]) => {
                return prevState.map((v: boolean, i: number) => {
                    if (el === i) {
                        return val;
                    }
    
                    return v;
                });
            });
        }
    };

    const handlerClickSubMenuItemSubMenuOpen = (index: number) => {
        if(setIsAnimatingArrays){
            setIsAnimatingArrays((prevState: boolean[]) => {
                return prevState.map((v: boolean, i: number) => {
                    if(index === i){
                        return true;
                    }

                    return v;
                });
            });
        }
        if(setSubMenuHiddenArrays){
            setSubMenuHiddenArrays((prevState: boolean[]) => {
                return prevState.map((v: boolean, i: number) => {
                    if(index === i){
                        return v === true ? false : v; 
                    }
    
                    return v;
                });
            });
        }
        if(setIntermediateSubMenuHiddenArrays){
            setIntermediateSubMenuHiddenArrays((prevState: boolean[]) => {
                return prevState.map((v: boolean, i: number) => {
                    if(index === i){
                        return v === true ? false : v;
                    }
    
                    return v;
                });
            });
        }
    }

    const handlerClickSubMenuItemSubMenuClose = (index: number) => {
        if(setIsAnimatingArrays){
            setIsAnimatingArrays((prevState: boolean[]) => {
                return prevState.map((v: boolean, i: number) => {
                    if(index === i){
                        return true;
                    }
    
                    return v;
                });
            });
        }
        if(setIntermediateSubMenuHiddenArrays){
            setIntermediateSubMenuHiddenArrays((prevState: boolean[]) => {
                return prevState.map((v: boolean, i: number) => {
                    if(index === i){
                        return v === false ? true : v;
                    }
    
                    return v;
                });
            });
        }
    }

    const handlerClickCheckSubMenuItemSubMenuOpen = (index: number) => {
        if(setCheckSubMenuArrays){
            setCheckSubMenuArrays((prevState: boolean[]) => {
                return prevState.map((v: boolean, i: number) => {
                    if(index === i){
                        return v === false ? true : v;
                    }
    
                    return v;
                });
            });
        }
        setTimeout(() => {
            if(setIsAnimatingArrays){
                setIsAnimatingArrays((prevState: boolean[]) => {
                    return prevState.map((v: boolean, i: number) => {
                        if(index === i){
                            return false;
                        }
    
                        return v;
                    });
                });
            }
        }, 250);
    }

    const handlerClickCheckSubMenuItemSubMenuClose = (index: number) => {
        if(setCheckSubMenuArrays){
            setCheckSubMenuArrays((prevState: boolean[]) => {
                return prevState.map((v: boolean, i: number) => {
                    if(index === i){
                        return v === true ? false : v;
                    }
    
                    return v;
                });
            });
        }
        setTimeout(() => {
            if(setSubMenuHiddenArrays){
                setSubMenuHiddenArrays((prevState: boolean[]) => {
                    return prevState.map((v: boolean, i: number) => {
                        if(index === i){
                            return v === false ? true : v;
                        }
    
                        return v;
                    });
                });
            }
        }, 150);
        setTimeout(() => {
            if(setIsAnimatingArrays){
                setIsAnimatingArrays((prevState: boolean[]) => {
                    return prevState.map((v: boolean, i: number) => {
                        if(index === i){
                            return false;
                        }
    
                        return v;
                    });
                });
            }
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