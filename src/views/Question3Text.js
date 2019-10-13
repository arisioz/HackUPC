import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';
import {States} from '../controllers/States';

import RadioButton  from "./RadioButton.js"

export default class Question1Text extends Component {

  constructor() {
    super();

    this.state = {
      radioItems:
        [
          {
            label: "Haven't had any meat",
            size: 30,
            color: '#1EA6C6',
            selected: false
          },

          {
            label: '1 to 2 times',
            color: '#1EA6C6',
            size: 30,
            selected: false,
          },

          {
            label: '3 to 5 times',
            size: 30,
            color: '#1EA6C6',
            selected: false
          },

          {
            label: 'More than 5 times',
            size: 30,
            color: '#1EA6C6',
            selected: false
          }
        ], selectedItem: ''
    }
  }

  componentDidMount() {
    this.state.radioItems.map((item) => {
      if (item.selected == true) {
        this.setState({ selectedItem: item.label });
      }
    });
  }

  async goToDashboard(selectedItem3){
    //Alert.alert(this.props.selectedItem1)
    //Alert.alert(this.props.selectedItem2)
    //Alert.alert(selectedItem3)
    AsyncStorage.setItem('choice1', (this.props.selectedItem1)).catch(error=>{console.log(error)});
    AsyncStorage.setItem('choice2', (this.props.selectedItem2)).catch(error=>{console.log(error)});
    AsyncStorage.setItem('choice3', (selectedItem3)).catch(error=>{console.log(error)});
    States.loginOrRegister(1)
  }

  changeActiveRadioButton(index) {
    this.state.radioItems.map((item) => {
      item.selected = false;
    });

    this.state.radioItems[index].selected = true;

    this.setState({ radioItems: this.state.radioItems }, () => {
      this.setState({ selectedItem: this.state.radioItems[index].label });
    });
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.ColorHolder }]} >
        <View style={{paddingBottom: 25, paddingTop: 10}}>
          <Text style={[styles.question]}> How many times have you </Text>
          <Text style={[styles.question]}>      eaten meat this week? </Text>
        </View>

        {
          this.state.radioItems.map((item, key) =>
            (
              <RadioButton key={key} button={item} onClick={this.changeActiveRadioButton.bind(this, key)} />
            ))
        }
        <TouchableOpacity
          style={styles.selectedTextHolder}
          onPress={()=> this.goToDashboard(this.state.selectedItem)}
        >
          <Text style={styles.selectedText}>Finish</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      alignItems: 'stretch',
      height: 650
    },
    selectedTextHolder: {
      position: 'relative',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 15,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    selectedText: {
      fontSize: 18,
      color: '#000',
      paddingTop: 20
    },
    question: {
      fontSize: 25,
      fontWeight: 'bold',
      alignItems: 'center',
      top: 5,
      color: '#000'
    }
  });
