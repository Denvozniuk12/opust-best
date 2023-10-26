import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import UsernameField from './components/UsernameField';
import EmailField from './components/EmailField';
import PasswordField from './components/PasswordField';
import SubmitButton from './components/SubmitButton';
import useSubmit from './hooks/useSubmit';

function RegistrationPageForm() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { handleSubmit } = useSubmit(email, setEmailError, t, password, setPasswordError);

    return (
        <div className='registration-form-wrap'>
            <div className='registration-form-body'>
                <h1 className='h1 registration-page-h1'>{t('Register')}</h1>
                <hr className='my-6 border-black' />
                <form onSubmit={handleSubmit} className='registration-form'>
                    <UsernameField />
                    <EmailField
                      email={email}
                      setEmail={setEmail}
                      emailError={emailError}
                      setEmailError={setEmailError}
                      t={t}
                    />
                    <PasswordField 
                      password={password}
                      setPassword={setPassword}
                      passwordError={passwordError}
                      setPasswordError={setPasswordError}
                      t={t}
                    />
                    <SubmitButton 
                      t={t}
                    />
                </form>
            </div>
        </div>
    );
}

export default RegistrationPageForm;
