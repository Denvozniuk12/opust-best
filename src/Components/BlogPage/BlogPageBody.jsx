import React from 'react';
import Slides from '../Slides';

function BlogPageBody() {
    const { BlogSlider } = Slides();
    const blogSlider = BlogSlider();
    return (
            <div className='wrap'>
                <hr className='my-10 border-black' />
                <div className='blog-page-body-content'>
                    {blogSlider}
                </div>
            </div>
        );
    }
export default BlogPageBody;
