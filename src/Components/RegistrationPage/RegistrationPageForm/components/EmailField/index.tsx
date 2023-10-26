import React from "react";
import useEmailChange from "./hooks/useEmailChange";
import useEmailErrors from "./hooks/useEmailErrors";
import { TFunction } from "i18next";

interface IEmailField {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    emailError: string;
    setEmailError: React.Dispatch<React.SetStateAction<string>>;
    t: TFunction<"translation", undefined>
}

const EmailField: React.FC<IEmailField> = (props) => {
    const { email, setEmail, emailError, setEmailError, t } = props;
    const { handleEmailChange } = useEmailChange(setEmail, setEmailError);
    const { handleEmailErrors } = useEmailErrors(email, setEmailError, t);
    return (
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

export default EmailField;