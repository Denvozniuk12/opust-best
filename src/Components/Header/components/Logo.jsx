import React from 'react';
import {imageHeaderLogo} from '../../../Img/Header';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link className='logo-href' to="/">
        <img
            id='header-logo'
            src={imageHeaderLogo}
            alt="Company-logo"
            className='logo' />
    </Link>
  );
}

export default Logo;