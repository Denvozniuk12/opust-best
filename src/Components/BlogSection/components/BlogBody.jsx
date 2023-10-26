import React, { useEffect } from 'react';
import MySwiper from '../../SwiperComponent';
import Slides from '../../Slides';
import BlogSectionData from "./Data";
import useScreenResize from '../../../Hooks/useScreenResize';

function BlogBody() {
    const { BlogSlider } = Slides();
    const blogSlider = BlogSlider();
    const { initialState, blogBodyData } = BlogSectionData();
    const { slPerView, handleScreenWidthResizeForSlides } = useScreenResize(initialState);
    useEffect(() => {
        handleScreenWidthResizeForSlides(blogBodyData);
        window.addEventListener('resize', function() {
            handleScreenWidthResizeForSlides(blogBodyData);
        });
        return () => {
            window.removeEventListener('resize', function() {
                handleScreenWidthResizeForSlides(blogBodyData);
            });
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
