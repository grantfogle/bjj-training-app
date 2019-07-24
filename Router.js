import React from 'React';
import { Scene, Router, Action } from 'react-native-router-flux';
import Main from './components/Main';

const RouterComponent = () => {
    return (
        <Router style={StyleSheet.container}>
            <Scene key="root"
                rightTitle="New Session"
                component={Main}
                title="Daily Jiu Jitsu">
            </Scene>
        </Router>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db',
    },
};

export default RouterComponent;