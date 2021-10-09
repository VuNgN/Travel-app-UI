import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/colors/colors';

const activitiesCategories = ({item, index, length, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('TravelStack', {item: item});
      }}>
      <ImageBackground
        source={item.image}
        style={[
          styles.background,
          index !== 0 && styles.marginLeft,
          index === length - 1 && styles.marginRight,
        ]}
        imageStyle={{borderRadius: 20}}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.locationWrapper}>
          <MaterialIcons name="location-on" color={colors.while} size={20} />
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default activitiesCategories;

const styles = StyleSheet.create({
  background: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
  },
  marginLeft: {
    marginLeft: 20,
  },
  marginRight: {
    marginRight: 40,
  },
  title: {
    marginHorizontal: 10,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.while,
  },
  locationWrapper: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 7,
    marginBottom: 17,
    alignItems: 'center',
  },
  location: {
    marginLeft: 5,
    fontSize: 12,
    fontFamily: 'Lato-Bold',
    color: colors.while,
  },
});
