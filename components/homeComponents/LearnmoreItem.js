import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors/colors';

const LearnmoreItem = ({item, index, length}) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <ImageBackground
        source={item.image}
        style={[
          styles.background,
          index !== 0 && styles.marginLeft,
          index === length - 1 && styles.marginRight,
        ]}
        imageStyle={{borderRadius: 20}}>
        <Text style={styles.text}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default LearnmoreItem;

const styles = StyleSheet.create({
  background: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
  },
  marginLeft: {
    marginLeft: 20,
  },
  marginRight: {
    marginRight: 40,
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.while,
    marginLeft: 10,
    marginBottom: 20,
  },
});
