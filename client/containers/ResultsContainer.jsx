import React from 'react';
import ResultsList from '../components/ResultsList.jsx';
import ResultsMap from '../components/ResultsMap.jsx';
import styles from '../styles/ResultsContainer.css';

export default function ResultsContainer(props) {
    return (
        <section className='results-container-container'>
            <ResultsList results={props.results} input={props.input} getFood={props.getFood}/>
            <ResultsMap results={props.results}/>
        </section>
    );
}