// get connection
import { getConnection } from '../database/connection'

export const getContacts = async (req, res) => {

    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM gbper WHERE gbpercper= 1");
    res.json(result.recordset)
}

