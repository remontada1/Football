import React, {Component} from 'react';
import Navigation from '../../components/Navigation/Navigation'
import CardHolder from '../../components/CardHolder/CardHolder'
import Messi from '../../assets/images/messi.jpg';
import Ronaldo from '../../assets/images/ronaldo.jpg';
import Hazard from '../../assets/images/hazard.jpg';
import classes from './FootballField.css';


class FootballField extends Component {
    state = {
        players: [
            { name: 'Messi', sourceImage: Messi },
            { name: 'Ronaldo', sourceImage: Ronaldo },
            { name: 'Hazard', sourceImage: Hazard },
        ]
    }

    
    deleteHandler = (e) => {
        const index = e.target.alt || e.target.childNodes.item(0).nextSibling.data;        
        this.setState({
            players: this.state.players.filter(function (person) {
                return person.name !== index
            })
        });
    }

    render(){
        return(
            <div className={classes.FootballField}>
                <Navigation />
                <CardHolder 
                    PlayerName={this.state.players.map(el => el.name)}
                    imgSrc={this.state.players.map(el => el.sourceImage)}
                    deletePlayer={(el) => this.deleteHandler(el)} />

            </div>
        )
    }
}

export default FootballField;