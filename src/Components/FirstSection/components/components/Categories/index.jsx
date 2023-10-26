import React, { useEffect } from 'react';
import MySwiper from '../../../../SwiperComponent';
import Slides from '../../../../Slides';
import { useTranslation } from 'react-i18next';
import categoriesScreenWidthData from './Data/screenWidthData';
import useScreenResize from '../../../../../Hooks/useScreenResize';

function Categories() {
    const { CategoriesSlider } = Slides();
    const categoriesSlider = CategoriesSlider();
    const { t } = useTranslation();
    const initialState = 6;

    const { slPerView, handleScreenWidthResizeForSlides } = useScreenResize(initialState);
    useEffect(() => {
        handleScreenWidthResizeForSlides(categoriesScreenWidthData);
        window.addEventListener('resize', function() {
            handleScreenWidthResizeForSlides(categoriesScreenWidthData);
        });
        return () => {
            window.removeEventListener('resize', function() {
                handleScreenWidthResizeForSlides(categoriesScreenWidthData);
            });
        };
    }, []);
    return (
        <div>
            <h2 className='h2 categories-h2'>{t('Featured Categories')}</h2>
            <MySwiper
                slides={categoriesSlider}
                classN={'swiper-categories'}
                spBetween={10}
                slPerView={slPerView}
                topValue={56 + '%'}
                isAutoplay={false}
            />
        </div>
    );
}

export default Categories;
