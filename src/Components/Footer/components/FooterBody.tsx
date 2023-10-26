import { useTranslation } from 'react-i18next';
import { imgFooterPayment } from '../../../Img/Footer/FooterBody';

function FooterBody() {
    const { t } = useTranslation();
    return (
        <div className='footer-body'>
            <div className='footer-body-card'>
                <h2 className='h2 footer-body-h2'>{t('Our Work Is')}</h2>
                <p>{t('Designed, crafted and built with WordPress, Elementor and ACF Pro')}</p>
            </div>
            <div className='footer-body-card'>
                <h2 className='h2 footer-body-h2'>{t('Contact')}</h2>
                <p>{t('Phone: 02.62.87.59636 Email: mail@example.com 35 Rue Michel Ange, LE HAVRE, 76610')}</p>
            </div>
            <div className='footer-body-card'>
                <h2 className='h2 footer-body-h2'>{t('Secured Payment')}</h2>
                <span style={
                        {
                            boxSizing: 'border-box',
                            display: 'inline-block',
                            overflow: 'hidden',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: '0px',
                            margin: '0px',
                            padding: '0px',
                            position: 'relative',
                            maxWidth: '100%'
                        }
                    }
                >
                    <span style={
                            {
                                boxSizing: 'border-box',
                                display: 'block',
                                width: 'initial',
                                height: 'initial',
                                background: 'none',
                                opacity: 1,
                                border: '0px',
                                margin: '0px',
                                padding: '0px',
                                maxWidth: '100%'
                            }
                        }
                    >
                        <img style={{
                            display: 'block',
                            maxWidth: '100%',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: '0px',
                            margin: '0px',
                            padding: '0px'
                        }} 
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27250%27%20height=%2745%27/%3e" alt="" />
                    </span>
                    <img style={{
                        position: 'absolute',
                        inset: '0px',
                        boxSizing: 'border-box',
                        padding: '0px',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0px',
                        height: '0px',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%'
                    }}
                    src={imgFooterPayment} alt="Payment System" />
                </span>
            </div>
            <div className='footer-body-card'>
                <h2 className='h2 footer-body-h2'>{t('About')}</h2>
                <p>{t('All Rights Reserved Designed with ❤️ and 🧠 by RAMSTHEMES')}</p>
            </div>
        </div>
    );
}

export default FooterBody;
