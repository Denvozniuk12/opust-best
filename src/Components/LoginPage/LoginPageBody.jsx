import React from "react";
import { useTranslation } from 'react-i18next';

import LoginPageForm from "./LoginPageForm";

function LoginPageBody() {
    const { t } = useTranslation();
    return (
        <div className='login-form-wrap'>
            <div className='login-form-body'>
                <h1 className='h1 login-page-h1'>{t('Login')}</h1>
                <hr className='my-6 border-black' />
                <LoginPageForm />
            </div>
        </div>
    );
}

export default LoginPageBody;