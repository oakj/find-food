import React from 'react';
import styles from '../styles/ResultsListHeader.css';

export default function ResultsListHeader() {
    return (
        <div className='results-list-header-container'>
            <h3>Famous Food in <span>Los Angeles</span></h3>
            <button id='addFood-btn'>Add Food</button>
        </div>
    );
}