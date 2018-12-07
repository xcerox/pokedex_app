import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import GridView from 'react-native-super-grid';

import { pokemonsFetch } from '../store/actions/poke-actions';
import Loading from '../components/Loading';
import PokeCard from '../components/PokeCard';


const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    paddingTop: 25,
  },
});

class Home extends PureComponent {

  static navigationOptions = {
    title: 'PokeDex'
  }

  componentDidMount() {
    this.props.pokemonsFetch();
  }

  goDetail = () => {
    this.props.navigation.push('Detail');
  }

  render() {
    const { list, isLoading } = this.props.pokemons;

    return (
      <Loading isLoading={isLoading}>
        <GridView
          itemDimension={130}
          items={list}
          renderItem={item => <PokeCard goDetail={this.goDetail} pokemon={item} />}
        />
      </Loading>
    )
  }
}

function mapStateToProps({ pokemons }) {
  return { pokemons }
}

export default connect(mapStateToProps, { pokemonsFetch })(Home);