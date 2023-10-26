import React from "react";
import { useState, useRef } from "react";
import { MenuData, IMenuItem, ISubMenuItem } from './Data';
import MenuItem from "../components/MenuItem";
import SubMenu from "../components/SubMenu";
import SubMenuItemSubMenu from "../components/components/SubMenuItemSubMenu";
import SubMenuItemSubMenuItem from "../components/components/components/SubMenuItemSubMenuItem";
import SubMenuItem from "../components/components/SubMenuItem";
import useSubMenu from "./hooks/useSubMenu";
import useSubMenuItemSubMenu from "./hooks/useSubMenuItemSubMenu";

function MenuBody () {
    const [subMenu, setSubMenu] = useState<boolean>(true);
    const [subMenuItemSubMenuArray, setSubMenuItemSubMenuArray] = useState<boolean[]>([true, true]);
    const [checkSubMenuArrays, setCheckSubMenuArrays] = useState<boolean[]>([false, false]);
    const [subMenuHiddenArrays, setSubMenuHiddenArrays] = useState<boolean[]>([false, false]);
    const [intermediateSubMenuHiddenArrays, setIntermediateSubMenuHiddenArrays] = useState<boolean[]>([false, false]);
    const [isAnimatingArrays, setIsAnimatingArrays] = useState<boolean[]>([false, false]);
    const subMenuRef1: React.LegacyRef<HTMLUListElement> = useRef(null);
    const subMenuItemSubMenuRef1: React.LegacyRef<HTMLUListElement> = useRef(null);
    const subMenuItemSubMenuRef2: React.LegacyRef<HTMLUListElement> = useRef(null);

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
            <ul className="ant-menu" role="menu" tabIndex={0} data-menu-list="true">
                {
                    MenuData.map((menuItem: IMenuItem) => {
                        if(menuItem.type === 'sub-menu'){
                            return (
                                menuItem.index !== undefined ? (
                                    <SubMenu 
                                    key={menuItem.id}
                                    itemName={menuItem.itemName}
                                    dataMenuId={menuItem.dataMenuId}
                                    isOpenSubMenu={handlerClickSubMenu}
                                    subMenu={menuItem.index === 0 ? subMenu : null}
                                    menuRef={menuItem.index === 0 ? subMenuRef1 : null}
                                    >
                                        {
                                            menuItem.subMenuItems !== undefined ? (
                                                menuItem.subMenuItems.map((subMenuItem: ISubMenuItem) => {
                                                    if(subMenuItem.type === 'sub-menu-item-sub-menu'){
                                                        return (
                                                            subMenuItem.index !== undefined ? (
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
                                                                        subMenuItem.subMenuItemSubMenuItems !== undefined ? (
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
                                                                        ) : undefined
                                                                    }
                                                                </SubMenuItemSubMenu>
                                                            ) : undefined
                                                        );
                                                    }

                                                    return (
                                                        subMenuItem.href !== undefined ? (
                                                            <SubMenuItem 
                                                            key={subMenuItem.id}
                                                            href={subMenuItem.href}
                                                            dataMenuId={subMenuItem.dataMenuId}
                                                            itemName={subMenuItem.itemName}
                                                            />
                                                        ) : undefined
                                                    );
                                                })
                                            ) : undefined
                                        }
                                    </SubMenu>
                                ) : null
                            );
                        }
                        
                        return (
                            menuItem.href !== undefined ? (<MenuItem key={menuItem.id} href={menuItem.href} itemName={menuItem.itemName} dataMenuId={menuItem.dataMenuId} />) : undefined
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default MenuBody;