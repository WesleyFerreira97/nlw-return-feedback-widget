import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function Widget() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>widget</Text>
        </View>
    );
}