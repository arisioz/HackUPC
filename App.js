import React from 'react';
import {View, StatusBar, Text} from 'react-native';
import {IllustrationsController} from './src/controllers/IllustrationsController';

export default class App extends React.Component {

  render() {
    return(
      <View style={{flex:1}}>
        <IllustrationsController />
      </View>
    )
  }
}
