import React from "react";
import { useState, useRef } from "react";
import { MenuData } from './Data';
import MenuItem from "../components/MenuItem";
import SubMenu from "../components/SubMenu";
import SubMenuItemSubMenu from "../components/components/SubMenuItemSubMenu";
import SubMenuItemSubMenuItem from "../components/components/components/SubMenuItemSubMenuItem";
import SubMenuItem from "../components/components/SubMenuItem";
import useSubMenu from "./hooks/useSubMenu";
import useSubMenuItemSubMenu from "./hooks/useSubMenuItemSubMenu";

function MenuBody () {
    const [subMenu, setSubMenu] = useState(true);
    
    const subMenuItemSubMenuStates = [true, true];
    const [subMenuItemSubMenuArray, setSubMenuItemSubMenuArray] = useState(subMenuItemSubMenuStates);
    
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

    const { handlerClickSubMenu } = useSubMenu(setSubMenu, subMenuItemSubMenuRef1, subMenuItemSubMenuRef2, subMenuRef1, subMenuItemSubMenuArray, setSubMenuItemSubMenuArray);
    const {
         handlerClickSubMenuItemSubMenu,
         handlerClickSubMenuItemSubMenuOpen,
         handlerClickSubMenuItemSubMenuClose,
         handlerClickCheckSubMenuItemSubMenuOpen,
         handlerClickCheckSubMenuItemSubMenuClose
    } = useSubMenuItemSubMenu(setSubMenuItemSubMenuArray, setIsAnimatingArrays, setSubMenuHiddenArrays, setIntermediateSubMenuHiddenArrays, setCheckSubMenuArrays);
    
    return (
        <div className="ant-drawer-body">
            <ul className="ant-menu" role="menu" tabIndex="0" data-menu-list="true">
                {
                    MenuData.map((menuItem) => {
                        if(menuItem.type === 'sub-menu'){
                            return (
                                <SubMenu 
                                  key={menuItem.id}
                                  itemName={menuItem.itemName}
                                  dataMenuId={menuItem.dataMenuId}
                                  isOpenSubMenu={handlerClickSubMenu}
                                  subMenu={menuItem.index === 0 ? subMenu : null}
                                  menuRef={menuItem.index === 0 ? subMenuRef1 : null}
                                >
                                    {
                                        menuItem.subMenuItems.map((subMenuItem) => {
                                            if(subMenuItem.type === 'sub-menu-item-sub-menu'){
                                                return (
                                                    <SubMenuItemSubMenu
                                                      key={subMenuItem.id}
                                                      index={subMenuItem.index}
                                                      itemName={subMenuItem.itemName}
                                                      dataMenuId={subMenuItem.dataMenuId}
                                                      isOpenSubMenuItemSubMenu={handlerClickSubMenuItemSubMenu}
                                                      subMenuItemSubMenu={subMenuItemSubMenuArray[subMenuItem.index]} 
                                                      subMenuItemSubMenuOpen={handlerClickSubMenuItemSubMenuOpen}
                                                      subMenuItemSubMenuClose={handlerClickSubMenuItemSubMenuClose}
                                                      checkSubMenu={checkSubMenuArrays[subMenuItem.index]}
                                                      CheckSubMenuItemSubMenuOpen={handlerClickCheckSubMenuItemSubMenuOpen}
                                                      CheckSubMenuItemSubMenuClose={handlerClickCheckSubMenuItemSubMenuClose}
                                                      subMenuHidden={subMenuHiddenArrays[subMenuItem.index]}
                                                      intermediateSubMenuHidden={intermediateSubMenuHiddenArrays[subMenuItem.index]}
                                                      isAnimating={isAnimatingArrays[subMenuItem.index]}
                                                      menuRef={subMenuItem.index === 0 ? subMenuItemSubMenuRef1 : subMenuItemSubMenuRef2}
                                                    >
                                                        {
                                                            subMenuItem.subMenuItemSubMenuItems.map((subMenuItemSubMenuItem) => {
                                                                return (
                                                                    <SubMenuItemSubMenuItem 
                                                                      key={subMenuItemSubMenuItem.id}
                                                                      href={subMenuItemSubMenuItem.href}
                                                                      itemName={subMenuItemSubMenuItem.itemName}
                                                                      dataMenuId={subMenuItemSubMenuItem.dataMenuId}
                                                                    />
                                                                );
                                                            })
                                                        }
                                                    </SubMenuItemSubMenu>
                                                );
                                            }

                                            return (
                                                <SubMenuItem 
                                                  key={subMenuItem.id}
                                                  href={subMenuItem.href}
                                                  dataMenuId={subMenuItem.dataMenuId}
                                                  itemName={subMenuItem.itemName}
                                                />
                                            );
                                        })
                                    }
                                </SubMenu>
                            );
                        }
                        
                        return <MenuItem key={menuItem.id} href={menuItem.href} itemName={menuItem.itemName} dataMenuId={menuItem.dataMenuId} />;
                    })
                }
            </ul>
        </div>
    );
}

export default MenuBody;