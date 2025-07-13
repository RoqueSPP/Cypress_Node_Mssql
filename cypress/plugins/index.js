
require('dotenv').config()
const oracledb = require('oracledb');
const sql = require('mssql')

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.initOracleClient({ libDir: '.\\cypress\\support\\clientDB\\instantclient_23_8' })

const dbConnection = {
    "user": process.env.SQL_USER,
    "password": process.env.SQL_PASSWORD,
    "server": process.env.SQL_SERVER,
    "database": process.env.SQL_DATABASE,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
}
console.log(dbConnection)

async function conectar(query) {

    const connection = await oracledb.getConnection({
        user: "system",
        password: '123456',
        connectString: "localhost:1521/XE"
    });
    console.log('banco conectado')
    return result = await connection.execute(query);
}

async function buscarDados(query) {

    const conect =await sql.connect(dbConnection);
    return  await conect.request()
        .query(query);

}
module.exports = async (on, config) => {
    on('task', {
        sqlServer: (query) => {
            return buscarDados(query)
        }
    }),
        on('task', {
            SQL: (query) => {
                return conectar(query)
            }
        })
}
