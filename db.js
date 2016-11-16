let massive = require('massive');

let connectionString = 'postgres://postgres:DevMountain@localhost/candy';
let massiveInstance = massive.connectSync({connectionString});
module.exports = massiveInstance;
