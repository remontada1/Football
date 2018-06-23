import React from 'react';
import Card from './Card/Card'

import classes from './CardHolder.css'



const cardHolder = (props) => {
    
        return(
        <div className={classes.CardHolder}>
                <Card imageName={props.PlayerName} 
                        imageSource={props.imgSrc }
                        removeImage={props.deleteImage}/>
        </div>
        )

}

export default cardHolder;