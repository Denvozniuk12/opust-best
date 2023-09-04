import React from 'react';
import { useContext, useEffect } from 'react';
import Context from '../Context';
import BlogPageHeader from '../Components/BlogPage/BlogPageHeader';
import BlogPageBody from '../Components/BlogPage/BlogPageBody';

function Blog() {
    const value = useContext(Context);
    useEffect(() => {
        value.wrap.current.setAttribute('style', 'background-color: #D9E6E3');
        value.closeMenu();
        value.isShowHeaderSearch(false);
    }, []);
    return (
            <>
                <BlogPageHeader />
                <BlogPageBody />
            </>
        );
    }
export default Blog;
