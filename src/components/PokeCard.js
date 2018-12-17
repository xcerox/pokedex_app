import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { debounce } from 'lodash';

const PokeCard = ({ pokemon, navigation }) => {

  // const goDetail = debounce(() => {
  //   navigation.navigate('Detail', { pokemon });
  // }, 400);

  const goDetail = () => {
    navigation.navigate('Detail', { pokemon });
  }

  return (
    <View>
      <TouchableOpacity onPress={goDetail}>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            {/* <ImageBackground style={styles.pokeImageBackground} source={{uri: 'https://cdn2.iconfinder.com/data/icons/gaming-stroke-icons/104/22-gaming-pokemon-pokeball-512.png'}}> */}
            <Image style={styles.pokeImage} source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.code}.png` }} />
            {/* </ImageBackground> */}
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{`#${pokemon.code}`}</Text>
            <Text style={styles.descriptionText}>{pokemon.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    borderRadius: 5,
    height: 80,
    backgroundColor: '#fff',
  },
  descriptionText: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  imageContainer: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokeImage: {
    width: 50,
    height: 60,
  },
  pokeImageBackground: {
    width: 70,
    height: 70,
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: '20%',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 5,
    backgroundColor: '#BDBDBD',
  }
});


export default withNavigation(PokeCard);