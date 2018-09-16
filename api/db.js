var json = require("../keys.json");
var databases = require("./schema.json");

const allDB = json.URL + json.TestDB;
export const retrieveData = (dbName) => {
    return fetch(json.URL + "/" + dbName + "/_all_docs?include_docs=true", {
        method: 'GET',
        headers: new Headers({
            'Authorization': json.Auth,
            'Content-Type': 'application/json'
        }),
    })
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Something went wrong on api server!');
            return null;
        }
    })
    .catch(error => {
        console.error(error);
    });
}

export const postData = (data, database) => {
    var url = json.URL + "/" + database;
    console.log("Fetching");
    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': json.Auth,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.status === 201) {
                // console.log(response);
                return response
            } else {
                console.log(response.status);
                throw new Error('Something went wrong on api server!');
                return null
            }
        })
        .then(response => {
            // ...
        }).catch(error => {
            console.error(error);
        });
}

export const toJson = (response, keys) => {
    if (response) {
        return response.rows.map(function(object){
            var newObj = {}
            for (key in keys){
                newObj[keys[key]] = object.doc[keys[key]]
            }
            return newObj;
        });
    } else {
        return null;
    }
}

export const retrieveKey = (key, database) => {
    var url = json.URL + "/" + database + "/_find";
    var queryBody = {
        "selector": key
    }
    console.log("k");
    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': json.Auth,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(queryBody)
    })
    .then(e=>{
        return e.json();
    })
    .catch(e=>{
        console.log("Fail retrieve data", e);
    });
}

export const updateRow = (id, data, database) => {
    var url = json.URL + "/" + database + "/" + id;
    console.log("Patching");
    return fetch(url, {
        method: 'PUT',
        headers: new Headers({
            'Authorization': json.Auth,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.status === 201) {
                return response
            } else {
                console.log(response.status);
                throw new Error('Something went wrong on api server!');
                return null
            }
        })
        .then(response => {
            // ...
        }).catch(error => {
            console.error(error);
        });
}