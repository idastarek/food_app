import { query } from '../db';

const getClients = async () => {
    const result = await query('SELECT * FROM clients', []);
    return result.rows;
}


// const clientService = require('../services/userService');
