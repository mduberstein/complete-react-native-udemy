import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go To List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go To Image Demo"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go To Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go To Color Demo"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go To Square Demo"
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go To Text Demo"
      />
    </View>
  );
};

// Before Clip 27
// const HomeScreen = (props) => {
//   // console.log(props.navigation);
//   return <View>
//       <Text style={styles.text}>Hi There!</Text>
//       <Button
//       onPress={()=>
//         // console.log('Button pressed'
//         props.navigation.navigate('Components')}
//       title="Go to Components Demo"/>
//       <Button onPress={()=>
//         props.navigation.navigate('List')}
//         title='Go To List Demo'/>
//       {/* <TouchableOpacity onPress={()=>
//         // console.log('List pressed')
//         props.navigation.navigate('List')} >
//         <Text>Go To List Demo</Text>
//         <Text>Go To List Demo</Text>
//         <Text>Go To List Demo</Text>
//       </TouchableOpacity>   */}
//     </View>
// };

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
