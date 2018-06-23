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
            { name: 'Hazard', sourceImage: Hazard }
        ]
    }

    
    deleteHandler(e) {
        // console.log(this.state.players)
        //  var array = this.state.players
        //      .map(igKey => {
        //          return igKey.name
        //     })
        // var index = array.indexOf(e.target.alt);
        // // console.log(array, this.state.players, index)
        // array.splice(index, 1);
        // this.setState({ players: array });
    }

    render(){
        return(
            <div className={classes.FootballField}>
                <Navigation />
                <CardHolder imgSrc={this.state.players.map(el => el.sourceImage)} 
                    PlayerName={this.state.players.map(el => el.name)} 
                            deleteImage={(el) => this.deleteHandler(el)}/>
            </div>
        )
    }
}

export default FootballField;