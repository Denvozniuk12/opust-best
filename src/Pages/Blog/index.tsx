import React, { useContext, useEffect } from 'react';
import { IPageProps } from '../../types/data';
import {Context} from '../../Context';
import BlogPageHeader from '../../Components/BlogPage/BlogPageHeader';
import BlogPageBody from '../../Components/BlogPage/BlogPageBody';
import { useOnLoadPage } from '../../Hooks/useOnLoadPage';


const Blog: React.FC<IPageProps> = (props) => {
  const { title } = props;
  document.title = title;
  const value = useContext(Context);
  const { onLoadSettings } = useOnLoadPage();

  useEffect(() => {
    if(value){
      onLoadSettings(value, '#D9E6E3', false);
    }
  }, []);

  return (
    <>
      <BlogPageHeader />
      <BlogPageBody />
    </>
  );
};

export default Blog;
