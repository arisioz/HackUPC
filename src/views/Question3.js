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
import Question3Text from "./Question3Text"

class Question3Screen extends React.Component{
render() {
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#fffeea'}}>
       <View style={{ width: 150, height: 150, marginTop: 40}}>
         <Image
           style={styles.container}
           source={require('../assets/meat.png')}
           resizeMode={'contain'}
          />
        </View>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', paddingTop: 250}}>
            <Question3Text selectedItem2={this.props.navigation.state.params.selectedItem} selectedItem1={this.props.navigation.state.params.selectedItem1}/>
        </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150
  },
});

module.exports= {
  Question3Screen
}
