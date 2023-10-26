import { useTranslation } from 'react-i18next';
import { FacebookSvg, InstagramSvg, TwitterSvg, YouTubeSvg } from '../../../Img/Footer/FooterBottom';

function FooterBottom() {
    const { t } = useTranslation();
    return (
        <div className='footer-bottom'>
            <div className='footer-bottom-content'>
                <p>{t('Copyright © 2023 RAMSTHEMES')}</p>
            </div>
            <div className='footer-links'>
                <a href="/"><span className='footer-links-span'>{FacebookSvg}</span></a>
                <a href="/"><span className='footer-links-span'>{InstagramSvg}</span></a>
                <a href="/"><span className='footer-links-span'>{TwitterSvg}</span></a>
                <a href="/"><span className='footer-links-span'>{YouTubeSvg}</span></a>
            </div>
        </div>
    );
}

export default FooterBottom;
