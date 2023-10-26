import React from "react";
import { useTranslation } from 'react-i18next';
import usePasswordChange from "./hooks/usePasswordChange";
import usePasswordErrors from "./hooks/usePasswordErrors";

interface IPasswordField {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    passwordError: string;
    setPasswordError: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordField: React.FC<IPasswordField> = (props) => {
    const { password, setPassword, passwordError, setPasswordError } = props;
    const { t } = useTranslation();
    const { handlePasswordChange } = usePasswordChange(setPassword, setPasswordError);
    const { handlePasswordErrors } = usePasswordErrors(password, setPasswordError);
    return (
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
                                onBlur={handlePasswordErrors}
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
    );
}

export default PasswordField;