import React, { Component } from 'react';
import ResultsItem from './ResultsItem';

class ResultsList extends Component {
    renderWiki() {
        const { wikis } = this.props;

        const desc = [];

        if (wikis.length !== 0){
            const desc = wikis[2];
            const link = wikis[3];
        
            return wikis[1].map((wiki, index) => <ResultsItem key={wiki} title={wiki} desc={desc[index]} link={link[index]} />);
        }
    }

    render() {
        return (
            <div>
                {this.renderWiki()}
            </div>
        );
    }
};


export default ResultsList;
