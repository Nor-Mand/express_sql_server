import sql from 'mssql'

const setting = {
    user: "sa",
    password: "sa",
    server: "192.168.140.1",
    database: "SiscotecBOl",
    port: 1433,
    options: {
        encrypt: true,
        trustServerCertificate: true,
  },
};

async function getConnection(){
    const pool = await  sql.connect(setting)
    const result = await pool.request().query("SELECT 1")
    console.log(result);
}

getConnection()
