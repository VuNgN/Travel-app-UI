import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import colors from '../assets/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Component
import DiscoverCategories from '../components/homeComponents/DiscoverCategories';
import DiscoverItem from '../components/homeComponents/DiscoverItem';
// Data
import discoverCategoriesData from '../assets/datas/discoverCategoriesData';
// import discoverData from '../assets/datas/discoverData';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.userSwrapper}>
        <TouchableOpacity activeOpacity={0.7} style={styles.menuIconSwrapper}>
          <Ionicons name="menu" color={colors.darktext} size={32} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.userImageSwrapper}>
          <Image
            source={require('../assets/images/person.png')}
            style={styles.userImage}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <Text style={styles.textH1Title}>Discover</Text>
      <FlatList
        data={discoverCategoriesData}
        renderItem={({item, index}) => (
          <DiscoverCategories
            item={item}
            index={index}
            length={discoverCategoriesData.length}
          />
        )}
        keyExtractor={item => item.id}
        horizontal
        style={styles.discoverCategories}
      />
      {/* <FlatList
        data={discoverData}
        renderItem={({item, index}) => (
          <DiscoverItem
            item={item}
            index={index}
            length={discoverData.length}
          />
        )}
        keyExtractor={item => item.id}
        horizontal
        style={styles.discoverCategories}
      /> */}
    </View>
  );
};

export default HomeScreen;

const _MARGIN_LEFT = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.while,
  },
  userSwrapper: {
    marginTop: 30,
    flexDirection: 'row',
    marginHorizontal: _MARGIN_LEFT,
    alignItems: 'center',
  },
  menuIconSwrapper: {},
  userImageSwrapper: {
    marginLeft: 'auto',
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  userImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  textH1Title: {
    marginTop: 30,
    marginLeft: _MARGIN_LEFT,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.darktext,
  },
  discoverCategories: {
    paddingLeft: _MARGIN_LEFT,
    marginTop: 20,
  },
});
