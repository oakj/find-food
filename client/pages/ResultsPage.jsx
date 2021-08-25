import React from 'react';
import ResultsHeader from '../components/ResultsHeader.jsx';
import ResultsContainer from '../containers/ResultsContainer.jsx';

export default function ResultsPage() {
    return (
        <section>
            <h3>Hello I am ResultsPage</h3>
            <ResultsHeader />
            <ResultsContainer />
        </section>
    );
}