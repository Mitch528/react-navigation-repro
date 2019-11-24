import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';

enableScreens();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const NativeStack = createNativeStackNavigator();

function MyScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Screen 2" onPress={() => navigation.navigate('Screen 2')} />
    </View>
  )
}

function MyScreen2() {
  return (
    <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: '#ccc' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Test Screen 2</Text>
      </View>
    </ScrollView>
  )
}

function MyNativeStack() {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="Screen 1" component={MyScreen} />
      <NativeStack.Screen name="Screen 2" component={MyScreen2} />
    </NativeStack.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen 1" component={MyScreen} />
      <Stack.Screen name="Screen 2" component={MyScreen2} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationNativeContainer>
      <Tab.Navigator
        screenOptions={(props) => {
          const state = (props.route as any).state || { index: 0 };

          return {
            tabBarVisible: state.index > 0 ? false : true
          };
        }}
      >
        <Tab.Screen name="Native" component={MyNativeStack} />
        <Tab.Screen name="Normal" component={MyStack} />
      </Tab.Navigator>
    </NavigationNativeContainer>
  );
}
