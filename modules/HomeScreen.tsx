import {View, Text, Linking} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   const getUrlAsync = async () => {
  //     // Get the deep link used to open the app
  //     const initialUrl = await Linking.getInitialURL();
  //     console.log('initial url', initialUrl);

  //     // const {pathname} = new URL(initialUrl ?? '');
  //     // console.log(pathname, 'pathname');

  //     // if (initialUrl?.includes('profile')) navigation.navigate('Profile');

  //     // The setTimeout is just for testing purpose
  //   };

  //   getUrlAsync();
  // }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
