import Taro, { Component } from '@tarojs/taro';
import '@tarojs/async-await';
import { Provider } from '@tarojs/redux';

import Index from './pages/index';
import configStore from './redux';

import './app.less';

const store = configStore();

class App extends Component {
  config = {
    pages: ['pages/index/index'],

    window: {
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      backgroundTextStyle: 'light',
    },
  };

  componentDidHide() {}

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
