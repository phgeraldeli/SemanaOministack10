import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { StatusBar } from 'react-native'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#FFF'
  }
});