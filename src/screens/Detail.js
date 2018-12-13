import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { URL_IMG_HD } from '../utils/constans/url';
import { pokemonDetailFetch } from '../store/actions/detail-action';
import Loading from '../components/Loading/Loading';
import PokeStats from '../components/PokeStats';

class Detail extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('pokemon', { name: '' }).name,
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    };
  };

  componentDidMount() {
    const pokemonId = this.props.navigation.getParam('pokemon', { code: 0 }).code;
    this.props.pokemonDetailFetch(pokemonId);
  }

  render() {

    const { isLoading, info } = this.props.pokemon;
    const pokemonId = this.props.navigation.getParam('pokemon', { code: 0 }).code;

    return (
      <ScrollView style={styles.main_container}>
        <View style={styles.poke_photo_container}>
          <Image style={styles.pokeImage} source={{ uri: `${URL_IMG_HD}${pokemonId}.png` }} />
        </View>
        <Loading show={isLoading}>
          <View style={styles.types_container}>
            <Text>{ info.types }</Text>
          </View>
          <View style={styles.stats_container}>
            <PokeStats data={info.stats} />
          </View>
        </Loading>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%'
  },
  poke_photo_container: {
    backgroundColor: '#4CAF50', //(4CAF50 | 388E3C) green | #0288D1 blue
    height: 200,
    padding: 7,
    borderBottomWidth: 5,
    borderColor: '#388E3C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokeImage: {
    width: 180,
    height: 200,
  },
  types_container: {
    backgroundColor: '#BDBDBD', //(4CAF50 | 388E3C) green | #0288D1 blue
    height: 40,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stats_container: {
    backgroundColor: '#fff', //(4CAF50 | 388E3C) green | #0288D1 blue
    height: 240,
  }
});

function mapStateToProps({ pokemon }) {
  return { pokemon }
}

export default connect(mapStateToProps, { pokemonDetailFetch })(Detail);