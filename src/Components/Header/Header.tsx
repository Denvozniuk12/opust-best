import { useContext } from 'react';
import {AppContext, Context} from '../../Context';
import Logo from './components/Logo';
import Search from '../Search';
import Navigation from './components/Navigation';

function Header() {
  const value: AppContext | undefined = useContext(Context);
  return (
    <header id='header' className='wrap wrap-header'>
        <Logo />
        {value && (value.showHeaderSearch && (<div className='search-div'><Search /></div>))}
        <Navigation />
    </header>
  );
}

export default Header;
