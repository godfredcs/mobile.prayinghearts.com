import React from 'react';
import {View, Text, Modal, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {connect} from 'react-redux';

import {createPost, postTitleChanged, postBodyChanged} from '../_store/PostsActions';

import {Spinner, CustomInput, CustomMultilineInput, CustomButton} from '../../../components';
import Colors from '../../../constants/Colors';

class CreatePostModal extends React.Component {
    state = {loading: false}

    submitPost = () => {
        Keyboard.dismiss();

        const {_id, post_title, post_body} = this.props;

        this.props.createPost({user: _id, title: post_title, body: post_body});
    }

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
                        <View style={styles.innerContainer}>
                            <TouchableOpacity style={styles.closeButton} onPress={ close }>
                                <Text style={{fontSize: 30}}>&times;</Text>
                            </TouchableOpacity>

                            <View style={{paddingTop: 30}}>
                                <Text style={styles.modalTitle}>{ title }</Text>
                            </View>

                            <View style={{margin: 20}}>
                                <CustomInput
                                    value={this.props.post_title}
                                    placeholder="Title"
                                    onChangeText={value => this.props.postTitleChanged(value)}
                                />
                            </View>

                            <View style={{marginHorizontal: 20, marginTop: 20}}>
                                <CustomMultilineInput
                                    value={this.props.post_body}
                                    placeholder="Write your post here ..."
                                    onChangeText={value => this.props.postBodyChanged(value)}
                                />
                            </View>

                            <View style={{margin: 20}}>
                                {
									this.props.creating_post_loading

                                        ? <Spinner />

                                        : <CustomButton
                                            title="Post"
                                            color="#FFF"
                                            containerStyle={{borderRadius: 30}}
                                            backgroundColor={Colors.secondary}
                                            onPress={this.submitPost}
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
	innerContainer: {
		backgroundColor: '#FFF',
		margin: 20,
		marginTop: 20,
		borderRadius: 5
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
    const {creating_post_loading, post_title, post_body} = state.posts;
    const {user: {_id}} = state.auth;

	return {creating_post_loading, _id, post_title, post_body};
};

export default connect(mapStateToProps, {createPost, postTitleChanged, postBodyChanged})(CreatePostModal);