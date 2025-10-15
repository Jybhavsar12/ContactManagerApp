import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AddContactScreen from '../screens/AddContact/AddContactScreen';
import ContactDetailsScreen from '../screens/ContactDetails/ContactDetailsScreen';
import ContactListScreen from '../screens/ContactList/ContactListScreen';
import { Colors } from '../styles/globalStyles';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ContactList"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.text.light,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="ContactList"
          component={ContactListScreen}
          options={{
            title: 'Contacts',
          }}
        />
        <Stack.Screen
          name="ContactDetails"
          component={ContactDetailsScreen}
          options={{
            title: 'Contact Details',
          }}
        />
        <Stack.Screen
          name="AddContact"
          component={AddContactScreen}
          options={({route}) => ({
            title: route.params?.contact ? 'Edit Contact' : 'Add Contact',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
