import React from "react";
import { useTranslation } from "react-i18next";

const SubmitButton = () => {
    const { t } = useTranslation();
    return (
        <div className='login-form-item'>
            <div className='login-form-item-row'>
                <div className='login-form-item-control'>
                    <div className='login-form-item-control-input'>
                        <div className='login-form-item-control-input-content'>
                            <button type='submit' className='login-form-submit-btn'>
                                <span>{t('Log in')}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubmitButton;