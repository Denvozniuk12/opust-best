import React from 'react';
import { useContext, useEffect } from 'react';
import Context from '../../Context';
import LoginPageBody from '../../Components/LoginPage/LoginPageBody';
import { imageLogin } from '../../Img/LoginPage';
import { useOnLoadPage } from '../../Hooks/useOnLoadPage';

function Login(props) {
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
        <img className='login-img' sizes="(max-width: 767px) 0vw, (min-width: 767px) 50vw" src={imageLogin} alt="Login" decoding="async" data-nimg="fill" />
      </div>
      <LoginPageBody />
    </div>
  );
}

export default Login;
