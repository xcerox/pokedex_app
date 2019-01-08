import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { pokemonsFetch } from '../../store/actions/poke-actions';
import Loading from '../../components/Loading/Loading';
import PokeList from './PokeList';

class Home extends PureComponent {

  static navigationOptions = {
    title: 'PokeDex',
    headerRight: (<Icon name='magnify' color='#03A9F4' size={30}/>)
  }

  componentDidMount() {
    if (!this.props.dataLoaded) { 
      this.props.pokemonsFetch();
    } 
  }
  
  render() {
    const { isLoading } = this.props;
    return (
      <Loading show={isLoading}>
        <PokeList />
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