"use strict";

var chai = require("chai");
var assert = chai.assert;
var Operation = require("@ull-edna-joseluis-kevin-35l2/ull-operation");
var Multiplicacion = require("../index.js");

describe('operation', function() {
	it('2x3', function() {
		var result = Operation.operate("2x3");
		assert.equal(result, 6);
	});
});
