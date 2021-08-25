import React from 'react';
import ResultsListHeader from './ResultsListHeader.jsx';
import Result from './Result.jsx';
import styles from '../styles/ResultsList.css';


export default function ResultsList() {
    return (
        <section className='results-list-container'>
            <h3>Hello I am ResultsList</h3>
            <ResultsListHeader />
            <Result />
        </section>
    );
}