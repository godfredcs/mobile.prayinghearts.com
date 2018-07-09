import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default ({title, color="#000", fontSize=18, fontWeight="bold", onPress, backgroundColor="transparent", containerStyle}) => (
    <TouchableOpacity onPress={onPress} style={[{paddingVertical: 10, marginVertical: 10, backgroundColor}, containerStyle]}>
        <Text style={{color, fontSize, fontWeight, textAlign: 'center'}}>{title}</Text>
    </TouchableOpacity>
);