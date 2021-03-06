import React, { Component } from 'React';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DrillType from './DrillType';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drillTypes: [
                'Warmups',
                'Full Guard',
                'Back Control',
                'Side Control',
                'Full Mount',
                'Takedowns',
            ]
        }
    }
    generateDrillTypes(drills) {
        console.log('cats')
        console.log(drills.map(drill => <DrillType key={drill} drill={drill} />))
        return drills.map(drill => <DrillType key={drill} drill={drill} />);

    }

    render() {
        const { mainContainer, header, getStartedButton, getStartedButtonText, drillsContainer } = styles;
        return (
            <View style={mainContainer}>
                <View style={header}>
                    <Text>BJJ Training for the Dudes</Text>
                </View>
                <View style={drillsContainer}>
                    {this.generateDrillTypes(this.state.drillTypes)}
                </View>
                <TouchableOpacity style={getStartedButton} route="createDrill">
                    <Text style={getStartedButtonText}>Select Positions</Text>
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
        width: '100%',
    },
    header: {
        height: 100,
        width: '100%',
        backgroundColor: '#3498db',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    drillsContainer: {
        width: '100%',
        height: '60%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
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