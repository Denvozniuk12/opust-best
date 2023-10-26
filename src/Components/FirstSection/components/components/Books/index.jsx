import React, { useEffect } from 'react';
import MySwiper from '../../../../SwiperComponent';
import Slides from '../../../../Slides';
import { useTranslation } from 'react-i18next';
import booksScreenWidthData from './Data/screenWidthData';
import useScreenResize from '../../../../../Hooks/useScreenResize';

function Books() {
    const { BooksSlider } = Slides();
    const booksSlides = BooksSlider();
    const { t } = useTranslation();
    const initialState = 6;

    const { slPerView, handleScreenWidthResizeForSlides } = useScreenResize(initialState);
    useEffect(() => {
        handleScreenWidthResizeForSlides(booksScreenWidthData);
        window.addEventListener('resize', function() {
            handleScreenWidthResizeForSlides(booksScreenWidthData);
        });
        return () => {
            window.removeEventListener('resize', function() {
                handleScreenWidthResizeForSlides(booksScreenWidthData);
            });
        };
    }, []);
    return (
        <div>
            <h2 className='h2 books-h2'>{t('New Books')}</h2>
            <MySwiper
                slides={booksSlides}
                classN={'swiper-books'}
                spBetween={10}
                slPerView={slPerView}
                topValue={56 + '%'}
            />
            <div className='min-h-50px'></div>
        </div>
    );
}

export default Books;
