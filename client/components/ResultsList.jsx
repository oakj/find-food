import React from 'react';
import ResultsListHeader from './ResultsListHeader.jsx';
import Result from './Result.jsx';

export default function ResultsList() {
    return (
        <section>
            <h3>Hello I am ResultsList</h3>
            <ResultsListHeader />
            <Result />
        </section>
    );
}