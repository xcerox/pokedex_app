import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';


class PokeBox extends PureComponent {

  render() {

    return (
      <View style={styles.box_container}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  box_container: {
    backgroundColor: '#fff',
    position: 'absolute',
    alignSelf: 'center',
    height: 60,
    width: '70%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    top: 170
  }});

export default PokeBox;