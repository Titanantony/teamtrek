import React from 'react';
import image from "../../../assets/1.jpg";
import "./Benefits.css"

const Benefits = () => {
    return (
        <>
        
        <div>
            This is the benefits section
        </div>
        <div className='image'>
        <img src={image} alt='demo'/>
        </div>
        </>
    );
}

export default Benefits;
