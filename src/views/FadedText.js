import React, { Component } from 'react';
import { Animated, View, TouchableOpacity, Text } from 'react-native';

const quotes1 = ['Agriculture and Forestry is the second biggest industry to affect climate change behind Energy','Production of animal products generates up to 78% of Agriculture\'s greenhouse emissions','Agriculture accounts for 14% of total greenhouse gas emissions','By 2020 greenhouse gas emissions from road transport are predicted to be more than two thirds higher than their 1990'];
const quotes2 = ['Reducing your consumption of animal protein by half can cut your diet\'s carbon footprint by more than 40%','Eating a plant-based diet saves 0.8 tonnes of CO2 equivalent a year','Living car-free saves about 2.4 tonnes of CO2 equivalent per year','Swapping old incandescent light bulbs for new compact fluorescent lights reduces electrical energy usage by 25%','Wash dishes in cold water and hang dry clothing to save 0.21 tonnes of CO2 equivalent per year','Avoid transatlantic flights (1.6 tonnes of CO2 equivalent saved per roundtrip transatlantic flight)'];
var index = 0;
var index2=0;
class FadedText extends Component {


    constructor(props) {
       super(props);

       this.state = {fadeIn: new Animated.Value(0),
                     fadeOut: new Animated.Value(1),
                     text: "Hello",
                    };
    }

    componentDidMount(){



        this.fadeOut();
        this.fadeIn();

        let timerId11=setInterval(() =>index=(index+1)%quotes1.length, 5800)
        let timerId12=setInterval(() =>this.setState({text: quotes1[index]}), 9000)

        let timerId21=setInterval(() =>index2=(index2+1)%quotes2.length, 5800)
        let timerId22=setInterval(() =>this.setState({text: quotes2[index2]}), 9000)
        }



    fadeIn() {
        index++;
        Animated.timing(
          this.state.fadeIn,
          {
            toValue: 1,
            duration: 3000,
          }
        ).start(() => this.fadeOut2());
    }

    fadeOut2() {
        Animated.timing(
          this.state.fadeIn,
          {
            toValue: 0,
            duration: 7000,
          }
        ).start(() => this.fadeIn());
    }



    //fadeOut animations

   fadeOut() {
    Animated.timing(
       this.state.fadeOut,
       {
         toValue: 0,
         duration: 6000,
       }
    ).start(() => this.fadeIn2());
  }
  fadeIn2() {
    Animated.timing(
       this.state.fadeOut,
       {
         toValue: 1,
         duration: 3000,
       }
    ).start(() => this.fadeOut());
  }

  render() {

    return(
       <View style={{flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center', top:50}}>
           <Animated.View style={{opacity: this.state.fadeOut}}>
              <View>
                <Text
                style = {{textAlign: 'left', color: 'black', top:300,marginRight:30,marginLeft:5}}>
                {quotes1[index]}</Text>
             </View>
           </Animated.View>
           <Animated.View style={{opacity: this.state.fadeIn}}>
              <View>
                <Text
                style = {{textAlign: 'right', color: 'black', top:350,marginLeft:30,marginRight:5}}>
                {quotes2[index2]}</Text>
             </View>
           </Animated.View>
       </View>
   );

 }
}
 module.exports =
 {
     FadedText
 }
