import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: 'Home',
    // initialRouteName: 'Components',
    // initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'App'
    } 
  }
);

export default createAppContainer(navigator);