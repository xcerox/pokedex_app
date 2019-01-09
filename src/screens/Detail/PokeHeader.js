import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import { URL_IMG_HD } from '../../utils/constans/url';
import { getColorTypes } from '../../utils/functions/colorTypes';

const Type = ({ style, color }) => {

  if (color == null) {
    return null;
  }

  const { name, code } = color;

  return (
    <View style={[style, { backgroundColor: code }]}>
      <View style={styles.poke_Type_Container}>
        <Text style={styles.pokeType}>{name}</Text>
      </View>
    </View>
  )
}


class PokeHeader extends PureComponent {

  render() {
    const { info } = this.props;
    const colors = getColorTypes(info.types);

    return (
      <View style={styles.main_container}>
        <View style={styles.type_container}>
          <Type style={styles.left_container} color={colors.primary} />
          <Type style={styles.right_container} color={colors.secundary} />
        </View>
        <View style={styles.poke_photo_container}>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            style={styles.pokeImage}
            source={{
              uri: `${URL_IMG_HD}${info.code}.png`,
              priority: FastImage.priority.high
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 240,
    flexDirection: 'column',
  },
  type_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '85%'
  },
  left_container: {
    flex: 1,
    backgroundColor: '#4CAF50',
  },
  right_container: {
    flex: 1,
    backgroundColor: '#000',
  },
  poke_photo_container: {
    alignSelf: 'center',
    position: 'absolute',
  },
  pokeImage: {
    width: 160,
    height: 180,
  },
  pokeType: {
    color: '#fff',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 5,
    alignSelf: 'center',
    fontSize: 10,
    fontWeight: 'bold'
  },
  poke_Type_Container: {
    justifyContent: 'center',
    top: 180
  }
});

export default PokeHeader;