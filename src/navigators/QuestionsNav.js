import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Question1Screen} from '../views/Question1';
import {Question2Screen} from '../views/Question2';
import {Question3Screen} from '../views/Question3';

class QuestionsNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <QuestionsNavigator parentView={this}/>
    );
  }
}

const QuestionsNavigator = createStackNavigator({
  Question1Screen: {screen: Question1Screen,navigationOptions: {header: null}},
  Question2Screen: {screen: Question2Screen,navigationOptions: {header: null}},
  Question3Screen: {screen: Question3Screen,navigationOptions: {header: null}}
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

module.exports={
  QuestionsNav,
  QuestionsNavigator
}
