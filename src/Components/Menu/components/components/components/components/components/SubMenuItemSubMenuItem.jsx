import React from "react";

function SubMenuItemSubMenuItem (props) {
    const {href, itemName, dataMenuId} = props;
    return (
        <li role="menuitem" tabIndex="-1" data-menu-id={"rc-menu-uuid-82823-1-2" + dataMenuId} className="ant-menu-item" style={{paddingLeft: "72px"}}>
            <span className="ant-menu-title-content">
                <a className="ant-menu-title-content-href" href={href}>{itemName}</a>
            </span>
        </li>
    );
}

export default SubMenuItemSubMenuItem;