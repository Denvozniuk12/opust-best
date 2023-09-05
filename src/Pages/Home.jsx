import React from 'react';
import { useContext, useEffect } from 'react';
import Context from '../Context';
import FirstSection from "../Components/FirstSection/FirstSection";
import SecondSection from "../Components/SecondSection/SecondSection";
import BlogSection from "../Components/BlogSection/BlogSection";
import Search from "../Components/Search";

function Home(props) {
  const { title } = props;
  document.title = title;
  const value = useContext(Context);
    useEffect(() => {
      if(value.wrap.current.hasAttribute('style')){
        value.wrap.current.removeAttribute('style');
      }
      value.closeMenu();
      value.isShowHeaderSearch(true);
    }, []);
  return (
    <>
      <div className='home-search'>
        <Search />
      </div>
      <FirstSection />
      <SecondSection />
      <div className='min-h-50px'></div>
      <BlogSection />
      <div className='min-h-50px'></div>
    </>
  );
}

export default Home;
