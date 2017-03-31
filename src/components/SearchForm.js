import React from 'react';
import Search from 'react-icons/lib/fa/search';
import AngleRight from 'react-icons/lib/fa/angle-right';
import Random from 'react-icons/lib/fa/random';
import '../index.css'
 
const SearchForm = (props) => {
    const show = props.wikis.length !== 0 ? true : false;
    return(
        <div className={show ? "searchFormShow" : "searchForm"}>
            <form onSubmit={props.onSubmit}>
                <div className={show? "inputContainerShow" : "inputContainer"}>
                    <AngleRight className={show? "angleRightShow" : "angleRight"}/>
                    <input 
                        className={show? "inputFormShow" : "inputForm"}
                        type="text" 
                        placeholder="Search anything on wikipedia" 
                        value={props.search} 
                        onChange={props.onChange}
                    />
                    <button type="submit" className={show? "searchButtonShow" : "searchButton"}><Search /></button>
                    <button className={show? "randomButton" : "randomButton"}>
                        <a href="https://en.wikipedia.org/wiki/Special:Random" target='_blank'>
                            <Random />
                        </a>
                    </button>
                </div>
            </form>
        </div>
        );
};

export default SearchForm;
