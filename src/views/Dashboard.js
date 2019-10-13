import React from 'react';
import {Alert,View, StatusBar, Text, TouchableOpacity, Image,AsyncStorage} from 'react-native';
import {FadedText} from './FadedText'
import * as Progress from 'react-native-progress'
var choice1,choice2,choice3;
var res1,res2,res3;
var prog=0;

class Dashboard extends React.Component {
  progress=async()=>{
  try{
  choice1=await AsyncStorage.getItem('choice1');
  }
  catch(error){console.error();}

  switch (choice1) {
    case '0km - Didn\'t Use A Car':
      res1=0
      break;
    case '0-10 km':
      res1=1
      break;
    case '10-30km':
      res1=2
      break;
    case 'More than 30km':
      res1=3
      break;
    default:
      res1=1
  }


  try{
  choice2=await AsyncStorage.getItem('choice2');
  }
  catch(error){console.error();}

  switch (choice2) {
    case 'None':
      res2=0
      break;
    case '1 to 4':
      res2=1
      break;
    case '5 to 10':
      res2=2
      break;
    case 'More than 10':
      res2=3
      break;
    default:
      res2=1
  }



  try{
  choice3=await AsyncStorage.getItem('choice3');
  }
  catch(error){console.error();}

  switch (choice3) {
    case 'Haven\'t had any meat':
      res3=0
      break;
    case '1 to 2 times':
      res3=1
      break;
    case '3 to 5 times':
      res3=2
      break;
    case 'More than 5 times':
      res3=3
      break;
    default:
    res3=1
  }

  prog=choice1
}


  render() {
    return(


      <View style={{flex:1}}>

      <FadedText/>
      <Image
        style={{width: 140, height: 140, start:110,bottom:70}}
        source={require('../images/globe.png')}
      />
      <Progress.Bar progress={0.66} width={200} height={10} start={75}/>
      <Text style={{fontSize:18,textAlign:'center'}}> Your climate change effect is: Moderate</Text>
        <View style={{flex: 4}}/>
        <View style={{flex: 1,flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{borderRadius: 10, height: 70, width: 90, backgroundColor: 'orange', flexDirection: 'row'}}
            onPress={()=>{ this.props.navigation.navigate('Progress')}}
          />
          <TouchableOpacity
            style={{borderRadius: 10, height: 70, width: 90, backgroundColor: 'blue', flexDirection: 'row', marginLeft: 20, marginRight: 20}}
            onPress={()=>{ this.props.navigation.navigate('Improve')}}
          />
          <TouchableOpacity
            style={{borderRadius: 10, height: 70, width: 90, backgroundColor: 'red', flexDirection: 'row'}}
            onPress={()=>{ this.props.navigation.navigate('Contribute')}}
          />

        </View>

      </View>
    )
  }
}

module.exports={
  Dashboard,
}
