  import React, { Component } from 'react';
  import {
    View,
    StyleSheet,
  } from 'react-native';
import FormInput from './FormInput';
  export default class App extends Component {
    render() {
      return (
        <View style={styles.container}>          
              <FormInput />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });