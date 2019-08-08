import { connect } from 'react-redux';
import actions from './actions';


const mapStateToProps = state => {
  return {
    auth: state.authentication
  };
};

function connectRedux(Component) {
  return connect(
    mapStateToProps,
    actions
  )(Component);
};

export default connectRedux;