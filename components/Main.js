import React, { Component } from 'React';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DrillType from './DrillType';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { mainContainer, getStartedButton, getStartedButtonText } = styles;
        return (
            <View style={mainContainer}>
                <Text>cats</Text>

                <TouchableOpacity style={getStartedButton}>
                    <Text style={getStartedButtonText}>Get Started</Text>
                </TouchableOpacity>
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
        height: 80,
        width: '100%',
        // marginBottom: 40,
    },
    getStartedButtonText: {
        fontSize: 30,
        color: '#fff',
    }
});

export default Main;