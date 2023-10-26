import { useContext } from "react";
import { Link } from 'react-router-dom';
import {Context} from '../../../../Context';
import { LanguageSwitcher } from '../../../LanguageSwitcher';
import { menuBtnSvg, registrationBtnSvg, loginBtnSvg, shoppingCartBtnSvg } from '../../../../Img/Header';
import useMenuClick from './hooks/useMenuClick';

function Navigation() {
    const value = useContext(Context);
    const { menuOpen } = useMenuClick();
    return (
        <div className='navigation'>
            <LanguageSwitcher />
            <div className='buttons-auth'>
                <Link to="/registration">
                    <span
                      role='img'
                      aria-label='user-add'
                      className='btn-auth-span btn-auth-registration-span'
                    >
                        {registrationBtnSvg}
                    </span>
                </Link>
                <Link to="/login">
                    <span
                      role='img'
                      aria-label='login'
                      className='btn-auth-span btn-auth-login-span'
                    >
                        {loginBtnSvg}
                    </span>
                </Link>
                <Link className='btn-shopping-cart' to="/">
                    <span className='btn-shopping-cart-span'>
                        <span
                          role='img'
                          aria-label='shopping-cart'
                          className='btn-shopping-cart-img-span'
                        >
                            {shoppingCartBtnSvg}
                        </span>
                        <sup
                          data-show="true"
                          className='btn-shopping-cart-sup'
                          title='1'
                        >
                            <span
                              className='btn-shopping-cart-sup-span'
                              style={{transition: 'none'}}
                            >
                                <span className='btn-shopping-cart-sup-span-span'>1</span>
                            </span>
                        </sup>
                    </span>
                    
                </Link>
            </div>
            <button 
              className='menu-btn'
              onClick={() => {
                if(value) menuOpen(value)
              }}
            >
                <span className='menu-btn-span'>{menuBtnSvg}</span>
            </button>
        </div>
    );
    }

export default Navigation;
