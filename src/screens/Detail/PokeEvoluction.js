import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';

import { URL_IMG_HD } from '../../utils/constans/url';

const PokeChain = ({ pokemon }) => (
    <View style={styles.poke_chain}>
        <View style={styles.poke_photo_container}>
            <FastImage
                resizeMode={FastImage.resizeMode.contain}
                style={styles.pokeImage}
                source={{
                    uri: `${URL_IMG_HD}${pokemon.code}.png`,
                    priority: FastImage.priority.high
                }}
            />
        </View>
        <View style={styles.poke_chain_title_container}>
            <Text style={styles.poke_chain_title}>{`#${pokemon.code}`}</Text>
            <Text style={styles.poke_chain_title}>{pokemon.name}</Text>
        </View>
    </View>
);


class PokeEvoluction extends PureComponent {

    render() {
        const { chain } = this.props;
        const deviceWidth = Dimensions.get('window').width; //(100*chain.length / 3)

        const chainWidth = (deviceWidth / 3) * chain.length;

        return (
            <View style={styles.main_container}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>Chain Evoluction</Text>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={[styles.chain_container, { width: chainWidth }]}>
                        {
                            chain.map(pokemon => <PokeChain pokemon={pokemon} key={pokemon.name} />)
                        }
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 180,
        flex: 1,
        flexDirection: 'column',
    },
    title_container: {
        backgroundColor: '#fff',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ddd',
        borderTopWidth: 2,
        borderBottomWidth: 2,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    chain_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderBottomLeftRadius: 5,
    },
    poke_chain: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        borderWidth: 2,
        borderColor: '#ddd',
        height: 120,
        width: 100,
        borderBottomLeftRadius: 5,
    },

    poke_photo_container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',

    },
    pokeImage: {
        width: 90,
        height: 110,
    },
    poke_chain_title_container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 20,
        justifyContent: 'space-around',
        backgroundColor: 'transparent',
        borderBottomLeftRadius: 5,
        backgroundColor: '#a7bfcb',
    },
    poke_chain_title: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },

});


export default PokeEvoluction;




