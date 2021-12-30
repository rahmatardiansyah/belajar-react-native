import React from 'react';
import { View, ScrollView } from 'react-native';
import Flexbox from './pages/FlexBox';
import StyleComponent from './pages/StyleComponent';
import Position from './pages/Position';
import PropDinamis from './pages/PropDinamis'
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import CallAPIVanilla from './pages/CallAPIVanilla';
import LocalAPI from './pages/LocalAPI';
import Crud from './pages/Crud';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <Flexbox /> */}
        {/* <StyleComponent /> */}
        {/* <Position /> */}
        {/* <PropDinamis /> */}
        {/* <StateDinamis /> */}
        {/* </ScrollView> */}
        {/* <Communication /> */}
        {/* <CallAPIVanilla /> */}
        {/* <LocalAPI /> */}
        {/* <Crud /> */}
        <Crud />
      </ScrollView>
    </View>
  )
}

export default App;
