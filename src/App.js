import React from 'react';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Context from './Context';
import { removeLngPrefix } from './i18n';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ArrowUp from './Components/ArrowUp';
import MenuSection from './Components/Menu/MenuSection';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Blog from './Pages/Blog';
import LostPassword from './Pages/LostPassword';


function App() {
  const { t, i18n: { language } } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [beforeShowMenu, setBeforeShowMenu] = useState(false);
  const [showHeaderSearch, setShowHeaderSearch] = useState(true);
  const wrap = useRef();
  const [firstSetMenuItems, setFirstMenuItems] = useState(false);

  // useLayoutEffect(() => {
  //   const currentPathName = window.location.pathname;
  //   const newPathname1 = language === "en" ? "" : `/${language}`;
  //   const newPathName2 = `${newPathname1}${removeLngPrefix(currentPathName)}`;

  //   if(currentPathName !== newPathName2){
  //     window.location.replace(newPathName2);
  //   }
  // }, []);

  const settingInitialMenuItemsFinish = () => {
    setFirstMenuItems(true);
  }

  const basePath = (lng) => {
    return lng === "en" ? "" : `${lng}`;
  }

  const menu = (val) => {
    val ? document.body.setAttribute('style', 'overflow-y: hidden;') : document.body.removeAttribute('style');
    setBeforeShowMenu(val);
  };

  const closeMenu = () => {
    setBeforeShowMenu(false);
  }

  const isShowHeaderSearch = (val) => {
    setShowHeaderSearch(val);
  }

  useEffect(() => {
    if(beforeShowMenu){
      setShowMenu(beforeShowMenu)
      document.body.setAttribute('style', 'overflow-y: hidden;');
    }
    else{
      document.body.removeAttribute('style');
      setTimeout(() => {
        setShowMenu(beforeShowMenu);
      }, 250);
    }
  }, [beforeShowMenu]);

  const value = {
    showMenu,
    beforeShowMenu,
    showHeaderSearch,
    menu,
    closeMenu,
    isShowHeaderSearch,
    wrap,
    firstSetMenuItems,
    settingInitialMenuItemsFinish
  };

  return (
    <Router /*basename="/opust-best"*/ /*basename={`/${basePath(language)}`}*/>
      <Context.Provider value={value}>
        <div ref={wrap}>
          <div className='w-full mx-auto' style={{maxWidth: '1700px'}}>
            <Header />
            <Routes>
              <Route path='/' element={<Home title={"Opus-Best Main"} />} />
              <Route path='/login' element={<Login title={"Login"} />} />
              <Route path='/registration' element={<Registration title={"Registration"} />} />
              <Route path='/blog' element={<Blog title={"Opus-Best Blog"} />} />
              <Route path='/lostpassword' element={<LostPassword title={"Lost Password"} />} />
            </Routes>
          </div>
          <Footer />
          <ArrowUp />
        </div>
        <MenuSection />
      </Context.Provider>
    </Router>
  );
}

export default App;
