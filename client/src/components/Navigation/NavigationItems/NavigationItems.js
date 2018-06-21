import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.css'

const navigationItems = (props) => (
    <nav>
        <ul className={classes.NavigationItems}>
            <NavigationItem> <a href="/"> Register </a></NavigationItem>
            <NavigationItem> <a href="/"> Login </a></NavigationItem>
            <NavigationItem> <a href="/"> Rating </a> </NavigationItem>
        </ul>
    </nav>
)

export default navigationItems;