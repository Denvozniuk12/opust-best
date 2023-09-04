import React, { useState, useEffect } from 'react';
import MySwiper from '../../../SwiperComponent';
import { AuthorsSlides } from '../../../Slides';
import { useTranslation } from 'react-i18next';

function Authors() {
    const authorsSlides = AuthorsSlides();
    const { t } = useTranslation();
    const [slPerView, setSlPerView] = useState(6);

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                setSlPerView(1);
            } else if (screenWidth < 1024) {
                setSlPerView(3);
            } else {
                setSlPerView(2);
            }
        }

        handleResize(); // Call once to set initial value
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
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
