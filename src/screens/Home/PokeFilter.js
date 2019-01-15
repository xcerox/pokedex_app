import React, { PureComponent } from 'react';
import { View, StyleSheet, Modal, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { pokemonFilterApply, pokemonFilterClear } from '../../store/actions/pokeFilter-actions';

class PokeFilter extends PureComponent {

  state = {
    filter: ''
  }

  onApplyPress = () => {
    this.props.pokemonFilterApply(this.state.filter);
    this.props.onCloseModal();
  }

  onClearPress = () => {
    this.onTextChange('');
    this.props.pokemonFilterClear();
    this.props.onCloseModal();
  }

  onClosePress = () => {
    this.onTextChange('');
    this.props.onCloseModal();
  }

  onTextChange = value => {
    this.setState({filter: value})
  }

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
              <TextInput style={styles.input} value={this.state.filter} onChangeText={this.onTextChange}/>
            </View>
            <View style={styles.bottons_container}>
              <Button onPress={this.onApplyPress} title="Apply" />
              <Button onPress={this.onClearPress} title="Clear" />
              <Button onPress={this.onClosePress} color="red" title="Close" />
            </View>
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
    paddingHorizontal: '20%',
  },
  input: {
    color: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  bottons_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '30%'
  }
});

export default connect(null, {pokemonFilterApply, pokemonFilterClear})(PokeFilter);
