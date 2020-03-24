import {createStackNavigator} from 'react-navigation-stack';
import {Home, Settings} from '@/screens';

export default createStackNavigator(
  {
    Main: {screen: Home},
    Setting: {screen: Settings},
  },
  {
    headerMode: 'float',
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      gestureEnabled: false,
      headerShown: false,
    },
  },
);
