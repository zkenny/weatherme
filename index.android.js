/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Icon } from 'native-base';


export default class weatherme extends Component {
  getWeather() {
    var url = `http://api.openweathermap.org/data/2.5/find?q=$barcelona&units=metric`
    return fetch(url).then((response) => response.json());
  }

  setWeather() {
    this.getWeather().then((response) => {
      var result = response.list[0]
    });
    return <Text> {result.main.temp} </Text>;
  }

  render() {
    return (
      <View>
        {this.setWeather()}
        <Text>I'm a potato</Text>
        }
      </View>
    );
  }
}


AppRegistry.registerComponent('weatherme', () => weatherme);
