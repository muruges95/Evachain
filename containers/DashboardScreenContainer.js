import { connect } from 'react-redux';
import { getEmergencyState } from '../actions';
import DashboardScreen from '../screens/DashboardScreen';

const mapStateToProps = (state) => ({
    emergencyState: state.emergencyState
});

const mapDispatchToProps = (dispatch) => ({
    getEmergencyState: () => getEmergencyState(dispatch),
    // setEmergencyState: (emergencyState) => dispatch(setEmergencyState(emergencyState))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(DashboardScreen);