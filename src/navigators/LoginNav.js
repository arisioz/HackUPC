import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Login} from '../views/Login';
import {Register} from '../views/Register';
import {Dashboard} from '../views/Dashboard';

class LoginNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <LoginNavigator parentView={this}/>
    );
  }
}

const LoginNavigator = createStackNavigator({
  Login: {screen: Login,navigationOptions: {header: null}},
  Register: {screen: Register,navigationOptions: {header: null}}
},{
  mode: 'card',
  navigationOptions: params => ({
    gesturesEnabled: true,
    gesturesDirection: 'inverted',
  }),
  transitionConfig: () => ({
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;
      const width = layout.initWidth;
      return {
        opacity: position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [ 0, 1, 0],
        }),
        transform: [{
          translateX: position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [width, 0, -width],
          }),
        }]
      };
    },
    headerTitleInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      return {
        opacity: position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [ 0, 1, 0],
        }),
        transform: [{
          translateX: position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [-50, 0, 50],
          }),
        }]
      };
    },
  }),
});

//const LoginNavigator = createAppContainer(RootStack);

module.exports={
  LoginNav,
  LoginNavigator
}
