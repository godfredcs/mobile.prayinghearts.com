import React, {Component} from 'react';
import {
    StyleSheet,
    StatusBar,
    LayoutAnimation,
    KeyboardAvoidingView,
    Keyboard,
    ScrollView,
    View
} from 'react-native';
import {connect} from 'react-redux';

import MessageBox from '../_components/MessageBox';
import ChatCard from '../_components/ChatCard';

import {messageChanged, sendNewMessage} from '../_store/ChatActions';

class ChatScreen extends Component {
    state = {keyboardShow: false};

    componentDidMount() {
        StatusBar.setBarStyle('light-content');

        this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    componentDidUpdate() {
        LayoutAnimation.spring();
    }

    _keyboardDidShow = () => this.setState({keyboardShow: true});

    _keyboardDidHide = () => this.setState({keyboardShow: false});

    renderChatCards = () => {
        return this.props.messages.map((message, index) => <ChatCard key={index} message={message.message} received={message.received} />);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
                    <View style={styles.touchDismiss}>
                        <ScrollView style={{flex: 1}}>
                                <ChatCard />
                                <ChatCard received />
                                {this.renderChatCards()}
                        </ScrollView>
                        <View>
                            <MessageBox
                                message_to_send={this.props.message_to_send}
                                messageChanged={this.props.messageChanged}
                                sendNewMessage={this.props.sendNewMessage}
                            />
                            <View style={{height: this.state.keyboardShow ? 60 : 0}}/>
                        </View>
                    </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    touchDismiss: {
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
});

const mapStateToProps = state => {
    const {message_to_send, messages, messages_increased} = state.chat; // Note: messages_increased is very crucial for autorefresh of messages.

    return {message_to_send, messages, messages_increased};
};

export default connect(mapStateToProps, {messageChanged, sendNewMessage})(ChatScreen);