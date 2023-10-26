import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import {Context} from './Context';
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
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [beforeShowMenu, setBeforeShowMenu] = useState<boolean>(false);
  const [showHeaderSearch, setShowHeaderSearch] = useState<boolean>(true);
  const wrap = useRef<HTMLDivElement | null>(null);
  const [firstSetMenuItems, setFirstMenuItems] = useState<boolean>(false);

  const settingInitialMenuItemsFinish = () => {
    setFirstMenuItems(true);
  }

  const menu = (val: boolean) => {
    val ? document.body.setAttribute('style', 'overflow-y: hidden;') : document.body.removeAttribute('style');
    setBeforeShowMenu(val);
  };

  const closeMenu = () => {
    setBeforeShowMenu(false);
  }

  const isShowHeaderSearch = (val: boolean) => {
    setShowHeaderSearch(val);
  }

  useEffect(() => {
    if (beforeShowMenu) {
      setShowMenu(beforeShowMenu)
      document.body.setAttribute('style', 'overflow-y: hidden;');
    } else {
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
    <Router>
      <Context.Provider value={value}>
        <div ref={wrap}>
          <div className='w-full mx-auto' style={{ maxWidth: '1700px' }}>
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