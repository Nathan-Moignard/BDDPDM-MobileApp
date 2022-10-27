/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider as PaperProvider, Button} from 'react-native-paper';

const App = () => {
  const style = StyleSheet.create({
    cameraButton: {
      width: 150,
    },
  });

  return (
    <PaperProvider>
      <View>
        <Button
          style={style.cameraButton}
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
    </PaperProvider>
  );
};

export default App;
