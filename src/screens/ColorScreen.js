import React, {useState} from 'react'
import {View, StyleSheet, Button} from 'react-native'

const ColorScreen = () => {
    const [colors, setColors] = useState([]); 
    console.log(colors);
    return (
        <View>
            <Button title='Add a Color' onPress={()=>{
                // ...colors copies it into the new array
                setColors([...colors, randomRgb()])   
            }}/>
            {/* backgroundColor takes a string literal 'rgb(0, 255, 0)' */}
            <View style={{height: 100, width: 100, backgroundColor: randomRgb()}}/>
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}; 

const styles = StyleSheet.create({});

export default ColorScreen;