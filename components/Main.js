import React, { Component } from 'React';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <View>
                <Text>cats</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Main;