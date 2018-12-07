import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';

import withLoginFilter from '../../decorators/withLoginFilter';
import LoginModal from '../../components/modal/loginModal';

import { toggleAuthModal } from '../../redux/actions/user';

@withLoginFilter
@connect(({ user }) => ({ userInfo: user.userInfo }))
export default class MyLesson extends Component {
  config = {
    navigationBarTitleText: '我的课程',
    navigationBarBackgroundColor: '#FF605C',
    navigationBarTextStyle: 'white',
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark',
  };

  constructor(props) {
    super(props);
    this.state = {
      originalData: null,
      showDownloadAppModal: false,
      showLogoutModal: false,
    };
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {
    this.props.dispatch(toggleAuthModal(1));
  }

  render() {
    return (
      <View className="pg-my-lesson">
        <LoginModal />
      </View>
    );
  }
}
