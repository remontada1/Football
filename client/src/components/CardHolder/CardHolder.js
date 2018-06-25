import React from 'react';
import Cards from './Cards/Cards'
import classes from './CardHolder.css'



const cardHolder = (props) => {
    
    
    let newCard = Object.keys(props.PlayerName)
        .map((el, i) => {
            return (
                <Cards key={props.PlayerName[i]}
                    imageSource={props.imgSrc[i]}
                    removeElement={props.deletePlayer} 
                    imageName={props.PlayerName[i]} />
                )
            })
    
    return (    
        <div className={classes.CardHolder}>
            {newCard}
        </div>
    )        
}
export default cardHolder;