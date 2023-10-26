import React from "react";
import { TFunction } from "i18next";

interface ISubmitButton {
    t: TFunction<"translation", undefined>;
}

const SubmitButton: React.FC<ISubmitButton> = (props) => {
    const { t } = props;
    return (
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
    );
}

export default SubmitButton;