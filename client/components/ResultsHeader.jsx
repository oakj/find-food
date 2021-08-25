import React from 'react';
import Logo from './Logo.jsx';
import Search from './Search.jsx';
import styles from '../styles/ResultsHeader.css';

export default function ResultsHeader() {
    return (
        <section className='results-header-container'>
            <Logo />
            <Search />
        </section>
    );
}