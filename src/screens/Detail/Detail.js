import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Loading from '../../components/Loading/Loading';
import PokeHeader from './PokeHeader';
import PokeBox from './PokeBox';
import PokeStats from './PokeStats';

import { pokemonDetailFetch } from '../../store/actions/detail-action';

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
    const { isLoading, info} = this.props.pokemon;

    return (
      <ScrollView style={styles.main_container}
        showsVerticalScrollIndicator={false}
      >
        <Loading show={isLoading}>
          <PokeHeader info={info} />
          <View style={styles.stats_container}>
            <PokeStats data={info.stats} />
          </View>
          <PokeBox />
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
  types_container: {
    backgroundColor: '#BDBDBD',
    height: 40,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stats_container: {
    paddingTop: 30,
    backgroundColor: '#fff', 
    height: 240,
  },
});

function mapStateToProps({ pokemon }) {
  return { pokemon }
}

export default connect(mapStateToProps, { pokemonDetailFetch })(Detail);