import React from 'react';
import { useContext, useEffect } from 'react';
import Context from '../Context';
import RegistrationPageForm from '../Components/RegistrationPage/RegistrationPageForm';
import imageRegistration from '../Img/RegistrationPage/registration.webp';

function Registration() {
  const value = useContext(Context);
  useEffect(() => {
    value.wrap.current.setAttribute('style', 'background-color: rgb(227, 246, 253)');
    value.closeMenu();
    value.isShowHeaderSearch(false);
  }, []);
  return (
    <div className='wrap flex'>
      <RegistrationPageForm />
      <div className='registration-img-wrap'>
        <img className='registration-img' sizes="(max-width: 767px) 0vw, (min-width: 767px) 50vw" src={imageRegistration} alt="Registration Image" decoding="async" data-nimg="fill" />
      </div>
    </div>
  );
}

export default Registration;
