import React from 'react';
import magnify from '../assets/magnifying-glass.svg';
import styles from '../styles/Search.css';

export default function Search(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setInput(document.querySelector('.search-input').value);
    }

    return (
        <section className='search-container'>
                <div className="search-box">
                    <div>find food near...</div>
                    <img className="search-img" src={magnify} alt="magnifying-glass"/>
                    <form onSubmit={handleSubmit}>
                        <input className="search-input" type="text" placeholder="input an address"/>
                    </form>
                </div>
        </section>
    );
}