import React, { Component } from 'react';
import { Button } from './common';
 
class SearchForm extends Component{
    constructor(props){
        super(props);
        this.state = { search: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log(this.state.search);
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({search: e.target.value});
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search anything on wikipedia" 
                    size="100" 
                    value={this.state.search} 
                    onChange={this.handleChange}
                />
                <input type="submit" value="Search"/>
                <Button>Random</Button>
            </form>
        );
    }
};

export default SearchForm;
