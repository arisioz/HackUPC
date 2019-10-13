import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import RadioButton  from "./RadioButton.js"
import Question1Text from "./Question1Text"

class Question1Screen extends React.Component{
render() {
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#fffeea'}}>
       <View style={{ width: 150, height: 150, marginTop: 40}}>
         <Image
           style={styles.container}
           source={require('../assets/car.png')}
           resizeMode={'contain'}
          />
        </View>
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center',paddingTop:250}}>
            <Question1Text navigation={this.props.navigation}/>
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
  Question1Screen
}
