import React from 'React';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Main from './components/Main';

const RouterComponent = () => {
    return (
        <Router style={styles.container}>
            <Scene key="root">
                <Scene key="main"
                    component={Main}
                    title="Daily Jiu Jitsu"
                    initial />
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