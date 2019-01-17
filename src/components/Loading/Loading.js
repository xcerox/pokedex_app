import React from 'react';
import { View} from 'react-native';
import Spinner from './Spinner';

const Loading = ({ show, children }) => (
  <View  >
    {
      show ? (<Spinner />) : (children)
    }
  </View>
)

export default Loading;