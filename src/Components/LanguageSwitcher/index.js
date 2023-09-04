import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const { pathname, search, hash } = useLocation();
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        // const newPathname = lng === "en" ? "" : `/${lng}`;
        // const path = `${newPathname}${pathname}${search}${hash}`;
        // if(window.location.pathname !== path){
        //     i18n.changeLanguage(lng);
        //     window.location.replace(path);
        // }  
    };
    return (
    <div className='buttons-language'>
        <button className='btn btn-language' onClick={() => {changeLanguage('en')}}>en</button>
        <button className='btn btn-language' onClick={() => {changeLanguage('ua')}}>ua</button>
    </div>

    );
}