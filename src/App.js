import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import store from './store';

import Home from './screens/Home/Home';
import Detail from './screens/Detail/Detail';

const Navigation = createStackNavigator({
  Home: Home,
  Detail: Detail,
  }, 
  {
    initialRouteName: "Home"
  }
);

const App = () => (
  <Provider store={store} >
    <Navigation />
  </Provider>
);

export default App;