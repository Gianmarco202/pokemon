const axios = require('axios')

axios.defaults.headers.common
['Accept-Encoding'] = 'null';

module.exports = axios