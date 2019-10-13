import React from 'react';
import {YellowBox, Image, StyleSheet, View, Text, Alert, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Dimensions, Animated, Button, Math} from 'react-native';
import {States} from '../controllers/States';

const { width } = Dimensions.get('window');
const win = Dimensions.get('window');
const ratio = win.width/1080; //541 is actual image width

var promoSlider;

class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      vehicle: 0,
      flag: false
    }

    YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);

    promoSlider = [
      {
        photo : require('../images/globe.png'),
        header : 'Welcome to ClimAid!',
        details : 'The app to help you determine your impact on climate change and how to improve it!',
        height: 975
      }, {
        photo : require('../images/globe.png'),
        header: 'How to Use',
        details : 'Sign up for an account and answer a few questions to start your journey for a greener world!',
        height: 975
      }, {
        photo : require('../images/globe.png'),
        header: 'Help us reach out',
        details : 'Please share the word out and share any ideas to raise more awareness about climate change!',
        height: 972
      }
    ]
  }

  scrollX = new Animated.Value(0)

  skipIllustrations(){
    States.skipIllustrations()
  }

  render() {

  let position = Animated.divide(this.scrollX, width);

    return (
      <View style={{flex: 1,backgroundColor: '#e8e8e8'}}>

        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'transparent'}}>

          <View style={{flex: 1, backgroundColor: 'transparent'}}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: this.scrollX } } }]
              )}
              scrollEventThrottle={25}
            >
              {promoSlider.map((source, i) => {
                return(
                  <View key={i} style={{width: width, backgroundColor: 'transparent', alignItems: 'center'}}>
                    <View style={{height: source.height * ratio, alignItems: 'center',justifyContent: 'center',width: '100%',backgroundColor: 'transparent'}}>
                      <Image
                        source={source.photo}
                        style={{width: '100%'}}
                        resizeMode={'contain'}
                        fadeDuration={0}
                      />
                    </View>
                    <View style={{paddingTop: 50, paddingBottom: 10}}>
                      <Text style={{fontWeight: 'bold', color: '#395E81', fontSize: 16, textAlign: 'center'}}>{source.header}</Text>
                    </View>
                    <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 10}}>
                      <Text style={{textAlign: 'center', color: '#395E81', fontSize: 15}}>{source.details}</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <View style={{ flexDirection: 'row', backgroundColor: 'transparent'}}>
            {promoSlider.map((_, i) => {
              let opacity = position.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp'
              });
              return(
                <Animated.View
                  key={i}
                  style={{height: 10, width: 10, margin: 8, borderRadius: 5 , opacity, backgroundColor: '#395E81'}}
                />
              );
            })}
          </View>

          <View style={{paddingTop: 30, paddingBottom: 20}}>
            <TouchableOpacity
              onPress={() => this.skipIllustrations()}
            >
              <Text style={{color: '#395E81', fontWeight: 'bold', fontSize: 15}}>CLOSE</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    )
  }
}

module.exports={
  Slider
}
