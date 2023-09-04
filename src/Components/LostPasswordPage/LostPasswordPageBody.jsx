import React from "react";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LostPasswordPageBody() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        setEmailError('');
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email) {
            setEmailError(t('Required'));
        }
        else {
            window.location.href = '/login';
        }
    };

    return (
        <div className='lost-password-wrap'>
            <div className='login-form-body'>
                <h1 className='h1 login-page-h1'>{t('Login')}</h1>
                <hr className='my-6 border-black' />
                <p className="mb-4 sm-text-sm">{t('Lost your password? Please enter your username or email address. You will receive a link to create a new password via email')}</p>
                <form onSubmit={handleSubmit} className='login-form'>
                    <div className='login-form-item'>
                        <div className='login-form-item-row'>
                            <div className='lostpassword-form-item-label'>
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
                                            onFocus={() => setEmailFocused(true)}
                                            onBlur={() => {
                                                setEmailFocused(false);
                                                if (!email) {
                                                    setEmailError(t('Required'));
                                                } 
                                                else {
                                                    setEmailError('');
                                                }
                                            }}
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
                    <div className='login-form-item'>
                        <div className='login-form-item-row'>
                            <div className='login-form-item-control'>
                                <div className='login-form-item-control-input'>
                                    <div className='login-form-item-control-input-content'>
                                        <button type='submit' className='login-form-submit-btn'>
                                            <span>{t('Reset Password')}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LostPasswordPageBody;