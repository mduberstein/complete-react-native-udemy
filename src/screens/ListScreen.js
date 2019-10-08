import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        // Adding key, Alternative 1
        // Key must be a string
        // {name: 'Friend #1', key: '1'},
        // {name: 'Friend #2', key: '1'},
        // {name: 'Friend #3', key: '3'},
        // {name: 'Friend #4', key: '4'},
        // {name: 'Friend #5', key: '5'},
        // {name: 'Friend #6', key: '6'},
        // {name: 'Friend #7', key: '7'},
        // {name: 'Friend #8', key: '8'},
        // {name: 'Friend #9', key: '9'}
        {name: 'Friend #1', age: 20},
        {name: 'Friend #2', age: 45},
        {name: 'Friend #3', age: 50},
        {name: 'Friend #4', age: 33},
        {name: 'Friend #5', age: 20},
        {name: 'Friend #6', age: 45},
        {name: 'Friend #7', age: 50},
        {name: 'Friend #8', age: 33},
        {name: 'Friend #9', age: 21}
    ];
    // return <Text>ListScreen</Text>;
    return (
        <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        // Adding a key - alternative 2 - preferred way
        // friend is the member of data array itself
        keyExtractor={(friend)=>friend.name} 
        data={friends}
        renderItem={
        //     (element)=>{
        //     // element === {item: {name: 'Friend #1'}, index: 0}
        // ES 2015 deconstruction
        // }
            ({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
            }
        }/>
    );
};

const styles = StyleSheet.create({
    textStyle:{
       marginVertical: 50 
    }
});

export default ListScreen;

