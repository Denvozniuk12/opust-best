import React from "react";
import { useTranslation } from 'react-i18next';
import useUsernameChange from "./hooks/useUsernameChange";
import useUsernameErrors from "./hooks/useUsernameErrors";

const UsernameField = (props) => {
    const { email, setEmail, emailError, setEmailError } = props;
    const { t } = useTranslation();
    const { handleEmailChange } = useUsernameChange(setEmail, setEmailError);
    const { handleEmailErrors } = useUsernameErrors(email, setEmailError);
    return (
        <div className='login-form-item'>
            <div className='login-form-item-row'>
                <div className='login-form-item-label'>
                    <label htmlFor="email" className='login-form-item-required'>
                        {t('Username or Email Address')}
                    </label>
                </div>
                <div className='login-form-item-control'>
                    <div className='login-form-item-control-input'>
                        <div className='login-form-item-control-input-content'>
                            <input
                                id='email'
                                className={`login-input ${emailError && 'login-input-status-error'}`}
                                aria-required="true"
                                type="text"
                                placeholder={t('Username or Email Address')}
                                value={email}
                                onBlur={handleEmailErrors}
                                onChange={handleEmailChange}
                            />
                            {emailError && (
                                    <>
                                        <p className='error-message'>{emailError}</p>
                                        <div style={{marginBottom: '-24px'}}></div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsernameField;