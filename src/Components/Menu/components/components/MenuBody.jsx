import React, { useEffect } from "react";
import { useState, useRef } from "react";
import MenuItem from "./components/MenuItem";
import SubMenu from "./components/SubMenu";
import SubMenuItemSubMenu from "./components/components/SubMenuItemSubMenu";
import SubMenuItemSubMenuItem from "./components/components/components/SubMenuItemSubMenuItem";
import SubMenuItem from "./components/components/SubMenuItem";

function MenuBody () {
    const [subMenu, setSubMenu] = useState(true);
    
    const subMenuItemSubMenuStates = [true, true];
    const [subMenuItemSubMenuArray, setSubMenuItemSubMenuArray] = useState(subMenuItemSubMenuStates);

    //const [subMenuItemSubMenuSt, setSubMenuItemSubMenuSt] = useState([false, false]);
    
    const checkSubMenuStates = [false, false];
    const subMenuHiddenStates = [false, false];
    const intermediateSubMenuHiddenStates = [false, false];
    const isAnimatingStates = [false, false];
    const [checkSubMenuArrays, setCheckSubMenuArrays] = useState(checkSubMenuStates);
    const [subMenuHiddenArrays, setSubMenuHiddenArrays] = useState(subMenuHiddenStates);
    const [intermediateSubMenuHiddenArrays, setIntermediateSubMenuHiddenArrays] = useState(intermediateSubMenuHiddenStates);
    const [isAnimatingArrays, setIsAnimatingArrays] = useState(isAnimatingStates);
    const subMenuRef1 = useRef(null);
    const subMenuItemSubMenuRef1 = useRef(null);
    const subMenuItemSubMenuRef2 = useRef(null);

    const handlerClickSubMenu = (val) => {
        if(val === false){
            
            setTimeout(() => {
                // console.log(subMenuItemSubMenuRef1.current.offsetHeight);
                // console.log(subMenuItemSubMenuArray[0]);
                // console.log(subMenuItemSubMenuRef2.current.offsetHeight);
                // console.log(subMenuItemSubMenuArray[1]);
                setSubMenu(() => val);
                if(subMenuItemSubMenuRef1.current.offsetHeight > 0 && subMenuItemSubMenuRef2.current.offsetHeight > 0) {
                    subMenuRef1.current.style.setProperty('--menu-height', (subMenuRef1.current.offsetHeight - (subMenuItemSubMenuRef1.current.offsetHeight + subMenuItemSubMenuRef2.current.offsetHeight)) + 'px');
                    console.log(subMenuRef1.current);
                }
                else if(subMenuItemSubMenuRef1.current.offsetHeight > 0) {
                    subMenuRef1.current.style.setProperty('--menu-height', (subMenuRef1.current.offsetHeight - subMenuItemSubMenuRef1.current.offsetHeight) + 'px');
                    console.log(subMenuRef1.current);
                }
                else if(subMenuItemSubMenuRef2.current.offsetHeight > 0) {
                    subMenuRef1.current.style.setProperty('--menu-height', (subMenuRef1.current.offsetHeight - subMenuItemSubMenuRef2.current.offsetHeight) + 'px');
                    console.log(subMenuRef1.current);
                }
            }, 100);
            subMenuItemSubMenuArray.map((v, i) => {
                if(v === true){
                    return handlerClickSubMenuItemSubMenu(i, false);
                }
                return v;
            });
        }
        else {
            setSubMenu(() => val);
        }
    }
    
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

    return (
        <div className="ant-drawer-body">
            <ul className="ant-menu" role="menu" tabIndex="0" data-menu-list="true">
                <SubMenu 
                  itemName={"Categories"}
                  isOpenSubMenu={handlerClickSubMenu}
                  subMenu={subMenu}
                  menuRef={subMenuRef1}
                >
                    <SubMenuItemSubMenu
                      index={0}
                      itemName={"Art"}
                      id={12}
                      //height={48}
                      isOpenSubMenuItemSubMenu={handlerClickSubMenuItemSubMenu}
                      subMenuItemSubMenu={subMenuItemSubMenuArray[0]} 
                      subMenuItemSubMenuOpen={handlerClickSubMenuItemSubMenuOpen}
                      subMenuItemSubMenuClose={handlerClickSubMenuItemSubMenuClose}
                      checkSubMenu={checkSubMenuArrays[0]}
                      CheckSubMenuItemSubMenuOpen={handlerClickCheckSubMenuItemSubMenuOpen}
                      CheckSubMenuItemSubMenuClose={handlerClickCheckSubMenuItemSubMenuClose}
                      subMenuHidden={subMenuHiddenArrays[0]}
                      intermediateSubMenuHidden={intermediateSubMenuHiddenArrays[0]}
                      isAnimating={isAnimatingArrays[0]}
                      menuRef={subMenuItemSubMenuRef1}
                    >
                        <SubMenuItemSubMenuItem href={'/'} itemName={"Design"} dataMenuId={23} />
                    </SubMenuItemSubMenu>
                    <SubMenuItem href={"/"} dataMenuId={13} itemName={"Auto Help"} />
                    <SubMenuItem href={"/"} dataMenuId={14} itemName={"Biographies"} />
                    <SubMenuItem href={"/"} dataMenuId={15} itemName={"Comics"} />
                    <SubMenuItem href={"/"} dataMenuId={16} itemName={"Economy"} />
                    <SubMenuItem href={"/"} dataMenuId={17} itemName={"Essay"} />
                    <SubMenuItem href={"/"} dataMenuId={18} itemName={"Investigation"} />
                    <SubMenuItemSubMenu
                      index={1}
                      itemName={"Narrative"}
                      id={19}
                      //height={180}
                      isOpenSubMenuItemSubMenu={handlerClickSubMenuItemSubMenu}
                      subMenuItemSubMenu={subMenuItemSubMenuArray[1]}
                      subMenuItemSubMenuOpen={handlerClickSubMenuItemSubMenuOpen}
                      subMenuItemSubMenuClose={handlerClickSubMenuItemSubMenuClose}
                      checkSubMenu={checkSubMenuArrays[1]}
                      CheckSubMenuItemSubMenuOpen={handlerClickCheckSubMenuItemSubMenuOpen}
                      CheckSubMenuItemSubMenuClose={handlerClickCheckSubMenuItemSubMenuClose}
                      subMenuHidden={subMenuHiddenArrays[1]}
                      intermediateSubMenuHidden={intermediateSubMenuHiddenArrays[1]}
                      isAnimating={isAnimatingArrays[1]}
                      menuRef={subMenuItemSubMenuRef2}
                    >
                        <SubMenuItemSubMenuItem href={'/'} itemName={"Novel"} dataMenuId={24} />
                        <SubMenuItemSubMenuItem href={'/'} itemName={"Poetry"} dataMenuId={25} />
                        <SubMenuItemSubMenuItem href={'/'} itemName={"Stories"} dataMenuId={26} />
                        <SubMenuItemSubMenuItem href={'/'} itemName={"Theatry"} dataMenuId={27} />
                    </SubMenuItemSubMenu>
                    <SubMenuItem href={"/"} dataMenuId={20} itemName={"Psyhology"} />
                    <SubMenuItem href={"/"} dataMenuId={21} itemName={"Philosophy"} />
                    <SubMenuItem href={"/"} dataMenuId={22} itemName={"Sociology"} />
                </SubMenu>

                <MenuItem href={"/"} itemName={"Shop"} dataMenuId={2} />
                <MenuItem href={"/blog"} itemName={"Blog"} dataMenuId={3} />
                <MenuItem href={"/"} itemName={"Cart"} dataMenuId={4} />
                <MenuItem href={"/"} itemName={"Checkout"} dataMenuId={5} />
                <MenuItem href={"/"} itemName={"All Book Categories"} dataMenuId={6} />
                <MenuItem href={"/"} itemName={"All Book Authors"} dataMenuId={7} />
                <MenuItem href={"/"} itemName={"Contact"} dataMenuId={8} />
                <MenuItem href={"/"} itemName={"Sample Page"} dataMenuId={9} />
                <MenuItem href={"/"} itemName={"Privacy Policy"} dataMenuId={10} />
                <MenuItem href={"/"} itemName={"404"} dataMenuId={11} />
            </ul>
        </div>
    );
}

export default MenuBody;