import React, { useContext, useState, useRef } from "react";
import {AppContext, Context} from "../../../../Context";
import MenuHead from "../components/MenuHead";
import MenuBody from "../components/MenuBody";
import { widthArray, defaultWidth } from "./Data";
import useScreenResize from "../../../../Hooks/useScreenResize";
import useShowMenu from "./hooks/useShowMenu";
import useMenuSettings from "./hooks/useMenuSettings";

function Menu () {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const value: AppContext | undefined = useContext(Context);
    const menuRef = useRef<HTMLDivElement>(null);
    const { handleScreenWidthResize } = useScreenResize();
    const { isShowMenu } = useShowMenu();

    useMenuSettings(menuRef, handleScreenWidthResize, widthArray, defaultWidth, isShowMenu, value, setMenuOpen)

    return (
        <div 
          className={"ant-drawer-content-wrapper" + (value && ((!value.showMenu) ? " ant-drawer-content-wrapper-hidden" : "")) + (value && ((!value.beforeShowMenu) ? " ant-drawer-content-wrapper-close" : "")) + ((menuOpen) ? " ant-drawer-content-wrapper-open" : "")}
          ref={menuRef}
        >
            <div className="ant-drawer-content" aria-modal="true" role="dialog" style={{backgroundColor: "rgb(241, 90, 36)"}}>
                <div className="ant-drawer-wrapper-body">
                    <MenuHead />
                    <MenuBody />
                </div>
            </div>
        </div>
    );
}

export default Menu;