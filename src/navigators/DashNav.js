import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Improve} from '../views/Improve';
import {Contribute} from '../views/Contribute';
import {Dashboard} from '../views/Dashboard';
import {Progress} from '../views/Progress';

class DashNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <DashNavigator parentView={this}/>
    );
  }
}

const DashNavigator = createStackNavigator({
  Dashboard: {screen: Dashboard,navigationOptions: {header: null}},
  Improve: {screen: Improve,navigationOptions: {header: null}},
  Contribute: {screen: Contribute,navigationOptions: {header: null}},
  Progress: {screen: Progress,navigationOptions: {header: null}}
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
          translateY: position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [width, 0, 0],
          }),
        }]
      };
    },
  }),
});

//const LoginNavigator = createAppContainer(RootStack);

module.exports={
  DashNav,
  DashNavigator
}
