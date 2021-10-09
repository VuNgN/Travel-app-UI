import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TravelScreen = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TravelScreen;

const styles = StyleSheet.create({});
