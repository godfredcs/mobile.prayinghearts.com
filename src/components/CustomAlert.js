import React from 'react';
import {
    StyleSheet,
    Modal,
    View,
    Text
} from 'react-native';

export default ({visible=false, close}) => (
    <Modal
        transparent
        visible={ visible }
        animationType="slide"
        onRequestClose={() => {}}
    >
        <View style={styles.container}>
            <View style={styles.card}>
                <Text>Hello react native</Text>
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    card: {
        backgroundColor: '#FFF'
    }
});