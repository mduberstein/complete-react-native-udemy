import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  console.log(styles);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    // flexDirection: 'row',
    alignItems: 'stretch',
    // justifyContent: 'space-around',
    height: 200

  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 4
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // position: 'absolute',
    // top:0,
    // left:0,
    // bottom:0,
    // right:0,
    // five rules above are equivalent to this one below
    ...StyleSheet.absoluteFillObject,
    fontSize: 18, 
    // flex: 4
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 2
  }
});

export default BoxScreen;
