let massive = require('massive');

let connectionString = process.env.PSQL_DB || 'postgres://postgres:DevMountain@localhost/candy';
let massiveInstance = massive.connectSync({connectionString});
module.exports = massiveInstance;
