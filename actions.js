import {
    SET_HOME_DATA,
    SET_SHELTER_DATA
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
    const dbName = 'testdb2';
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