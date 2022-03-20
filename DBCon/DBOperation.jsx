const config = require('./DBConfig.jsx'),
    sql = require('mssql');


const getData = async () => {
    try {
        let pool = await sql.connect(config);
        let data = pool.request()
            .query("select * from Player")
        console.log(data);
        return data;
    }
    catch (error) {
        console.log("ooppsie, can't get data");
    }
}


module.exports = {
    getData
}
