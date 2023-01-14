import React from 'react';
import Arrow from '../Icons/Arrow';
import SearchIcon from '../Icons/Search';

// Style
import './style.css';

const SearchInput = React.memo(() => {

  return (
    <div className='search-wrapper'>
    <div className='search-input-wrapper'>
     <SearchIcon />
      <input type="search" />
      <Arrow />
    </div>
    <button className='search-btn'> Check </button>
    </div>
  )
})

export default SearchInput