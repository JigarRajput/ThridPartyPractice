/**
 * Jai Ganesh
 */
import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  Linking,
  View,
  Animated,
  Touchable,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {CreateScreen, HomeScreen, ProfileScreen, VideosScreen} from './modules';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 70,
            position: 'absolute',
            bottom: 10,
            left: 16,
            right: 16,
            borderRadius: 40,
            display: 'flex',
            backgroundColor: '#15253f',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: 'white',
          },
        }}>
        <Tab.Screen
          options={{
            tabBarButton(props) {
              return (
                <TabButton
                  {...props}
                  image={require('./assets/home_icon.png/')}
                  title={'Home'}
                />
              );
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarButton(props) {
              return (
                <TabButton
                  {...props}
                  image={require('./assets/profile.png/')}
                  title={'Profile'}
                />
              );
            },
          }}
          name="Profile"
          component={ProfileScreen}
        />
        <Tab.Screen
          options={{
            tabBarButton(props) {
              return (
                <TabButton
                  {...props}
                  image={require('./assets/add.png/')}
                  title={'Create'}
                />
              );
            },
          }}
          name="Create"
          component={CreateScreen}
        />
        <Tab.Screen
          options={{
            tabBarButton(props) {
              return (
                <TabButton
                  {...props}
                  image={require('./assets/play.png/')}
                  title={'Videos'}
                />
              );
            },
          }}
          name="Videos"
          component={VideosScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const TabButton = (props: any) => {
  console.log('props recieved', props);
  const {image, onPress, accessibilityState, title} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  const [yValue] = useState(new Animated.Value(0));

  useEffect(() => {
    if (focused) {
      Animated.spring(yValue, {
        toValue: -20,
        useNativeDriver: true,
      }).start();
    } else {
      yValue.setValue(0);
    }
  }, [focused]);

  const tabBarButtonStyle = StyleSheet.create({
    buttonImg: {
      width: 45,
      height: 45,
      borderWidth: 2,
      borderRadius: 50,
      backgroundColor: 'white',
      borderColor: 'white',
      tintColor: '#0c0726',
      resizeMode: 'contain',
      marginBottom: 5,
    },
    buttonImgInactive: {
      backgroundColor: 'white',
      width: 40,
      height: 40,
      borderWidth: 2,
      borderRadius: 20,
      borderColor: 'white',
      tintColor: 'black',
    },

    buttonContainerMain: {
      justifyContent: 'center',
      flex: 1,
      borderRadius: 16,
      alignItems: 'center',
    },

    buttonAnimationStyle: {
      transform: [{translateY: yValue}],
      display: 'flex',
      alignItems: 'center',
    },
    titleTextInActive: {
      display: 'none',
    },
    titleTextActive: {
      display: 'flex',
      color: 'white',
    },
  });

  return (
    <TouchableOpacity
      style={tabBarButtonStyle.buttonContainerMain}
      onPress={onPress}>
      <Animated.View
        ref={viewRef}
        style={tabBarButtonStyle.buttonAnimationStyle}>
        <Image
          source={image}
          style={
            focused
              ? tabBarButtonStyle.buttonImg
              : tabBarButtonStyle.buttonImgInactive
          }
          resizeMode="cover"
        />
        <Text
          style={
            !focused
              ? tabBarButtonStyle.titleTextInActive
              : tabBarButtonStyle.titleTextActive
          }>
          {title}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default App;
