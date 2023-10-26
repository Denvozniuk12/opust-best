import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginLinks = () => {
    const { t } = useTranslation();
    return (
        <div className="login-form-item">
            <div className='login-form-item-row'>
                <div className='login-form-item-control'>
                    <div className='login-form-item-control-input'>
                        <div className='login-form-item-control-input-content'>
                            <Link to="/lostpassword">{t('Lost your password?  | ')}</Link>
                            <Link to="/registration">{t('Registration')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginLinks;