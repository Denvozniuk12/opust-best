import React, { useEffect } from 'react';
import MySwiper from '../../../../SwiperComponent';
import Slides from '../../../../Slides';
import { useTranslation } from 'react-i18next';
import novelsScreenWidthData from './Data/screenWidthData';
import useScreenResize from '../../../../../Hooks/useScreenResize';

function Novels() {
    const { NovelsSlider } = Slides();
    const novelsSlider = NovelsSlider();
    const { t } = useTranslation();
    const initialState = 6;

    const { slPerView, handleScreenWidthResizeForSlides } = useScreenResize(initialState);
    useEffect(() => {
        handleScreenWidthResizeForSlides(novelsScreenWidthData);
        window.addEventListener('resize', function() {
            handleScreenWidthResizeForSlides(novelsScreenWidthData);
        });
        return () => {
            window.removeEventListener('resize', function() {
                handleScreenWidthResizeForSlides(novelsScreenWidthData);
            });
        };
    }, []);
    return (
        <div>
            <h2 className='h2 novels-h2'>{t('Novels')}</h2>
            <MySwiper
                slides={novelsSlider}
                classN={'swiper-novels'}
                spBetween={10}
                slPerView={slPerView}
                topValue={56 + '%'}
            />
            <div className='min-h-50px'></div>
        </div>
    );
}

export default Novels;
