import React from "react";
import usePasswordChange from "./hooks/usePasswordChange";
import usePasswordErrors from "./hooks/usePasswordErrors";
import { TFunction } from "i18next";

interface IPasswordField {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    passwordError: string;
    setPasswordError: React.Dispatch<React.SetStateAction<string>>;
    t: TFunction<"translation", undefined>
}

const PasswordField: React.FC<IPasswordField> = (props) => {
    const { password, setPassword, passwordError, setPasswordError, t } = props;
    const { handlePasswordChange } = usePasswordChange(setPassword, setPasswordError);
    const { handlePasswordErrors } = usePasswordErrors(password, setPasswordError, t);
    return (
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