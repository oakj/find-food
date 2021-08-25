import React from 'react';
import ResultsList from '../components/ResultsList.jsx';
import ResultsMap from '../components/ResultsMap.jsx';

export default function ResultsContainer() {
    return (
        <section>
            <h3>Hello I am ResultsContainer</h3>
            <ResultsList />
            <ResultsMap />
        </section>
    );
}