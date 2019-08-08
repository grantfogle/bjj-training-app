import React, { Component } from 'React';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { mainContainer, getStartedButton } = styles;
        return (
            <View style={mainContainer}>
                <Text>cats</Text>

                <View style={getStartedButton}>
                    <Text>Get Started</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'space-between',
    },
    getStartedButton: {
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '100%',
        // marginBottom: 40,
    }
});

export default Main;