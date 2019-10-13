import React from 'react';
import {View, StatusBar, Text} from 'react-native';
import {QuestionsNav} from '../navigators/QuestionsNav';
import {LoginNav} from '../navigators/LoginNav';
import {DashNav} from '../navigators/DashNav';
import {States} from '../controllers/States';

class LoginOrRegisterController extends React.Component {

  constructor(props){
    super(props);
    this.state={
      flow: 0
    }
    States.mainView=this;
  }

  render() {
      switch (this.state.flow) {
        case 0:
          return (
            <LoginNav navigation={this.props.navigation}/>
          );
        case 1:
          return (
            <DashNav navigation={this.props.navigation}/>
          );
        case 2:
          return (
            <QuestionsNav navigation={this.props.navigation}/>
          );
     }
  }
}

module.exports = {
  LoginOrRegisterController
}
