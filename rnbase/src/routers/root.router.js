import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import authNavigation from './auth.router';
import mainNavigation from './main.router';

export default (signedIn = false) => {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignedIn: {
          screen: mainNavigation,
        },
        SignedOut: {
          screen: authNavigation,
        },
      },
      {
        initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
      },
    ),
  );
};
