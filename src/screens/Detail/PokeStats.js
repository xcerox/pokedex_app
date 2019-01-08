import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';

class PokeStats extends PureComponent {

  render() {
    const { data } = this.props;

    if (data.length <= 0) {
      return null;
    }

    return (
      <View style={styles.container}>
        <VictoryChart
          maxDomain={{ x: 255 }}
          theme={VictoryTheme.material}
          domainPadding={{ y: 10 }}
          padding={{ left: 110, top: 2, bottom: 5, right: 20 }}
          height={200}
        >
          <VictoryAxis
            dependentAxis
          />
          <VictoryBar
            barWidth={20}
            cornerRadius={10}
            data={data}
            style={{
              data: {
                fill: (item) => {
                  switch (item.x) {
                    case "speed":
                      return '#FA92B2';
                    case "special-defense":
                      return '#A7DB8D';
                    case "special-attack":
                      return '#9DB7F5';
                    case "defense":
                      return '#FAE078';
                    case "attack":
                      return '#F5AC78';
                    case "hp":
                      return '#FF5959';
                  }
                }
              }
            }}
            horizontal
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }  
            }} />
        </VictoryChart>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10
  }
});

export default PokeStats;