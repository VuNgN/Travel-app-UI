import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ActivitiesCategories = ({item, index, length}) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View
        style={[
          styles.container,
          index !== 0 && styles.marginLeft,
          index === length - 1 && styles.marginRight,
        ]}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={item.image} />
        </View>
        <Text style={styles.text} numberOfLines={1}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActivitiesCategories;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 50,
  },
  marginLeft: {
    marginLeft: 20,
  },
  marginRight: {
    marginRight: 40,
  },
  imageWrapper: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {},
  text: {
    marginTop: 5,
  },
});
