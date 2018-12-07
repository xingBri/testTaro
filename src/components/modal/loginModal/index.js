import Taro, { Component } from '@tarojs/taro';
import SmsLoginModal from './smsLoginModal';

export default class LoginModal extends Component {
  static defaultProps = {
    onLogin: () => {},
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SmsLoginModal
        onLogin={this.props.onLogin}
        onChangeloginMethod={this.onChangeloginMethod}
      />
    );
  }
}
