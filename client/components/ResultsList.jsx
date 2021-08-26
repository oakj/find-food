import React, { useState, useEffect } from 'react';
import ResultsListHeader from './ResultsListHeader.jsx';
import Result from './Result.jsx';
import styles from '../styles/ResultsList.css';


export default function ResultsList(props) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        // need to parse through results and render an array of result components
        if (props.results.length) {
            setResults(props.results.map(food => <Result key={food._id} {...food}/>));
        }
    }, [props.results])

    return (
        <section className='results-list-container'>
            <ResultsListHeader input={props.input}/>
            {/* render array of result components below */}
            <section className='results-section'>
                {results.length ? results : null}
            </section>
        </section>
    );
}