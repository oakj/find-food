import React, {  useState, useEffect } from 'react';
import Result from '../components/Result.jsx';
import ResultsHeader from '../components/ResultsHeader.jsx';
import ResultsContainer from '../containers/ResultsContainer.jsx';

export default function ResultsPage() {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);

    const fetchResults = () => {
        fetch(`/food/${input}`)
            .then(res => res.json())
            .then(data => {
                // console.log('data:\n', Array.isArray(data), data);
                setResults(data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        // nested fetch request in an if because we don't want the request to fire unless input is provided
        if (input) {
            fetchResults();
        }
    }, [input])

    return (
        <section>
            <ResultsHeader input={input} setInput={setInput}/>
            <ResultsContainer results={results}/>
        </section>
    );
}