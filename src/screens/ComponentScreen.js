import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    // // const greeting = 'Hi There!';
    // // const greeting = [123, 567];
    // // const greeting = {color: red}; // fails
    // // Alternative 2
    // const greeting =  <Text>Hello to you!</Text>;
    // return <View>
    //     <Text style={styles.textStyle}>This is the ComponentScreen</Text>
    //     {/* Alternative 1 */}
    //     {/* <Text>{greeting}</Text> */}
    //     {/* Alternative 2 */}
    //     {greeting}
    // </View>
    // Exercise 1
    const name = 'Michael';
    return(
        <View>
            <Text style={styles.textStyle}>Getting Started with React Native!</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    },
    subHeaderStyle:{
        fontSize: 20
    }
});

export default ComponentsScreen;  