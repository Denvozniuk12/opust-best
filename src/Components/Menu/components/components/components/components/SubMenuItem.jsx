import React from "react";

function SubMenuItem (props) {
    const {href, dataMenuId, itemName} = props;
    return (
        <li role="menuitem" tabIndex="-1" data-menu-id={"rc-menu-uuid-38938-1-" + dataMenuId} className="ant-menu-item" style={{paddingLeft: "48px"}}>
            <span className="ant-menu-title-content">
                <a className="ant-menu-title-content-href" href={href}>{itemName}</a>
            </span>
        </li>
    );
}

export default SubMenuItem;