import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import { setUserInfo, toggleAuthModal } from '../../../../redux/actions/user';
import './index.less';

@connect(({ user }) => ({ user }))
export default class LoginModal extends Component {
  static defaultProps = {
    onLogin: () => {},
    // 切换登录方法
    onChangeloginMethod() {},
  };

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps data', nextProps);
  }

  closeModal = () => {
    this.props.dispatch(toggleAuthModal(0));
  };

  setField = (field, e) => {
    const { value } = e.detail;
    loginForm[field] = value;
  };

  login = async () => {
    this.props.dispatch(setUserInfo({ a: 1 }));
    this.props.dispatch(toggleAuthModal(0));
  };

  toPasswordLogin = () => {
    this.props.onChangeloginMethod('password');
  };

  render() {
    const show = this.props.user.showAuthModal;

    return (
      <View className="login-modal" style={show ? '' : 'display:none'}>
        <View className="modal-bg" />

        <View className="modal-container">
          <View className="modal-title">点下面按钮，观察console台</View>
          <View className="modal-text">
            redux log的数据跟 componentWillReceive的数据不一样
          </View>
          <View className="modal-text">
            user里的userInfo是不一样的，造成页面更新的状态不对
          </View>
          <View className="modal-text">
            把版本改成1.0.7，却是没有这个问题的
          </View>

          <Button className="login-btn" onClick={this.login}>
            测试
          </Button>
        </View>
      </View>
    );
  }
}
