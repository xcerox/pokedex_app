import React from 'react';
import { View } from 'react-native';

import { BarChart, Grid, YAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';

const PokeStats = ({ data }) => {

  if (data.length <= 0) {
    console.log(`isEmpty`);
    return null;
  }

  return (
    <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
      <YAxis
        data={data}
        // yAccessor={(obj) => {
        //   console.log(`obj: ${JSON.stringify(obj)}`);
        //   return obj.index;
        // }}
        scale={scale.ScaleBand}
        contentInset={{ top: 10, bottom: 10 }}
        spacing={0.2}
        // formatLabel={(value, index) => {
        //   console.log(`value: ${value} \n index: ${index}`);
        //   return data[index].name;
        // }
        //}
        formatLabel={ item => {
          console.log(JSON.stringify(item));
          return item.name
        } }
      />
      <BarChart
        style={{ flex: 1, marginLeft: 8 }}
        data={data}
        horizontal={true}
        yAccessor={({ item }) => item.value}
        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        contentInset={{ top: 10, bottom: 10 }}
        spacing={0.2}
        gridMin={0}
        gridMax={250}
      >

      </BarChart>
    </View>
  )
}

export default PokeStats;