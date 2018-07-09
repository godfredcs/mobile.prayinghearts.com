import React, {Component} from 'react';
import {
    StyleSheet,
    LayoutAnimation,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    View,
    Text,
} from 'react-native';

import MessageBox from '../_components/MessageBox';
import ChatCard from '../_components/ChatCard';

class ChatScreen extends Component {
    state = {keyboardShow: false};

    componentDidMount() {
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

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
                    <View style={styles.touchDismiss}>
                        <ScrollView style={{flex: 1}}>
                                <ChatCard />
                                <ChatCard received />
                                <ChatCard />
                                <ChatCard received />
                                <ChatCard />
                                <ChatCard received />
                                <ChatCard />
                                <ChatCard received />
                                <ChatCard />
                                <ChatCard received />
                                <ChatCard />
                                <ChatCard received />
                                <ChatCard />
                                <ChatCard received />
                                <ChatCard />
                                <ChatCard received />
                                <ChatCard />
                        </ScrollView>
                        <View>
                            <MessageBox />
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
})

export default ChatScreen;