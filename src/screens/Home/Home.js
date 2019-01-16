import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { pokemonsFetch } from '../../store/actions/poke-actions';
import Loading from '../../components/Loading/Loading';
import PokeList from './PokeList';
import PokeFilter from './PokeFilter';

class Home extends PureComponent {

  static navigationOptions = ({ navigation }) => {

    const onOpenFilter = navigation.getParam('onOpenFilter');

    return {
      title: 'PokeDex',
      headerRight: (<Icon.Button name='magnify' color='#03A9F4' backgroundColor="transparent" size={30} onPress={onOpenFilter} />)
    }
  }

  state = {
    modalVisible: false,
  };

  onCloseModal = () => {
    this.setState(prevState => {
      return {
        modalVisible: !prevState.modalVisible
      }
    });
  }

  componentDidMount() {
    const { navigation, dataLoaded, pokemonsFetch } = this.props;
    navigation.setParams({ onOpenFilter: this.onOpenFilter });

    if (!dataLoaded) {
      pokemonsFetch();
    }
  }

  onOpenFilter = () => {
    this.onCloseModal();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <Loading show={isLoading}>
        <PokeList />
        <PokeFilter modalVisible={this.state.modalVisible} onCloseModal={this.onCloseModal} />
      </Loading>
    )
  }
}

function mapStateToProps({ pokemons }) {
  return {
    isLoading: pokemons.isLoading,
    dataLoaded: (pokemons.data.length > 0),
  }
}

export default connect(mapStateToProps, { pokemonsFetch })(Home);