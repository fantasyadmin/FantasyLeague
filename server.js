const DBOperation = require('./DBCon/DBOperation.jsx'),
    cors = require('cors');


DBOperation.getData().then(res => {
    console.log(res);
})

