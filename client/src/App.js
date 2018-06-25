import React, { Component } from 'react';
import FootballField from './containers/FootballField/FootballField';

import classes from './App.css'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <FootballField />
      </div>
    );
  }
}

export default App;
