import React, { useState } from 'react';
import magnify from '../assets/magnifying-glass.svg';
import styles from '../styles/Search.css';

export default function Search() {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('input: ', input);
    }

    return (
        <section>
            <h3>Hello I am Search</h3>
            <div className="search-container">
                <div className="search-box">
                    <img className="search-img" src={magnify} alt="magnifying-glass"/>
                    <form onSubmit={handleSubmit}>
                        <input className="search-input" value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="input an address"/>
                    </form>
                </div>
            </div>
        </section>
    );
}