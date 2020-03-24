import {createStackNavigator} from 'react-navigation-stack';
import {Login} from '@/screens';

export default createStackNavigator(
  {
    Login: {screen: Login},
  },
  {
    headerMode: 'float',
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      gestureEnabled: false,
      headerShown: false,
    },
  },
);
