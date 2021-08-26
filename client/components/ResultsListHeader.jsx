import React from 'react';
import styles from '../styles/ResultsListHeader.css';

export default function ResultsListHeader(props) {
    return (
        <div className='results-list-header-container'>
            <h3>Famous Food in <span>{props.input ? props.input : '...'}</span></h3>
            <button id='addFood-btn'>Add Food</button>
        </div>
    );
}