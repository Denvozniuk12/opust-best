import React from 'react';
import { useContext, useEffect } from 'react';
import Context from '../../Context';
import RegistrationPageForm from '../../Components/RegistrationPage/RegistrationPageForm';
import { imageRegistration } from '../../Img/RegistrationPage';
import { useOnLoadPage } from '../../Hooks/useOnLoadPage';

function Registration(props) {
  const { title } = props;
  document.title = title;

  const value = useContext(Context);
  const { onLoadSettings } = useOnLoadPage();

  useEffect(() => {
    onLoadSettings(value, 'rgb(227, 246, 253)', false);
  }, []);
  
  return (
    <div className='wrap flex'>
      <RegistrationPageForm />
      <div className='registration-img-wrap'>
        <img className='registration-img' sizes="(max-width: 767px) 0vw, (min-width: 767px) 50vw" src={imageRegistration} alt="Registration" decoding="async" data-nimg="fill" />
      </div>
    </div>
  );
}

export default Registration;
