import React, { useState, useEffect } from 'react';
import MySwiper from '../../SwiperComponent';
import { BlogSlider } from '../../Slides';

function BlogBody() {
    const blogSlider = BlogSlider();
    const [slPerView, setSlPerView] = useState(6);

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                setSlPerView(1);
            } else if (screenWidth < 1024) {
                setSlPerView(2);
            } else if (screenWidth < 1224) {
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
        <div className='blog-body'>
            <MySwiper
                slides={blogSlider}
                classN={'swiper-blog'}
                spBetween={10}
                slPerView={slPerView}
                topValue={56 + '%'}
            />
        </div>
    );
}

export default BlogBody;
