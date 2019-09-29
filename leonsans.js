(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}(function () { 'use strict';

	const LeonSans = require('./leonsans').default;
	module.exports = LeonSans;

}));
