import React from 'react';
import imag from '../jamil.jpg';
const Home=()=>{
    return(
        <div>
        <h2>Home</h2>
        <p>this is Home section</p>
        <img src={imag} alt='jamil'className='jamil'/>
        </div>
    )
}
export default Home;