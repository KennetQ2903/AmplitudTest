import React from 'react';
import {Alert, Button, SafeAreaView, View, ViewStyle} from 'react-native';
import {useLDClient} from './app/hooks/useLDClient';

const App = () => {
  const {ldClient} = useLDClient();

  const evaluateFlag = async () => {
    try {
      // Call LaunchDarkly with the feature flag key you want to evaluate.
      const boolFlag = await ldClient?.boolVariation('TEST_FLAG', true, 'TEST');

      if (boolFlag) {
        Alert.alert('LD Server Response', 'TEST_FLAG is true');
      } else {
        Alert.alert('LD Server Response', 'TEST_FLAG is false');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SafeAreaView>
      <View style={$style}>
        <Button title="Evaluate Flag" onPress={evaluateFlag} />
      </View>
    </SafeAreaView>
  );
};

const $style: ViewStyle = {
  justifyContent: 'center',
  gap: 20,
};

export default App;
