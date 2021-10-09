import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
//assets
import colors from '../assets/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Component
import DiscoverCategories from '../components/homeComponents/DiscoverCategories';
import DiscoverItem from '../components/homeComponents/DiscoverItem';
import ActivitiesCategories from '../components/homeComponents/ActivitiesCategories';
import LearnmoreItem from '../components/homeComponents/LearnmoreItem';
// Data
import discoverCategoriesData from '../assets/datas/discoverCategoriesData';
import discoverData from '../assets/datas/discoverData';
import activitiesData from '../assets/datas/activitiesData';
import learnMoreData from '../assets/datas/learnMoreData';

const HomeScreen = ({navigation}) => {
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
      <ScrollView
        onScroll={event => {
          console.log(event.currentTarget);
        }}>
        <Text style={styles.textH1Title}>Discover</Text>
        <View>
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
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.discoverItemWrapper}>
          <FlatList
            data={discoverData}
            renderItem={({item, index}) => (
              <DiscoverItem
                item={item}
                index={index}
                length={discoverData.length}
                navigation={navigation}
              />
            )}
            keyExtractor={item => item.id}
            horizontal
            style={styles.discoverItem}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={styles.textH2Title}>Activites</Text>
        <View style={styles.activitiesWrapper}>
          <FlatList
            data={activitiesData}
            renderItem={({item, index}) => (
              <ActivitiesCategories
                item={item}
                index={index}
                length={activitiesData.length}
              />
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.activities}
          />
        </View>
        <Text style={styles.textH2Title}>Learn More</Text>
        <View style={styles.learnmoreWrapper}>
          <FlatList
            data={learnMoreData}
            renderItem={({item, index, length}) => (
              <LearnmoreItem
                item={item}
                index={index}
                length={learnMoreData.length}
              />
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.learnMore}
          />
        </View>
      </ScrollView>
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
    marginBottom: 20,
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
    marginTop: 10,
    marginLeft: _MARGIN_LEFT,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.darktext,
  },
  textH2Title: {
    marginTop: 30,
    marginLeft: _MARGIN_LEFT,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.darktext,
  },
  discoverCategories: {
    paddingLeft: _MARGIN_LEFT,
    marginTop: 20,
  },
  discoverItemWrapper: {
    marginTop: 20,
  },
  discoverItem: {
    paddingLeft: _MARGIN_LEFT,
  },
  activitiesWrapper: {
    marginTop: 20,
  },
  activities: {
    paddingLeft: _MARGIN_LEFT,
  },
  learnmoreWrapper: {
    marginTop: 20,
    marginBottom: 20,
  },
  learnMore: {
    paddingLeft: _MARGIN_LEFT,
  },
});
