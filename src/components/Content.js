import React, { Component } from 'react';
import jsonp from 'jsonp';
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';

class Content extends Component {
    constructor(props){
        super(props);
        this.state = { search: '', wiki: [], error: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(e) {
        jsonp("https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search=" + this.state.search + "&limit=10&callback=JSON_CALLBACK", null, (err, data) => {
            if (err){
                console.log(err);
                this.setState({error: true})
            }
            else {
                this.setState({wiki: data});
            }
        });
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({search: e.target.value});
    }

    handleError() {
        if (this.state.error){
            return <h1>Something went wrong, please refresh the page</h1>
        }
    }

    render() {
        return(
            <div>
                {this.handleError()}
                <SearchForm onSubmit={this.handleSubmit} value={this.state.search} onChange={this.handleChange} />
                <ResultsList wikis={this.state.wiki} />
            </div>
        );
    }
};

export default Content;
