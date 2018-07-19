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
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 50}}>Praying Hearts</Text>

				<Button
                    title="Next"
                    onPress={() => this.props.navigation.navigate('LoginScreen')}
                />
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
	}
});

export default WelcomeScreen;