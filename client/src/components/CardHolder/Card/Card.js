import React from 'react';
import classes from './Card.css';
import Aux from '../../../hoc/Aux/Aux'


const card = (props) => {
    
    let newCard = Object.keys(props)
       .map((el,i) => {
            return (
                <div className={classes.Card} key={props.imageName[i]+i}>
                    <img className={classes.Card} src={props.imageSource[i]} alt={props.imageName[i]} /> 
                    <h2> {props.imageName[i]} </h2>
                </div>
            )
        })
            
        

        return (        
            <Aux>
                {newCard}
            </Aux>
        )
        
    }


export default card;