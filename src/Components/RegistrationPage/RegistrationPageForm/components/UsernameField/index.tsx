import React from "react";
import { useTranslation } from "react-i18next";

const UsernameField = () => {
    const { t } = useTranslation();
    return (
        <div className='registration-form-item'>
            <div className='registration-form-item-row'>
                <div className='registration-form-item-label'>
                    <label htmlFor="userName" className=''>
                        <p style={{fontWeight: '700'}}>{t('Username')}</p>
                    </label>
                </div>
                <div className='registration-form-item-control'>
                    <div className='registration-form-item-control-input'>
                        <div className='registration-form-item-control-input-content'>
                            <input id='userName' className='registration-input' type="text" placeholder={t('Username')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsernameField;