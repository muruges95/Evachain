export const SET_HOME_DATA = "SET_HOME_DATA";
export const SET_SHELTER_DATA = "SET_SHELTER_DATA";
export const SET_EMERGENCY_STATE = "SET_EMERGENCY_STATE";

export const initialState = {
    homes: [],
    shelters: [],
    emergencyStatus: false,
    user: "fireman"
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_HOME_DATA:
            return { ...state, homes: action.homes };
        case SET_SHELTER_DATA:
            return { ...state, shelters: action.shelters };
        case SET_EMERGENCY_STATE:
            return { ...state, emergencyState: action.emergencyState };
        default:
            return state;
    }
}