import Taro from '@tarojs/taro';
import { connect } from '@tarojs/redux';

function withLoginFilter(Component) {
  @connect(({ user }) => ({ userInfo: user.userInfo }))
  class WithLoginFilter extends Component {
    componentDidMount() {}
    componentWillReceiveProps() {}
  }

  return WithLoginFilter;
}

export default withLoginFilter;
