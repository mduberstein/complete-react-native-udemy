import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

// reducer returns what is going to be used as a state object
// state is never updated in place
// action === (semantically) howToChangeStateObject
const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number}
  // action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
  switch (action.colorToChange) {
    case 'red':
      // copy base a state object into a new object and override one property
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  // a better name for dispatch would be runMyReducer,
  // "dispatch" is just a convention, can be called any name
  // object passed to the dispatch function call is passed to the reducer as the second argument
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  console.log(state);
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => 
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
        onDecrease={() => 
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
