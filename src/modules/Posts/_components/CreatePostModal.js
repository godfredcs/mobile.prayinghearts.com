import React from 'react';
import {View, Text, Modal, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {connect} from 'react-redux';

import {Spinner, CustomInput, CustomMultilineInput, CustomButton} from '../../../components';
import Colors from '../../../constants/Colors';

class CreatePostModal extends React.Component {
    state = {loading: false}

	render() {
		const {title, visible, close} = this.props;

		return (
			<Modal
				visible={visible}
				onShow={() => console.log('onShow is nice')}
				transparent
				animationType="slide"
				onRequestClose={() => {}}
				onDismiss={() => console.log('onDismiss is nice')}
			>
				<KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                        <View style={{backgroundColor: '#FFF', margin: 20, borderRadius: 5, marginTop: 20}}>
                            <TouchableOpacity style={styles.closeButton} onPress={ close }>
                                <Text style={{fontSize: 30}}>&times;</Text>
                            </TouchableOpacity>

                            <View style={{paddingTop: 30}}>
                                <Text style={styles.modalTitle}>{ title }</Text>
                            </View>

                            <View style={{margin: 20}}>
                                <CustomInput placeholder="Title" />
                            </View>

                            <View style={{marginHorizontal: 20, marginTop: 20}}>
                                <CustomMultilineInput placeholder="Write your post here ..." />
                            </View>

                            <View style={{margin: 20}}>
                                {
                                    this.state.loading
                                        ? <Spinner />
                                        : <CustomButton
                                            title="Post"
                                            color="#FFF"
                                            containerStyle={{borderRadius: 30}}
                                            backgroundColor={Colors.secondary}
                                            onPress={() => this.setState({loading: true})}
                                        />
                                }
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</Modal>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		position: 'relative',
		justifyContent: 'center',
		backgroundColor: 'rgba(0 , 0 , 0 , 0.75)'
	},
	modalTitle: {
		fontSize: 20,
		fontWeight: '600',
		alignSelf: 'center'
	},
	label: {
		fontSize: 18,
		color: '#000',
	},
	input: {
		fontSize: 16,
		color: '#000',
	},
	error: {
		textAlign: 'center',
		color: 'red',
		paddingBottom: 5,
		fontSize: 16,
	},
	closeButton: {
		position: 'absolute',
		paddingVertical: 5,
		paddingHorizontal: 10,
		right: 0,
		top: 0,
		zIndex: 10,
	}
};

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, {})(CreatePostModal);