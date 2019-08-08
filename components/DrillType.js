import React from 'react';
import { View } from 'react-native';

const DrillType = ({ children }) => {
    return (
        <View>
            {/* Icon */}
            <Text>{children}</Text>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 1
    }
}

export default DrillType;