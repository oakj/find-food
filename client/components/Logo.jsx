import React from 'react';
import logo from '../assets/Black logo - no background.svg';
import styles from '../styles/Logo.css';

export default function Logo() {
    return (
        <section>
            <h3>Hello I am Logo</h3>
            <img className='logo' src={logo} alt='logo'/>
        </section>
    );
}