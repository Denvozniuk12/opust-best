import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function LoginPageForm() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

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
        }

        if (!password) {
            setPasswordError(t('Required'));
            error = true;
        } else if (password.length < 3) {
            setPasswordError(t('Must be more than 3 characters'));
            error = true;
        }
        if(!error){
            window.location.href = '/login';
        }
    };

    const handleRememberMeChange = () => {
        setRememberMe(() => !rememberMe);
    };

    return (
        <form onSubmit={handleSubmit} className='login-form'>
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
                    <div className='login-form-item-label'>
                        <label htmlFor="password" className='login-form-item-required'>
                            {t('Password')}
                        </label>
                    </div>
                    <div className='login-form-item-control'>
                        <div className='login-form-item-control-input'>
                            <div className='login-form-item-control-input-content'>
                                <input
                                    autoComplete="on"
                                    id='password'
                                    type="password"
                                    placeholder={t('Password')}
                                    className={`login-input ${passwordError && 'login-input-status-error'}`}
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
            <div className="login-form-item">
                <div className='login-form-item-row'>
                    <div className="login-form-item-control">
                        <div className='login-form-item-control-input'>
                            <div className='login-form-item-control-input-content'>
                                <div className="login-form-item" style={{marginBottom: "15px"}}>
                                    <div className='login-form-item-row'>
                                        <div className="login-form-item-control">
                                            <div className='login-form-item-control-input'>
                                                <div className='login-form-item-control-input-content'>
                                                    <label className="login-checkbox-wrapper">
                                                        <span className={`login-checkbox ${rememberMe ? 'login-checkbox-checked' : ''}`} onClick={handleRememberMeChange}>
                                                            <input id="rememberMe" type="checkbox" className="login-checkbox-input" />
                                                            <span className="login-checkbox-inner"></span>
                                                        </span>
                                                        <span style={{paddingInlineStart: '8px', paddingInlineEnd: '8px'}}>{t('Remember me')}</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                    <span>{t('Log in')}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        </form>
    );
}

export default LoginPageForm;