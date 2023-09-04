import React from 'react';
import { useContext, useEffect } from 'react';
import Context from '../Context';

function NotFound() {
  const value = useContext(Context);
    useEffect(() => {
        value.closeMenu();
        value.isShowHeaderSearch(false);
    }, []);
  return <h2>404 - Not Found</h2>;
}

export default NotFound;
