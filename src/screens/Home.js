import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import GridView from 'react-native-super-grid';

import { pokemonsFetch, pokemonsUpdatePage } from '../store/actions/poke-actions';
import Loading from '../components/Loading';
import PokeCard from '../components/PokeCard';
import { onScrollGetBotton } from '../utils/functions/infinityScroll';


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
    if (this.props.pages.length <= 0) { 
      this.props.pokemonsFetch();
    } 
  }

  onScroll = ({ nativeEvent }) => {
    if (onScrollGetBotton(nativeEvent)) {
      this.props.pokemonsUpdatePage();
    }
  }

  render() {
    const { isLoading, pages } = this.props;

    return (
      <Loading isLoading={isLoading}>
        <GridView
          itemDimension={130}
          items={pages}
          renderItem={item => <PokeCard pokemon={item} />}
          initialNumToRender={76}
          keyExtractor={item => item[0].name }
          onScrollEndDrag={this.onScroll}
        />
      </Loading>
    )
  }
}

function mapStateToProps({ pokemons }) {
  return { 
    pages : pokemons.pages,
    isLoading: pokemons.isLoading,
  }
}

export default connect(mapStateToProps, { pokemonsFetch, pokemonsUpdatePage })(Home);