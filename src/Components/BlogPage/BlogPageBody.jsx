import React from 'react';
import { Link } from 'react-router-dom';
import { BlogSlider } from '../Slides';

function BlogPageBody() {
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
