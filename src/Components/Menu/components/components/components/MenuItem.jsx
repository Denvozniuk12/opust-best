import React from "react";
import { Link } from 'react-router-dom';

function MenuItem (props) {
    const { href, itemName, dataMenuId } = props;
    return (
        <li className="ant-menu-item" role="menuitem" tabIndex="-1" style={{paddingLeft: "24px"}} data-menu-id={"rc-menu-uuid-38938-1-" + dataMenuId}>
            <span className="ant-menu-title-content">
                <Link className="ant-menu-title-content-href" to={href}>{itemName}</Link>
            </span>
        </li>
    );
}

export default MenuItem;