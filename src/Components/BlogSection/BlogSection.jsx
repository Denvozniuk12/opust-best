import React from 'react';
import BlogHead from './components/BlogHead';
import BlogBody from './components/BlogBody';

function BlogSection() {
    return (
        <div className='blog'>
            <BlogHead />
            <BlogBody />
        </div>
    );
}

export default BlogSection;

