import React, { useState } from 'react';
import styles from '../styles/ResultsListHeader.css';

export default function ResultsListHeader(props) {
    const [toggleAddFood, setToggleAddFood] = useState(false);
    // initialize state for form inputs
    const [inputName, setInputName] = useState('');
    const [inputCost, setInputCost] = useState('');
    const [inputRestaurantName, setInputRestaurantName] = useState('');
    const [inputRestaurantAddress, setInputRestaurantAddress] = useState('');
    const [inputRestaurantCity, setInputRestaurantCity] = useState('');
    const [inputRestaurantState, setInputRestaurantState] = useState('');
    const [inputRestaurantZip, setInputRestaurantZip] = useState('');
    const [inputFeaturedOn, setInputFeaturedOn] = useState('');
    const [inputStreamingOn, setInputStreamingOn] = useState('');
    const [inputImgUrl, setInputImgUrl] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        addFood();
        window.alert('Food was added successfully!');
    }

    const addFood = () => {
        const responseBody = {
            "name": inputName,
            "cost": inputCost,
            "restaurant_name": inputRestaurantName,
            "restaurant_address": inputRestaurantAddress,
            "restaurant_city": inputRestaurantCity,
            "restaurant_state": inputRestaurantState,
            "restaurant_zip": inputRestaurantZip,
            "featured_on": inputFeaturedOn,
            "streaming_on": inputStreamingOn,
            "food_img_url": inputImgUrl
        };
        fetch(`/food`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(responseBody)
        })
            .then(data => console.log('addFood data:\n', data))
            .catch(error => console.log(error));
    }

    return (
        <div className='results-list-header-container'>
            <h3>Famous Food in <span>{props.input ? props.input : '...'}</span></h3>
            <button id='addFood-btn' onClick={() => setToggleAddFood(!toggleAddFood)}>Add Food</button>
            {
                toggleAddFood ?
                    <form className='form-container' onSubmit={handleAdd}>
                        <div className='form-divs'><h4>all fields are required</h4></div>
                        <div className='form-divs'>food name: <input onChange={(e) => setInputName(e.target.value)} placeholder={props.name}/></div>
                        <div className='form-divs'>food cost: <input onChange={(e) => setInputCost(e.target.value)} placeholder={props.cost}/></div>
                        <div className='form-divs'>restaurant name: <input onChange={(e) => setInputRestaurantName(e.target.value)} placeholder={props.restaurant_name}/></div>
                        <div className='form-divs'>restaurant address: <input onChange={(e) => setInputRestaurantAddress(e.target.value)} placeholder={props.restaurant_address}/></div>
                        <div className='form-divs'>restaurant city: <input onChange={(e) => setInputRestaurantCity(e.target.value)} placeholder={props.restaurant_city}/></div>
                        <div className='form-divs'>restaurant state: <input onChange={(e) => setInputRestaurantState(e.target.value)} placeholder={props.restaurant_state}/></div>
                        <div className='form-divs'>restaurant zip: <input onChange={(e) => setInputRestaurantZip(e.target.value)} placeholder={props.restaurant_zip}/></div>
                        <div className='form-divs'>featured on: <input onChange={(e) => setInputFeaturedOn(e.target.value)} placeholder={props.featured_on}/></div>
                        <div className='form-divs'>streaming on: <input onChange={(e) => setInputStreamingOn(e.target.value)} placeholder={props.streaming_on}/></div>
                        <div className='form-divs'>img url: <input onChange={(e) => setInputImgUrl(e.target.value)} placeholder={props.food_img_url}/></div>
                        <button type='submit'>Submit Updates</button>
                    </form>
                :
                    null
            }
        </div>
    );
}