import React from 'react';
import SearchIcon from 'react-icons/lib/fa/search';
import { Button } from './common';
import '../index.css'
 
const SearchForm = (props) => {
    return(
        <div className="searchForm">
            <form onSubmit={props.onSubmit}>
                <div className="inputContainer">
                    <SearchIcon />
                    <input 
                        className="inputForm"
                        type="text" 
                        placeholder="Search anything on wikipedia" 
                        value={props.search} 
                        onChange={props.onChange}
                    />
                </div>
                <input type="submit" value="Search"/>
                <Button>
                    <a href="https://en.wikipedia.org/wiki/Special:Random" target='_blank'>
                        Random
                    </a>
                </Button>
            </form>
        </div>
        );
};

export default SearchForm;
