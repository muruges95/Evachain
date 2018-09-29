import {
    SET_HOME_DATA,
    SET_SHELTER_DATA,
    SET_EMERGENCY_STATE,
} from './reducer';
import axios from 'axios';
var json = require("./keys.json");

export const setHomes = (homes) => {
    return {
        type: SET_HOME_DATA,
        homes
    };
};

export const getHomes = (dispatch) => {
    const dbName = 'civilians';
    const url = `${ json.URL }/${ dbName }/_all_docs?include_docs=true`;
    const config = {
        method: 'get',
        url,
        headers: {
            Authorization: json.Auth
        }
    }
    return axios(config)
        .then((response) => {
            dispatch(setHomes(response.data.rows))
        })
        .catch((error) => console.warn("Unable to get Home data."));
}

export const setEmergencyState = (emergencyState) => {
    return {
        type: SET_EMERGENCY_STATE,
        emergencyState
    }
}

export const getEmergencyState = (dispatch) => {
    const dbName = 'emergency'
    const url = `${ json.URL }/${ dbName }/_all_docs?include_docs=true`;
    const config = {
        method: 'get',
        url,
        headers: {
            Authorization: json.Auth
        }
    }
    return axios(config)
        .then((response) => {
            // console.log(response.data.rows[0].doc["emergency"]);
            dispatch(setEmergencyState(response.data.rows[0].doc["emergency"]))
        })
        .catch((error) => console.warn("Unable to get emergency state data."));
}