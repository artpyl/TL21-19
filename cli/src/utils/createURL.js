const chalk = require('chalk');

module.exports = function(type, param1, param2, param3, param4, format){
	let base = 'https://localhost:9103/interoperability/api';
	base = base + type;

	 if(type === '/PassesPerStation/')
	 base = base + param1 + '/' + param2 + '/' + param3 + '?format=' + format;

	 if(type === '/PassesCost/')
	 base = base + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '?format=' + format;

	 if(type === '/PassesAnalysis/')
	 base = base + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '?format=' + format;

	 if(type === '/ChargesBy/')
	 base = base + param1 + '/' + param2 + '/' + param3 + '?format=' + format;
	return base;
}
