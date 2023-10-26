import { useState } from "react";
import { useTranslation } from 'react-i18next';

function Search() {
    const [search, setSearch] = useState<string>("");
    const { t } = useTranslation();
  return (
    <form className='search-form'>
        <input
          id="searchInput"
          className="input search-input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t('Search')} 
        />
    </form>
  );
}

export default Search;
