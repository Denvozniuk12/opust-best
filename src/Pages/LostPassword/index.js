import React from 'react';
import { useContext, useEffect } from 'react';
import Context from '../../Context';
import LostPasswordPageBody from '../../Components/LostPasswordPage/LostPasswordPageBody';
import imageLogin from '../../Img/LoginPage/login.webp';
import { useOnLoadPage } from '../../Hooks/useOnLoadPage';

function LostPassword(props) {
  const { title } = props;
  document.title = title;
  
  const value = useContext(Context);
  const { onLoadSettings } = useOnLoadPage();

  useEffect(() => {
    onLoadSettings(value, 'rgb(217, 214, 222)', false);
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
