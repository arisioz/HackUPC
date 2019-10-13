import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

import RadioButton  from "./RadioButton.js"

export default class Question2Text extends Component {

  constructor() {
    super();

    this.state = {
      radioItems:
        [
          {
            label: "None",
            size: 30,
            color: '#1EA6C6',
            selected: false
          },

          {
            label: '1 to 4',
            color: '#1EA6C6',
            size: 30,
            selected: false,
          },

          {
            label: '5 to 10',
            size: 30,
            color: '#1EA6C6',
            selected: false
          },

          {
            label: 'More than 10',
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

  nextScreen(selectedItem, selectedItem1){
    this.props.navigation.navigate(
      'Question3Screen',
      {selectedItem, selectedItem1}
    )
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.ColorHolder }]} >
        <View style={{paddingBottom: 25, paddingTop: 10}}>
          <Text style={[styles.question]}> How many plastic bottles </Text>
          <Text style={[styles.question]}> have you used this week? </Text>
        </View>

        {
          this.state.radioItems.map((item, key) =>
            (
              <RadioButton key={key} button={item} onClick={this.changeActiveRadioButton.bind(this, key)} />
            ))
        }
        <TouchableOpacity
          style={styles.selectedTextHolder}
          onPress={()=> this.nextScreen(this.state.selectedItem, this.props.selectedItem1)}
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
      top: 5,
      color: '#000'
    }
  });
