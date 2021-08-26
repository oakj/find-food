import React from 'react';
import Logo from './Logo.jsx';
import Search from './Search.jsx';
import styles from '../styles/ResultsHeader.css';

export default function ResultsHeader(props) {
    return (
        <section className='results-header-container'>
            <Logo />
            <Search input={props.input} setInput={props.setInput}/>
        </section>
    );
}