import React from 'react';
import { useContext, useEffect } from 'react';
import Context from '../../Context';
import BlogPageHeader from '../../Components/BlogPage/BlogPageHeader';
import BlogPageBody from '../../Components/BlogPage/BlogPageBody';
import { useOnLoadPage } from '../../Hooks/useOnLoadPage';

function Blog(props) {
    const { title } = props;
    document.title = title;

    const value = useContext(Context);
    const { onLoadSettings } = useOnLoadPage();

    useEffect(() => {
        onLoadSettings(value, '#D9E6E3', false);
    }, []);
    
    return (
            <>
                <BlogPageHeader />
                <BlogPageBody />
            </>
        );
    }
export default Blog;
