import React from 'react';
import {View, StatusBar, Text, TextInput, Image,Alert, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Style} from '../styles/Style';
import firebase from 'react-native-firebase';
import {States} from '../controllers/States';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state={
      email: 'a',
      password: 'a',
      awaitingAnswer: false
    }
  }

  loginButton(state){
      this.setState({awaitingAnswer: true})
      firebase.auth()
      .signInWithEmailAndPassword(state.email, state.password)
      .then( ()=> States.loginOrRegister(1))
      .catch( err => {this.setState({awaitingAnswer: false})} )
  }

  registerButton(){
    this.props.navigation.navigate(
      'Register',
      {}
    )
  }

  render() {
    return(
      <View style={{backgroundColor:'#e8e8e8', flex:1, alignItems: 'center', justifyContent: 'center', paddingLeft: 15, paddingRight: 15}}>
        <Image
          style={{width: 140, height: 140}}
          source={require('../images/globe.png')}
        />
        <Text style={{marginTop: 40, fontSize: 25}}>Login</Text>
        <TextInput
          style={Style.textInput1}
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
          style={Style.textInput2}
          secureTextEntry={true}
          placeholder='Password'
          placeholderTextColor= {'#8E8E8E'}
          onChangeText={ (password) => this.setState({password: password}) }
          underlineColorAndroid='transparent'
          returnKeyType='go'
          autoCorrect={false}
          autoCapitalize='none'
          ref={(input)=>this.secondTextInput = input}
        />
        {this.state.awaitingAnswer === false ?
          <TouchableOpacity
            style={Style.buttonLogin}
            onPress={() => {this.loginButton(this.state)} }
          >
            <Text style={Style.buttonLoginText}>LOGIN</Text>
          </TouchableOpacity>
        :
          <View style={{padding: 10, paddingTop: 32}}>
            <ActivityIndicator size="large" color="#FFFFFF" />
          </View>
        }
        <TouchableOpacity
          style={{padding: 10, paddingTop: 25}}
          onPress={()=> {this.registerButton()}}
        >
          <Text>Dont have an account? <Text style={{fontWeight: 'bold'}}>Register</Text></Text>
        </TouchableOpacity>

      </View>
    )
  }
}

module.exports={
  Login,
}
