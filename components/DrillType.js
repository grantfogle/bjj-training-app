import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const DrillType = ({ drill }) => {
    const { drillTypeContainer } = styles;

    return (
        <TouchableOpacity style={drillTypeContainer}>
            <Text>{drill}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    drillTypeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        margin: 5,
        width: 150,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dfdfdf',
    }
}

export default DrillType;