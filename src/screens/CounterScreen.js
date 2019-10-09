// replace useState with useReducer hook
// import React, {useState} from 'react'
import React, { useReducer } from 'react';
import { View, Text, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // special initialization syntax of state variable and its setter, using useState hook
  //const [counter, setCounter] = useState(0);
  // state === { count: number }

  // action === { type: 'increment' || 'decrement', payload: 1 }
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // setCounter(counter + 1);
          dispatch({ type: 'increment', payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // setCounter(counter - 1);
          dispatch({ type: 'decrement', payload: 1 });
        }}
      />
      <Text>Current Count {state.count}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({});

export default CounterScreen;
