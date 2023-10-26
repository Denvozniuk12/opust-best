import React from "react";
import Menu from "./components/Menu";
import { useContext } from "react";
import {AppContext, Context} from "../../Context";

function MenuSection () {
    const value: AppContext | undefined = useContext(Context);
    return (
        <div className="ant-drawer" tabIndex={-1}>
            {value && (value.showMenu && (<div className={"ant-drawer-mask " + (value.beforeShowMenu ? "ant-drawer-mask-open" : "ant-drawer-mask-close")}></div>))}
            <Menu />
        </div>
    );
}

export default MenuSection;