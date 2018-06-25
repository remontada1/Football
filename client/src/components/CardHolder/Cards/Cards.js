import React from 'react';
import classes from './Cards.css';


const card = (props) => {
    
return (
    <div className={classes.Cards} onClick={props.removeElement}>
        <img src={props.imageSource} alt={props.imageName} />
        <h2> {props.imageName} </h2>
    </div>
    )
    
}

export default card;