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

    const handleUpdate = (e, foodid) => {
        e.preventDefault();
        console.log('update form submitted!')
        console.log('handleUpdate foodid', foodid);
        console.log('inputCost', inputCost);
        // updateFood(foodid);
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
        console.log('does this useEffect inside Result.jsx happen?');
        // moved setState below from handleUpdate function because setState is asynchronous and also relies on re-rendering of input before passing into updateFood function
        // use setState to update input values to value of each input field (only invoke if input field has an input)
        if (update) {
            // these if checks only run if update is truthy because otherwise, React is trying to find a value of a null element            
            if (document.querySelector('#foodNameInput').value) setInputName(document.querySelector('#foodNameInput').value);
            console.log("document.querySelector('#foodCostInput').value before", document.querySelector('#foodCostInput').value);
            console.log('inputCost before', inputCost);
            if (document.querySelector('#foodCostInput').value) setInputCost(document.querySelector('#foodCostInput').value);
            console.log("document.querySelector('#foodCostInput').value after", document.querySelector('#foodCostInput').value);
            console.log('inputCost after', inputCost);
            if (document.querySelector('#restaurantNameInput').value) setInputRestaurantName(document.querySelector('#restaurantNameInput').value);
            if (document.querySelector('#restaurantAddressInput').value) setInputRestaurantAddress(document.querySelector('#restaurantAddressInput').value);
            if (document.querySelector('#restaurantCityInput').value) setInputRestaurantCity(document.querySelector('#restaurantCityInput').value);
            if (document.querySelector('#restaurantStateInput').value) setInputRestaurantState(document.querySelector('#restaurantStateInput').value);
            if (document.querySelector('#restaurantZipInput').value) setInputRestaurantZip(document.querySelector('#restaurantZipInput').value);
            if (document.querySelector('#featuredOnInput').value) setInputFeaturedOn(document.querySelector('#featuredOnInput').value);
            if (document.querySelector('#streamingOnInput').value) setInputStreamingOn(document.querySelector('#streamingOnInput').value);
            if (document.querySelector('#imgUrlInput').value) setInputImgUrl(document.querySelector('#imgUrlInput').value);
        }
    })

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
                                <div className='form-divs'>food name: <input id='foodNameInput' placeholder={props.name}/></div>
                                <div className='form-divs'>food cost: <input id='foodCostInput' placeholder={props.cost}/></div>
                                <div className='form-divs'>restaurant name: <input id='restaurantNameInput' placeholder={props.restaurant_name}/></div>
                                <div className='form-divs'>restaurant address: <input id='restaurantAddressInput' placeholder={props.restaurant_address}/></div>
                                <div className='form-divs'>restaurant city: <input id='restaurantCityInput' placeholder={props.restaurant_city}/></div>
                                <div className='form-divs'>restaurant state: <input id='restaurantStateInput' placeholder={props.restaurant_state}/></div>
                                <div className='form-divs'>restaurant zip: <input id='restaurantZipInput' placeholder={props.restaurant_zip}/></div>
                                <div className='form-divs'>featured on: <input id='featuredOnInput' placeholder={props.featured_on}/></div>
                                <div className='form-divs'>streaming on: <input id='streamingOnInput' placeholder={props.streaming_on}/></div>
                                <div className='form-divs'>img url: <input id='imgUrlInput' placeholder={props.food_img_url}/></div>
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