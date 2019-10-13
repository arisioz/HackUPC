import React from 'react';
import {View, StatusBar, Text} from 'react-native';
import {Slider} from '../views/Slider';
import {LoginOrRegisterController} from '../controllers/LoginOrRegisterController';
import {States} from '../controllers/States';

class IllustrationsController extends React.Component {

  constructor(props){
    super(props);
    this.state={
      skip: 0,
    }
    States.topView=this;
  }

  render() {
      switch (this.state.skip) {
        case 0:
          return (
            <Slider navigation={this.props.navigation}/>
          );
        case 1:
          return (
            <LoginOrRegisterController navigation={this.props.navigation}/>
          );
     }
  }
}

module.exports = {
  IllustrationsController
}
