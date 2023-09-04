import React, { useState, useEffect } from 'react';
import MySwiper from '../../../SwiperComponent';
import { BooksSlider } from '../../../Slides';
import { useTranslation } from 'react-i18next';

function Books() {
    const booksSlides = BooksSlider();
    const { t } = useTranslation();
    const [slPerView, setSlPerView] = useState(6);

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;
            if (screenWidth < 320) {
                setSlPerView(1);
            } else if (screenWidth < 768) {
                setSlPerView(2);
            } else if (screenWidth < 1024) {
                setSlPerView(4);
            } else {
                setSlPerView(6);
            }
        }

        handleResize(); // Call once to set initial value
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
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
