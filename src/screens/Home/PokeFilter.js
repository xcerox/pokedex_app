import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, Modal, Button, TextInput } from 'react-native';

class PokeFilter extends PureComponent {


  render() {

    const { modalVisible, onCloseModal } = this.props;

    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={onCloseModal}
        >
          <View style={styles.container}>
            <View style={styles.input_container}>
              <TextInput style={styles.input}/>
            </View>
            <View style={styles.bottons_container}>
              <Button onPress={onCloseModal} title="Apply" />
              <Button onPress={onCloseModal} color="red" title="Close" />
            </View>
            <TextInput />

          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    height: '100%'
  },
  input_container: {
    flex: 1,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: '#fff',

  },
  bottons_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '30%'
  }
});

export default PokeFilter;
