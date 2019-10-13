import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

import Question2Text  from "./Question2Text"

class Question2Screen extends React.Component{

render() {
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#fffeea'}}>
        <View style={{ width: 150, height: 150, marginTop: 40}}>
       <Image
         style={styles.container}
         source={require('../assets/bottle.png')}
         resizeMode={'contain'}
        />
        </View>
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center', paddingTop: 250}}>
          <Question2Text navigation={this.props.navigation} selectedItem1={this.props.navigation.state.params.selectedItem}/>
        </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
  },
});

module.exports= {
  Question2Screen
}
