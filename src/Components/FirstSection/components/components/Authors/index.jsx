import React, { useEffect } from 'react';
import MySwiper from '../../../../SwiperComponent';
import Slides from '../../../../Slides';
import { useTranslation } from 'react-i18next';
import authorsScreenWidthData from './Data/screenWidthData';
import useScreenResize from '../../../../../Hooks/useScreenResize';

function Authors() {
    const { AuthorsSlides } = Slides();
    const authorsSlides = AuthorsSlides();
    const { t } = useTranslation();
    const initialState = 2;
    const { slPerView, handleScreenWidthResizeForSlides } = useScreenResize(initialState);
    useEffect(() => {
        handleScreenWidthResizeForSlides(authorsScreenWidthData);
        window.addEventListener('resize', function() {
            handleScreenWidthResizeForSlides(authorsScreenWidthData);
        });
        return () => {
            window.removeEventListener('resize', function() {
                handleScreenWidthResizeForSlides(authorsScreenWidthData);
            });
        };
    }, []);
    return (
        <div className='authors'>
            <h2 className='h2 authors-h2'>{t('Best Authors')}</h2>
            <MySwiper
                slides={authorsSlides}
                classN={'swiper-authors'}
                spBetween={10}
                slPerView={slPerView}
                topValue={43 + '%'}
            />
            <button className='w-full allAuthorsButton'>allAuthorsButton</button>
        </div>
    );
}

export default Authors;
