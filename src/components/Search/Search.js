import React, { useRef } from 'react';
import '../../styles/Search.css';
import { useNavigate, createSearchParams } from 'react-router-dom';
import backImg from '../../assets/back.png'
import searchImg from '../../assets/search-interface-symbol.png';

const Search = () => {
    const navigate = useNavigate();
    const searchInputRef = useRef();

    const onSearchHandler = (e) => {
        e.preventDefault();

        const searchQuery = {
            name: searchInputRef.current.value
        }

        const query = createSearchParams(searchQuery);

        navigate({
            pathname: '/search',
            search: `?${query}`
        });
    };

    const goBackHandler = () => {
        navigate(-1);
    }

    return (
        <div className='search-container'>
          <form onSubmit={onSearchHandler} className='search-form'>
            <div className='search-bar-container'>
                <button onClick={goBackHandler} className='search-button'>
                    <img src={backImg} alt='go back'/>
                </button>
                <input type='text' placeholder='Search' ref={searchInputRef} className='search-input' />
                <button type='submit' className='search-button'>
                    <img src={searchImg} alt='search' />
                </button>
            </div>
          </form>
        </div>
      );
};

export default Search;