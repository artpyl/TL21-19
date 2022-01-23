const sendRequest = require('./utils/sendRequest.js');
const createURL = require('./utils/createURL.js');

module.exports = function(object) {
        let baseUrl = createURL('/admin/resetvehicles','','','','','');
        sendRequest('post', baseUrl);
};
