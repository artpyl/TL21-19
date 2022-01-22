const sendRequest = require('./utils/sendRequest.js');
const createURL = require('./utils/createURL.js');

module.exports = function(object) {
        let baseUrl = createURL('/Admin/healthcheck','','','','','');
        sendRequest('get', baseUrl);
};
