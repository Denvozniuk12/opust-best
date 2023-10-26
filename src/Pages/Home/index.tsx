import React, { useContext, useEffect } from 'react';
import { IPageProps } from '../../types/data';
import {Context} from '../../Context';
import FirstSection from '../../Components/FirstSection/FirstSection';
import SecondSection from '../../Components/SecondSection/SecondSection';
import BlogSection from '../../Components/BlogSection/BlogSection';
import Search from '../../Components/Search';
import { useOnLoadPage } from '../../Hooks/useOnLoadPage';

const Home: React.FC<IPageProps> = ({ title }) => {
  document.title = title;
  const value = useContext(Context);
  const { onLoadSettings } = useOnLoadPage();

  useEffect(() => {
    if(value){
      onLoadSettings(value, '', true);
    }
  }, []);

  return (
    <>
      <div className="home-search">
        <Search />
      </div>
      <FirstSection />
      <SecondSection />
      <div className="min-h-50px"></div>
      <BlogSection />
      <div className="min-h-50px"></div>
    </>
  );
};

export default Home;
