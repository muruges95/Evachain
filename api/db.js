var json = require("../keys.json");

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
    var url = allDB;
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