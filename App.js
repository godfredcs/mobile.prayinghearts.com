import { Notifications } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import configStore from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigation from './src/navigation';
import registerForPushNotificationsAsync from './src/services/Push_notifications';

const {store, persistor} = configStore();

export default class App extends Component {
  componentDidMount() {
		registerForPushNotificationsAsync();

		Notifications.addListener(notification => {
			const { data: { text }, origin } = notification;

			if (origin === 'received' && text) {
				Alert.alert(
					'New Push Notification',
					text,
					[{ text: 'OK.' }]
				);
			}
		});
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="dark-content"
              networkActivityIndicatorVisible={true}
            />
            <RootNavigation />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
