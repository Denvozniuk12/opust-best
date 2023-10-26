import React from "react";
import { useTranslation } from 'react-i18next';
import useCheckboxChange from "./hooks/useCheckboxChange";

const CheckboxField = (props) => {
    const { rememberMe, setRememberMe } = props;
    const { t } = useTranslation();
    const { handleRememberMeChange } = useCheckboxChange(rememberMe, setRememberMe);
    return (
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
    );
}

export default CheckboxField;