import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const PokeGame = ({ game, styleTemp }) => (
  <View style={[styles.game_container, { padding: 0 }]}>
    <Text style={styles.title}>{game.title}</Text>
    <Text
      style={styles.description}
      numberOfLines={styleTemp.numberOfLines}
    >{game.description}</Text>
  </View>
);


class PokeBox extends PureComponent {

  state = {
    moreTouched: false
  }

  renderSeparator = () => (
    <View style={styles.row_separator} />
  )

  onTouchMore = () => {
    this.setState(prev => {
      return {
        moreTouched: !prev.moreTouched
      }
    }, () => {
      if (!this.state.moreTouched) {
        this.flatListRef.scrollToIndex({animated: false, index: 0});
      }
    });
  }

  render() {
    const { games } = this.props;

    const styleTemp = {
      height: 60,
      numberOfLines: 1,
      top: 210,
      text: 'More'
    }

    if (this.state.moreTouched) {
      styleTemp.height = 200;
      styleTemp.numberOfLines = 0;
      styleTemp.top = 140;
      styleTemp.text = 'Less';
    } 

    return (
      <View style={[styles.box_container, { height: styleTemp.height, top: styleTemp.top }]}>
        <View style={styles.game_container}>
          <FlatList
            data={games}
            renderItem={({ item }) => <PokeGame game={item} styleTemp={styleTemp} />}
            scrollEnabled={this.state.moreTouched}
            showsVerticalScrollIndicator={this.state.moreTouched}
            ItemSeparatorComponent={this.renderSeparator}
            keyExtractor={item => item.title}
            ref={(ref) => { this.flatListRef = ref; }}
          />
          <Text style={styles.more} onPress={this.onTouchMore}>{styleTemp.text}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box_container: {
    backgroundColor: '#fff',
    position: 'absolute',
    alignSelf: 'center',
    height: 60, //200
    width: '70%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    top: 210,
  },
  game_container: {
    padding: 7,
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 10,
    textAlign: 'justify',
    marginBottom: 5,
  },
  more: {
    fontSize: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: '#00bbd6'
  },
  row_separator: {
    height: 1,
    backgroundColor: "#CED0CE",
    marginBottom: 3,
  }
});

export default PokeBox;