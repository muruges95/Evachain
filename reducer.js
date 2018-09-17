export const SET_HOME_DATA = "SET_HOME_DATA";
export const SET_SHELTER_DATA = "SET_SHELTER_DATA";

export const initialState = {
    homes : [],
    shelters : [],
    user: "fireman"
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_HOME_DATA:
            return { ...state, homes: action.homes };
        case SET_SHELTER_DATA:
            return { ...state, shelters: action.shelters };
        default:
            return state;
    }
}