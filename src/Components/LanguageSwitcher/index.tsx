import useLanguageSwitcher from "./hooks/useLanguageSwitcher";

export const LanguageSwitcher = () => {
    const { changeLanguage } = useLanguageSwitcher();
    return (
        <div className='buttons-language'>
            <button className='btn btn-language' onClick={() => {changeLanguage('en')}}>en</button>
            <button className='btn btn-language' onClick={() => {changeLanguage('ua')}}>ua</button>
        </div>
    );
}