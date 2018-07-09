import React, { Component } from 'react';
import {
	StatusBar,
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';


class WelcomeScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar
            		translucent
					backgroundColor="transparent"
					barStyle="light-content"
					networkActivityIndicatorVisible
				/>

				<Text style={{color: '#FFF'}}>This is the welcome screen of the application</Text>

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
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default WelcomeScreen;