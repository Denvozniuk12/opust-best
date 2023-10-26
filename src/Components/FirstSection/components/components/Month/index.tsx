import { useTranslation } from 'react-i18next';
import { imageFirstSectionMonth1, imageFirstSectionMonth2 } from '../../../../../Img/FirstSection/Month';


function Month() {
    const { t } = useTranslation();
    return (
        <div className='month-component'>
            <div className='min-h-50px'></div>
            <div className='month'>
                <h2 className='h2'>{t('Month`s Featured')}</h2>
                <div className='flex month-content'>
                    <div className='month-div-img'>
                        <img className='month-img' src={imageFirstSectionMonth1} alt="Feature" />
                    </div>
                    <div className='month-text'>
                        <a href="/">
                            <h3 className='h3 month-h3'>The Colossuss</h3>
                        </a>
                        <h4 className='h4 month-h4'>Sylvia Plath</h4>
                        <p className='p month-p'>A slim book of 45 of Sylvia Plath`s poems selected by Ted Hughes</p>
                    </div>
                </div>
                <div className='flex month-content'>
                    <div className='month-div-img'>
                        <img className='month-img' src={imageFirstSectionMonth2} alt="Feature" />
                    </div>
                    <div className='month-text'>
                        <a href="/">
                            <h3 className='h3 month-h3'>Opus Magazine #1</h3>
                        </a>
                        <h4 className='h4 month-h4'></h4>
                        <p className='p month-p'>Articles about Literature world.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Month;
