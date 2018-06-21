import React, {Component} from 'react';
import Navigation from '../../components/Navigation/Navigation'

import classes from './FootballField.css';

class FootballField extends Component {
    render(){
        return(
            <div className={classes.FootballField}>
                <Navigation />
            </div>
        )
    }
}

export default FootballField;