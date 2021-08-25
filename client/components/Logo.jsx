import React from 'react';
import logo from '../assets/Black logo - no background.svg';
import styles from '../styles/Logo.css';

export default function Logo() {
    return (
        <section className='logo-container'>
            <img className='logo' src={logo} alt='logo'/>
        </section>
    );
}