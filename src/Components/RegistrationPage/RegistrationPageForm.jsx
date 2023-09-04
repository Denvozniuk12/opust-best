import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function RegistrationPageForm() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        setEmailError('');
    };
    
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        setPasswordError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let error = false;

        if (!email) {
            setEmailError(t('Required'));
            error = true;
        } else if (!isValidEmail(email)) {
            setEmailError(t('Invalid Email Adress'));
            error = true;
        }

        if (!password) {
            setPasswordError(t('Required'));
            error = true;
        } else if (password.length < 3) {
            setPasswordError(t('Must be more than 3 characters'));
            error = true;
        }

        if(!error){
            window.location.href = '/registration';
        }
    };

    const isValidEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    return (
        <div className='registration-form-wrap'>
            <div className='registration-form-body'>
                <h1 className='h1 registration-page-h1'>{t('Register')}</h1>
                <hr className='my-6 border-black' />
                <form onSubmit={handleSubmit} className='registration-form'>
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
                    <div className='registration-form-item'>
                        <div className='registration-form-item-row'>
                            <div className='registration-form-item-label'>
                                <label htmlFor="email" className='registration-form-item-required'>
                                    <p style={{fontWeight: '700'}}>{t('Email')}</p>
                                </label>
                            </div>
                            <div className='registration-form-item-control'>
                                <div className='registration-form-item-control-input'>
                                    <div className='registration-form-item-control-input-content'>
                                        <input
                                            id='email'
                                            className={`registration-input ${emailError && 'registration-input-status-error'}`}
                                            aria-required="true"
                                            type="text"
                                            placeholder={t('Email')}
                                            value={email}
                                            onFocus={() => setEmailFocused(true)}
                                            onBlur={() => {
                                                setEmailFocused(false);
                                                if (!email) {
                                                    setEmailError(t('Required'));
                                                } else if (!isValidEmail(email)) {
                                                    setEmailError(t('Invalid Email Adress'));
                                                } else {
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
                    <div className='registration-form-item'>
                        <div className='registration-form-item-row'>
                            <div className='registration-form-item-label'>
                                <label htmlFor="password" className='registration-form-item-required'>
                                    <p style={{fontWeight: '700'}}>{t('Password')}</p>
                                </label>
                            </div>
                            <div className='registration-form-item-control'>
                                <div className='registration-form-item-control-input'>
                                    <div className='registration-form-item-control-input-content'>
                                        <input
                                            autoComplete="on"
                                            id='password'
                                            type="password"
                                            placeholder={t('Password')}
                                            className={`registration-input ${passwordError && 'registration-input-status-error'}`}
                                            aria-required="true"
                                            value={password}
                                            onFocus={() => setPasswordFocused(true)}
                                            onBlur={() => {
                                                setPasswordFocused(false);
                                                if (!password) {
                                                    setPasswordError(t('Required'));
                                                } else if (password.length < 3) {
                                                    setPasswordError(t('Must be more than 3 characters'));
                                                } else {
                                                    setPasswordError('');
                                                }
                                            }}
                                            onChange={handlePasswordChange}
                                        />
                                        {passwordError && (
                                                <>
                                                    <p className='error-message'>{passwordError}</p>
                                                    <div style={{marginBottom: '-24px'}}></div>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='registration-form-item'>
                        <div className='registration-form-item-row'>
                            <div className='registration-form-item-control'>
                                <div className='registration-form-item-control-input'>
                                    <div className='registration-form-item-control-input-content'>
                                        <button type='submit' className='registration-form-submit-btn w-full'>
                                            <span>{t('Registration')}</span>
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

export default RegistrationPageForm;
