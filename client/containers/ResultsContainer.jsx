import React from 'react';
import ResultsList from '../components/ResultsList.jsx';
import ResultsMap from '../components/ResultsMap.jsx';
import styles from '../styles/ResultsContainer.css';

export default function ResultsContainer() {
    return (
        <section className='results-container-container'>
            <ResultsList />
            <ResultsMap />
        </section>
    );
}