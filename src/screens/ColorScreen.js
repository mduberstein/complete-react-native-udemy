import React from 'react'
import {View, StyleSheet, Button} from 'react-native'

const ColorScreen = () => {
    return (
        <View>
            <Button title='Add a Color' onPress={()=>{}}/>
            <View style={{height: 100, width: 100, backgroundColor: 'rgb(0, 255, 0)'}}/>
        </View>
    );
};

// const randomRgb = () => {
//     const red = Math.floor(Math.random() * 256);

// }; 

const styles = StyleSheet.create({});

export default ColorScreen;