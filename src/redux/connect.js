import { connect } from 'react-redux';
import actions from './actions';


const mapStateToProps = state => {
  return {
    todos: state.todos,
    filters: state.filters
  };
};

function connectRedux(Component) {
  return connect(
    mapStateToProps,
    actions
  )(Component);
};

export default connectRedux;