import React from 'react';
//import react in our code.
import {Text, View, TouchableOpacity} from 'react-native';
//import all the basic component we have used

export default class Splash extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('HomeNavigator') }}>
                    <Text>Splash</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
