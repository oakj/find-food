import React, { useState, useEffect } from 'react';
import styles from '../styles/Result.css';

export default function Result(props) {
    useEffect(() => {
        // console.log('Result props:', props);
    })

    return (
        <section>
            <hr/>
            <div className='result-container'>
                <img className='result-img' src={props.food_img_url} alt='food image'/>
                <div className='content-right'>
                    <h3>{props.name}</h3>
                    <br/>
                    <div>{props.restaurant_name}</div>
                    <div>{props.restaurant_address} {props.restaurant_city} {props.restaurant_state} {props.restaurant_zip}</div>
                    <div>Featured on: {props.featured_on}</div>
                    <div>Streaming on: {props.streaming_on}</div>
                    <br/>
                    <div>
                        <button>Update</button>
                        <button id='deleteFood-btn'>Delete</button>
                    </div>
                </div>
            </div>
        </section>
    );
}