import React, { PureComponent } from 'react';
import { View, StyleSheet, Modal, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { pokemonFilterApply, pokemonFilterClear } from '../../store/actions/pokeFilter-actions';

const ClearBottom = ({ value, onClearPress, style }) => {

  if (value == null || value == '') {
    return null;
  }

  return (
    <Icon.Button name='close' color='#fff' backgroundColor="transparent" size={25} onPress={onClearPress} style={style} />
  )

}
class PokeFilter extends PureComponent {

  constructor(props) {
    super(props);

    this.filterField = React.createRef();

    this.state = {
      filter: ''
    }
  }

  onClearPress = () => {
    this.onTextChange('');
  }

  onClosePress = () => {
    this.props.onCloseModal();
  }

  onTextChange = value => {
    this.setState({ filter: value }, () => {
      this.props.pokemonFilterApply(this.state.filter);
    })
  }

  componentDidMount() {
    if (this.filterField.current) {
      this.filterField.current.focus();
    }
  }

  render() {

    const { modalVisible, onCloseModal } = this.props;

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={onCloseModal}
        >
          <View style={styles.container}>
            <View style={styles.input_container}>
              <Icon style={styles.icon_finder} name='magnify' color='#fff' backgroundColor="transparent" size={25} />
              <TextInput style={styles.input} value={this.state.filter} onChangeText={this.onTextChange} autoFocus={true} ref={this.filterField} />
              <ClearBottom style={styles.icon_clear} value={this.state.filter} onClearPress={this.onClearPress} />
            </View>
            <View style={styles.bottons_container}>
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
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
  },
  input_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '20%',
  },
  icon_finder: {
    marginTop: 13,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
  },
  icon_clear: {
    marginTop: 15,
  },
  input: {
    color: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 2,
    textDecorationStyle: 'solid'
  },
  bottons_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '30%'
  }
});

export default connect(null, { pokemonFilterApply, pokemonFilterClear })(PokeFilter);
