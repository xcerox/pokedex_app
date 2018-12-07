import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Detail extends PureComponent {

  static navigationOptions = {
    title: 'Pokemon'
  }

  render() {
    return (
      <View>
        <Text>Hola</Text>
      </View>
    )
  }
}

export default Detail;