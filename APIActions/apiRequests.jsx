const API_URI = 'https://proj.ruppin.ac.il/bgroup89/prod/api/Register';
const API_SIGIN = 'https://proj.ruppin.ac.il/bgroup89/prod/api/LogIn/5';
const API_CREATE_LEAGUE = 'https://proj.ruppin.ac.il/bgroup89/prod/api/CreateNewLeague';
//const API_URI = 'https://proj.ruppin.ac.il/bgroup89/prod/api/Register';
//const API_URI = 'https://proj.ruppin.ac.il/bgroup89/prod/api/Register';
//const API_URI = 'https://proj.ruppin.ac.il/bgroup89/prod/api/Register';
//const API_URI = 'https://proj.ruppin.ac.il/bgroup89/prod/api/Register';

const league_pic = 'https://cdn.bleacherreport.net/images_root/slides/photos/000/607/604/funny_cat_soccer_problem_original.jpg?1294007705';


// GET METHOD - login, send email and password, return "good connection"
export const getMeth = () => {
    fetch(API_URI, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8',
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
                result.map(st => console.log(st));
                console.log('result[0].FullName=', result);
            },
            (error) => {
                console.log("err post=", error);
            });
}


// POST METHOD - SIGN IN - GET USERNAME & PSWD, RETURNS STATUS OK \ WRONG

export const postMethLogin = (s) => {
    fetch(API_SIGIN, {
        method: 'GET',
        headers: new Headers({
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8'
        }),
        body: JSON.stringify({
            'email': s.email,
            'password': s.password
        })
    })
        .then(res => {
            console.log('res=', res);
            return res.json()
        })
        .then(
            (result) => {
                console.log("fetch POST= ", result);
                console.log(result.Avg);
            },
            (error) => {
                console.log("err post=", error);
            });
}


// POST METHOD - CREATE LEAGUE - SEND LEAGUE NAME, PICTURE (URL) AND RULES, RETURNS LEAGUE ID, NAME, PICTURE, GAMES PLAYED, RULES, INVITE_URL

export const postCreateLeague = (s) => {
    fetch(API_CREATE_LEAGUE, {
        method: 'POST',
        headers: new Headers({
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8'
        }),
        body: JSON.stringify({
            "league_name": s.league_name,
            "league_picture": league_pic,
            "league_rules": s.league_rules
        })
    })
        .then(res => {
            console.log('res=', res);
            return res.json()
        })
        .then(
            (result) => {
                console.log("fetch POST= ", result);
                console.log(result.Avg);
            },
            (error) => {
                console.log("err post=", error);
            });
}
