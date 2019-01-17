import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

const styles = StyleSheet.create({
  middle: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const Spinner = ({style}) => (
    <View style={[styles.middle, style]}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Loading</Text>
    </View>
)

export default Spinner;