import React, { useContext, useState, useEffect, useRef } from "react";
import Context from "../../../../Context";
import MenuHead from "../components/MenuHead";
import MenuBody from "../components/MenuBody";
import useScreenResize from "../../../../Hooks/useScreenResize";
import useShowMenu from "./hooks/useShowMenu";

function Menu () {
    const [menuOpen, setMenuOpen] = useState(false);
    const value = useContext(Context);
    const menuRef = useRef(null);
    const { handleScreenWidthResize } = useScreenResize();
    const widthArray = [{screenWidth: 901, elementWidth: 320}];
    const defaultWidth = 500;
    useEffect(() => {
        const currentMenuRef = menuRef.current;
        handleScreenWidthResize(currentMenuRef, widthArray, defaultWidth);
        window.addEventListener('resize', function () { handleScreenWidthResize(currentMenuRef, widthArray, defaultWidth); });
        return () => {
            window.removeEventListener('resize', function () { handleScreenWidthResize(currentMenuRef, widthArray, defaultWidth); });
        };
    }, [menuRef.current]);
    const { isShowMenu } = useShowMenu();

    useEffect(() => {
        isShowMenu(value, setMenuOpen);
    }, [value.showMenu])
    return (
        <div 
          className={"ant-drawer-content-wrapper" + ((!value.showMenu) ? " ant-drawer-content-wrapper-hidden" : "") + ((!value.beforeShowMenu) ? " ant-drawer-content-wrapper-close" : "") + ((menuOpen) ? " ant-drawer-content-wrapper-open" : "")}
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