import { useEffect } from 'react';

const useSubMenuInitial = (menuChangeStateStart: (subMenu: boolean) => void, subMenu: boolean | null,
  menuChangeStateFinish: (menuRef: React.RefObject<HTMLUListElement>, subMenu: boolean) => void,
  menuRef: React.RefObject<HTMLUListElement> | null, intermediateSubMenuHidden: boolean) => 
{
    useEffect(() => {
        if(subMenu !== null) menuChangeStateStart(subMenu);
      }, [subMenu]);
    
    useEffect(() => {
        if(subMenu !== null && menuRef) menuChangeStateFinish(menuRef, subMenu);
    }, [intermediateSubMenuHidden]);    
}

export default useSubMenuInitial;