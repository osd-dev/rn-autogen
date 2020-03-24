import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import RootRouter from '@/routers';
import {Provider} from 'react-redux';
import store from '@/store';
import {name as appName} from './app.json';
import {SafeAreaView} from 'react-native';
import {Styles, LocalStorage} from '@/commons';

class App extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      signedIn: false,
    };
  }

  async componentDidMount() {
    const user = await LocalStorage.getUser();
    if (user) {
      this.setState({signedIn: true});
    }
  }

  render() {
    const {signedIn} = this.state;
    const RootNavigation = RootRouter(signedIn);
    return (
      <Provider store={store}>
        <SafeAreaView style={{flex: 0, backgroundColor: '#f1f1f1'}} />
        <SafeAreaView style={Styles.container}>
          <RootNavigation />
        </SafeAreaView>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
