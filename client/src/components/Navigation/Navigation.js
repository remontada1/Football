import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems'
import classes from './Navigation.css';

const navigation = (props) => {
    return(
        <NavigationItems clasName={classes.Navigation}/>
    )
}

export default navigation;