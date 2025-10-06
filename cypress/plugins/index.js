require('dotenv').config()
const sql = require('mssql')

const dbConnection = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    server: process.env.SQL_SERVER,
    database: process.env.SQL_DATABASE,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
}
const dbConnectionDB = {
    user: process.env.SQL_USERDB,
    password: process.env.SQL_PASSWORDDB,
    server: process.env.SQL_SERVERDB,
    database: process.env.SQL_DATABASEDB,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
}

async function buscarDados(query) {
    try {
    const conect = await sql.connect(dbConnection)
    console.log('conectou com sucesso')
    return await conect.request().query(query)
    } catch (error) {
    console.log('deu ruim ', error);
    }

}
async function buscarDadosDB(query) {
    try {
    const conect = await sql.connect(dbConnectionDB)
    console.log('conectou com sucesso')
    return await conect.request().query(query)
    } catch (error) {
    console.log('deu ruim ', error);
    }

}
module.exports = (on, config) => {
    on('task', {
        sqlServer: (query) => {
            return buscarDados(query)
        }
    }),
        on('task', {
        sqlServerDB: (query) => {
            return buscarDadosDB(query)
        }
    })
}

