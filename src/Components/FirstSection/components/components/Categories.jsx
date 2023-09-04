import React, { useState, useEffect } from 'react';
import MySwiper from '../../../SwiperComponent';
import { CategoriesSlider } from '../../../Slides';
import { useTranslation } from 'react-i18next';

function Categories() {
    const categoriesSlider = CategoriesSlider();
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
