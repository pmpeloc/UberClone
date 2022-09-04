import React from 'react';
import { StyleSheet, SafeAreaView, View, Image } from 'react-native';
import tw from 'twrnc';

import { NavOptions } from '../components/ui';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
