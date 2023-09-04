import React from "react";
import { useContext, useState, useEffect, useRef } from "react";
import Context from "../../../Context";
import MenuHead from "./components/MenuHead";
import MenuBody from "./components/MenuBody";

function Menu () {
    const [menuOpen, setMenuOpen] = useState(false);
    const value = useContext(Context);
    const menuRef = useRef(null);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        function handleResize() {
            if (screenWidth < 901) {
                menuRef.current.style = "width: 320px";
            } else {
                menuRef.current.style = "width: 500px";
            }
        }

        handleResize(); // Call once to set initial value

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        value.showMenu ? setMenuOpen((prevState) => {return prevState === false ? true : prevState}) : 
            setMenuOpen((prevState) => {return prevState === true ? false : prevState});
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