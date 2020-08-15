import React from 'react';
import image from '../masa.jpg';
const About=()=>{
    return(
        <div>
        <h2>About</h2>
        <p>this is About section</p>
        <img src={image} alt='masa'className='jamil'/>
        </div>
    )
}
export default About;