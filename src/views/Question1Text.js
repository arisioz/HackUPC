import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import RadioButton  from "./RadioButton.js"

export default class Question1Text extends Component {

  constructor() {
    super();

    this.state = {
      radioItems:
        [
          {
            label: "0km - Didn't Use A Car",
            size: 30,
            color: '#1EA6C6',
            selected: false
          },

          {
            label: '0-10 km',
            color: '#1EA6C6',
            size: 30,
            selected: false,
          },

          {
            label: '10-30km',
            size: 30,
            color: '#1EA6C6',
            selected: false
          },

          {
            label: 'More than 30km',
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

  changeActiveRadioButton(index) {
    this.state.radioItems.map((item) => {
      item.selected = false;
    });

    this.state.radioItems[index].selected = true;

    this.setState({ radioItems: this.state.radioItems }, () => {
      this.setState({ selectedItem: this.state.radioItems[index].label });
    });
  }

  nextScreen(selectedItem){
    //Alert.alert(selectedItem)
    this.props.navigation.navigate(
      'Question2Screen',
      {selectedItem}
    )
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.ColorHolder }]} >
        <View style={{paddingBottom: 25, paddingTop: 10}}>
          <Text style={[styles.question]}> How many km have you driven</Text>
          <Text style={[styles.question]}>  with your car today? </Text>
        </View>
        {
          this.state.radioItems.map((item, key) =>
            (
              <View  key={key} >
              <RadioButton button={item} onClick={this.changeActiveRadioButton.bind(this, key)} />
              </View>
            ))
        }

        <TouchableOpacity
          style={styles.selectedTextHolder}
          onPress={()=> this.nextScreen(this.state.selectedItem)}
        >
          <Text style={styles.selectedText}>Next</Text>
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
      //top: 5,
      color: '#000'
    }
  });
