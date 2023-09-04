import React from 'react';
import { useContext, useEffect } from 'react';
import Context from '../Context';
import LostPasswordPageBody from '../Components/LostPasswordPage/LostPasswordPageBody';
import imageLogin from '../Img/LoginPage/login.webp';

function LostPassword() {
  const value = useContext(Context);
    useEffect(() => {
      value.wrap.current.setAttribute('style', 'background-color: rgb(217, 214, 222)');
      value.closeMenu();
      value.isShowHeaderSearch(false);
    }, []);
  return (
    <div className='wrap flex'>
      <div className='login-img-wrap'>
        <img className='login-img' sizes="(max-width: 767px) 0vw, (min-width: 767px) 50vw" src={imageLogin} alt="Login Image" decoding="async" data-nimg="fill" />
      </div>
      <LostPasswordPageBody />
    </div>
  );
}

export default LostPassword;
