const express = require('express'),
    DBOperation = require('./DBCon/DBOperation.jsx')
    cors = require('cors');


DBOperation.getData().then(res => {
    console.log(res);
})




// const API_PORT = process.env.PORT || 5000;
// const app = express();

// app.use(cors());

// app.get('/api', function (req, res) {
//     consolo.log('called');
//     res.send({ result: 'Helloooo' })
// })

// app.get('/quit', function (req, res) {
//     consolo.log('called quit');
//     res.send({ result: 'goodbye' })
// })

// app.listen(API_PORT, () => console.log('Listening to port ' + { API_PORT }))