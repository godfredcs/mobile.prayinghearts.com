import React, { Component } from 'react';
import {
	StatusBar,
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';

import Colors from '../../../constants/Colors';


class WelcomeScreen extends Component {
	componentDidMount() {
		StatusBar.setBarStyle('light-content');

		setTimeout(() => {
			this.props.navigation.navigate('LoginScreen');
		}, 3000);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 50}}>Praying Hearts</Text>
				<Text style={styles.welcome}>Welcome</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.secondary,
		alignItems: 'center',
		justifyContent: 'center'
	},
	welcome: {
		fontSize: 30,
		color: '#CCC',
		fontWeight: 'bold',
		textAlign: 'center',
		margin: 20
	}
});

export default WelcomeScreen;