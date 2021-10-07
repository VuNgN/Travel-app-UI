import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../assets/colors/colors';

const activitiesCategories = ({item, index, length}) => {
  return (
    <View
      style={[styles.container, index !== length - 1 && styles.marginRight]}>
      <Text style={[styles.text, index === 0 && {color: colors.orange}]}>
        {item.text}
      </Text>
    </View>
  );
};

export default activitiesCategories;

const styles = StyleSheet.create({
  container: {},
  marginRight: {
    marginRight: 30,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: colors.gray,
  },
});
