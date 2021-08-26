import React, { useState, useEffect } from 'react';
import styles from '../styles/Result.css';

export default function Result(props) {
    // state of update div toggle
    const [update, setUpdate] = useState(false);
    // state of form input fields
    const [inputName, setInputName] = useState(props.name);
    const [inputCost, setInputCost] = useState(props.cost);
    const [inputRestaurantName, setInputRestaurantName] = useState(props.restaurant_name);
    const [inputRestaurantAddress, setInputRestaurantAddress] = useState(props.restaurant_address);
    const [inputRestaurantCity, setInputRestaurantCity] = useState(props.restaurant_city);
    const [inputRestaurantState, setInputRestaurantState] = useState(props.restaurant_state);
    const [inputRestaurantZip, setInputRestaurantZip] = useState(props.restaurant_zip);
    const [inputFeaturedOn, setInputFeaturedOn] = useState(props.featured_on);
    const [inputStreamingOn, setInputStreamingOn] = useState(props.streaming_on);
    const [inputImgUrl, setInputImgUrl] = useState(props.food_img_url);

    const handleUpdate = async (e, foodid) => {
        e.preventDefault();
        console.log('update form submitted!')
        console.log('handleUpdate foodid', foodid);
        console.log('inputCost', inputCost);
        await updateFood(foodid);
        window.alert('Food has been updated!');
        props.getFood();
    }

    const updateFood = (foodid) => {
        const responseBody =     {
            "_id": foodid,
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
        console.log('updateFood responsebody:\n', responseBody);
        fetch(`/food/${foodid}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(responseBody)
        })
            .then(data => console.log('updateFood data:\n', data))
            .catch(error => console.log(error));
    }

    const deleteFood = async (foodid) => {
        await fetch(`/food/${foodid}`,  {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log('deleteFood data', data);
            })
            .catch(err => console.log(err));
        window.alert('Food has been deleted!');
        props.getFood();
    }

    useEffect(() => {
        // console.log('does this useEffect inside Result.jsx happen?');
    });

    return (
        <section>
            <hr/>
            <div className='result-container'>
                <img className='result-img' src={props.food_img_url} alt='food image'/>
                <div className='content-right'>
                    <h3>{props.name}</h3>
                    <h4>{props.cost}</h4>
                    <br/>
                    <div>{props.restaurant_name}</div>
                    <div>{props.restaurant_address} {props.restaurant_city} {props.restaurant_state} {props.restaurant_zip}</div>
                    <div>Featured on: {props.featured_on}</div>
                    <div>Streaming on: {props.streaming_on}</div>
                    <br/>
                    <div>
                        <button onClick={() => setUpdate(!update)}>Update</button>
                        <button id='deleteFood-btn' onClick={() => deleteFood(props._id)}>Delete</button>
                    </div>
                    {
                        update ?
                            <form className='form-container' onSubmit={(e) => handleUpdate(e, props._id)}>
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
            </div>
        </section>
    );
}