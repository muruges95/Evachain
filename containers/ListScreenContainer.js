import { connect } from 'react-redux';
import { getHomes } from '../actions';
import ListScreen from '../screens/ListScreen';

const mapStateToProps = (state) => ({
    homes: state.homes,
    shelters: state.shelters,
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    getHomes: () => getHomes(dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListScreen);