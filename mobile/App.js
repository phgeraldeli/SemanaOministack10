import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { StatusBar, YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      <Routes />
    </>
  );
}