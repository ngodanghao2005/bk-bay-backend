const pool = require('../config/database');
const sql = require('mssql');

const getShipperDetails = async (shipperId) => {
    const request = pool.request();
    request.input('shipperId', shipperId);
    const result = await request.query('SELECT * FROM Shipper WHERE Id = @shipperId');
    return result.recordset[0];
}

const updateShipperDetails = async (shipperId, details) => {
    const request = pool.request();
    request.input('shipperId', shipperId);
    request.input('company', details.company);
    request.input('licensePlate', details.license);
    await request.query(`
        UPDATE Shipper
        SET Company = @company,
            LicensePlate = @licensePlate
        WHERE Id = @shipperId
    `);
}

module.exports = {
    getShipperDetails,
    updateShipperDetails
}