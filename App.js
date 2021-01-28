/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Home from './src/screens/Home';
import Navigation from './src/nivagation';
import AntDesign from 'react-native-vector-icons/AntDesign';



const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1,backgroundColor:'black'}}>
        <Navigation/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
