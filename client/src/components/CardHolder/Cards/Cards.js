import React from 'react';
import classes from './Cards.css';


const card = (props) => {
    console.log('Cards: ', props.imageName)    
return (
    <div className={classes.Cards}>
        <img src={props.imageSource} alt={props.imageName} />
        <h2> {props.imageName} </h2>
    </div>
    )
    
}

export default card;