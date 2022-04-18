import React from 'react';
import '../App.css';
import freshFoods from '../images/freshFoods.webp';
import Nationality from './Nationality';


function Hero() {
    return (
        <div className='Hero'>
            <Nationality></Nationality>
            <img src={freshFoods} alt="Fresh Foods Picture" id='freshFoods'></img>
        </div>
    )
}

export default Hero;