import React, { useState, useEffect } from 'react';
import MySwiper from '../../SwiperComponent';
import { BestBooksSlider } from '../../Slides';
import { useTranslation } from 'react-i18next';

function BestBooks() {
    const bestBooksSlider = BestBooksSlider();
    const { t } = useTranslation();
    const [slPerView, setSlPerView] = useState(6);

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;
            if (screenWidth < 320) {
                setSlPerView(1);
            } else if (screenWidth < 768) {
                setSlPerView(2);
            } else {
                setSlPerView(4);
            }
        }

        handleResize(); // Call once to set initial value
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return(
        <div className='best-books-block'>
            <h2 className='h2 best-books-h2'>{t('Best Books')}</h2>
            <div className='best-books'>
                <MySwiper
                    slides={bestBooksSlider}
                    classN={'swiper-best-books'}
                    spBetween={10}
                    slPerView={slPerView}
                    topValue={56 + '%'}
                />
            </div>
        </div>
    );
}

export default BestBooks;
