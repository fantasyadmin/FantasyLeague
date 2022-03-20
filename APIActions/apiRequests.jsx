const API_URL = 'https://localhost:44355/api/Register';

export const getInfo = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL,
                {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                    }
                });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_INFO,
                    payload: json
                });
            }
            else {
                console.log('unable to fetch!')
            }
        }
    } catch (error) {
        console.log(error);
    }
}


export const getInfo2 = () => {
    return fetch('https://localhost:44355/api/Register')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            return json[0];
        })
        .catch((error) => {
            console.error(error);
        });
};



fetch('https://localhost:44355/api/Register')
    .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
    })
    .then(
        (result) => {
            console.log("fetch btn=", result);
            result.map(st => console.log(st));
            console.log(st);
        },
        (error) => {
            console.log("err post=", error);
        });




fetch('https://localhost:44355/api/Register', {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue'
    })
});



fetch('https://localhost:44355/api/Register', {
    method: 'GET',
    headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
    })
})
    .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
    })
    .then(
        (result) => {
            console.log("fetch btnFetchGetStudents= ", result);
            result.map(st => console.log(st.FullName));
            console.log('result[0].FullName=', result);
        },
        (error) => {
            console.log("err post=", error);
        });