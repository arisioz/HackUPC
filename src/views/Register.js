import React from 'react';
import {View, StatusBar, Text, TextInput, Image, Alert, TouchableOpacity} from 'react-native';
import {Style} from '../styles/Style';
import firebase from 'react-native-firebase';
import {States} from '../controllers/States';

class Register extends React.Component {

  constructor(props){
    super(props);
    this.state={
      email: ' ',
      password: null,
      confirmPass: null
    }
  }

  handleSignup(state) {
    if (this.state.password === this.state.confirmPass){
      const {email, password} = state
      firebase.auth()
        .createUserWithEmailAndPassword(email,password)
        .then( ()=> States.loginOrRegister(2))
        .catch( err =>
        Alert.alert(
          'Error',
          `${err}`,
        )
      )
    } else {
      Alert.alert(
        'Password Error',
        'Make sure your password inputs match',
      );
    }
  }

  render() {
    return(
      <View style={{backgroundColor:'#e8e8e8', flex:1, alignItems: 'center', justifyContent: 'center', paddingLeft: 15, paddingRight: 15}}>
        <Image
          style={{width: 140, height: 140}}
          source={require('../images/registerGlobe.png')}
         />
         <Text style={{marginTop: 25, fontSize: 25}}>Sign Up</Text>
        <TextInput
          style={Style.textInput10}
          placeholder='E-Mail'
          placeholderTextColor= {'#8E8E8E'}
          onChangeText={ (email) => this.setState({email: email}) }
          underlineColorAndroid='transparent'
          returnKeyType='next'
          onSubmitEditing={()=>this.secondTextInput.focus()}
          blurOnSubmit={false}
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='default'
        />
        <TextInput
          style={Style.textInput3}
          secureTextEntry={true}
          placeholder='Password'
          placeholderTextColor= {'#8E8E8E'}
          onChangeText={ (password) => this.setState({password: password}) }
          underlineColorAndroid='transparent'
          returnKeyType='next'
          onSubmitEditing={()=>this.thirdTextInput.focus()}
          blurOnSubmit={false}
          autoCorrect={false}
          autoCapitalize='none'
          ref={(input)=>this.secondTextInput = input}
        />
        <TextInput
          style={Style.textInput3}
          secureTextEntry={true}
          placeholder='Confirm Password'
          placeholderTextColor= {'#8E8E8E'}
          onChangeText={ (confirmPass) => this.setState({confirmPass: confirmPass}) }
          underlineColorAndroid='transparent'
          returnKeyType='go'
          autoCorrect={false}
          autoCapitalize='none'
          ref={(input)=>this.thirdTextInput = input}
        />
        <TouchableOpacity
          style={Style.buttonLogin}
          onPress={() => {this.handleSignup(this.state)} }
        >
          <Text style={Style.buttonLoginText}>Register</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

module.exports={
  Register,
}
