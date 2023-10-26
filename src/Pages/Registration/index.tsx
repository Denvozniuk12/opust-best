import React, { useContext, useEffect } from 'react';
import { IPageProps } from '../../types/data';
import {Context} from '../../Context';
import RegistrationPageForm from '../../Components/RegistrationPage/RegistrationPageForm';
import { imageRegistration } from '../../Img/RegistrationPage';
import { useOnLoadPage } from '../../Hooks/useOnLoadPage';


const Registration: React.FC<IPageProps> = ({ title }) => {
  document.title = title;
  const value = useContext(Context);
  const { onLoadSettings } = useOnLoadPage();

  useEffect(() => {
    if(value){
      onLoadSettings(value, 'rgb(227, 246, 253)', false);
    }
  }, []);

  return (
    <div className='wrap flex'>
      <RegistrationPageForm />
      <div className='registration-img-wrap'>
        <img
          className='registration-img'
          sizes="(max-width: 767px) 0vw, (min-width: 767px) 50vw"
          src={imageRegistration}
          alt="Registration"
          decoding="async"
          data-nimg="fill"
        />
      </div>
    </div>
  );
};

export default Registration;
