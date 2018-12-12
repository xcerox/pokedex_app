import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import GridView from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { pokemonsFetch, pokemonsUpdatePage } from '../store/actions/poke-actions';
import Loading from '../components/Loading/Loading';
import PokeCard from '../components/PokeCard';
import LoadingFooter from '../components/Loading/LoadingFooter';

class Home extends PureComponent {

  static navigationOptions = {
    title: 'PokeDex',
    headerRight: (<Icon name='magnify' color='#03A9F4'/>)
  }

  componentDidMount() {
    if (this.props.pages.length <= 0) { 
      this.props.pokemonsFetch();
    } 
  }

  onEndReached = () => {
    if (this.props.hasNext) {
      this.props.pokemonsUpdatePage();
    }
  }

  render() {
    const { isLoading, pages, hasNext } = this.props;

    return (
      <Loading show={isLoading}>
        <GridView
          itemDimension={130}
          items={pages}
          renderItem={item => <PokeCard pokemon={item} />}
          initialNumToRender={76}
          keyExtractor={item => item[0].name }
          onEndReached={this.onEndReached}
          ListFooterComponent={() => <LoadingFooter show={hasNext}/>}
        />
      </Loading>
    )
  }
}

function mapStateToProps({ pokemons }) {
  return { 
    pages : pokemons.pages,
    isLoading: pokemons.isLoading,
    hasNext: pokemons.hasNext,
  }
}

export default connect(mapStateToProps, { pokemonsFetch, pokemonsUpdatePage })(Home);