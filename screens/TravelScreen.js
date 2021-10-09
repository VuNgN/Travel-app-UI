import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

const height = Dimensions.get('window').height;

const TravelScreen = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.imageBig}
        style={styles.background}
        imageStyle={{flex: 1}}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <SafeAreaView style={styles.backIconBotton}>
            <MaterialIcons
              name="arrow-back-ios"
              color={colors.while}
              size={20}
            />
          </SafeAreaView>
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <MaterialIcons name="location-on" color={colors.while} size={20} />
            <Text style={styles.location}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.footerWrapper}>
        <View style={styles.heartBotton}>
          <TouchableOpacity activeOpacity={0.7} style={styles.activeOpacity}>
            <MaterialCommunityIcons
              name="heart"
              color={colors.orange}
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.textH2Title}>Description</Text>

          <Text
            style={[styles.description, height <= 700 && {display: 'none'}]}
            numberOfLines={4}>
            {item.description}
          </Text>
          <View style={styles.infoWrapper}></View>
          <View style={styles.info}>
            <View>
              <Text style={styles.infoTitle}>PRICE</Text>
              <View style={styles.infoDescription}>
                <Text style={styles.infoOrange}>${item.price}</Text>
                <Text style={styles.infoGray}>/person</Text>
              </View>
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>RATING</Text>
              <View style={styles.infoDescription}>
                <Text style={styles.infoOrange}>${item.rating}</Text>
                <Text style={styles.infoGray}>/5</Text>
              </View>
            </View>
            <View>
              <Text style={styles.infoTitle}>DURATION</Text>
              <View style={styles.infoDescription}>
                <Text style={styles.infoOrange}>${item.duration}</Text>
                <Text style={styles.infoGray}> hours</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.bookBotton}>
            <Text style={styles.bookBottonContent}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TravelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.while,
  },
  background: {
    height: height * 0.6,
    justifyContent: 'space-between',
  },
  backIconBotton: {
    marginTop: 50,
    marginLeft: 20,
    width: 40,
    height: 40,
    borderColor: colors.while,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: {
    marginLeft: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.while,
    width: '70%',
  },
  locationWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  location: {
    color: colors.while,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    marginLeft: 5,
  },
  footerWrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: -20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: 'relative',
  },
  heartBotton: {
    position: 'absolute',
    height: 64,
    width: 64,
    borderRadius: 64,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    top: -25,
    right: 40,
    zIndex: 99999,
  },
  activeOpacity: {
    height: 64,
    width: 64,
    borderRadius: 64,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    zIndex: 99999,
  },
  descriptionWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  textH2Title: {
    marginTop: 30,
    marginLeft: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.darktext,
  },
  description: {
    marginTop: 20,
    marginHorizontal: 20,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
  },
  infoWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  info: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
  },
  infoContent: {
    flex: 1,
    alignItems: 'center',
  },
  infoTitle: {
    color: colors.gray,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  infoDescription: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  infoOrange: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.orange,
  },
  infoGray: {
    color: colors.gray,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  bookBotton: {
    marginHorizontal: 20,
    marginVertical: 25,
    height: 55,
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  bookBottonContent: {
    color: colors.while,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
});
