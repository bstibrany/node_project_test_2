const assert = require('assert');
const converter = require('../app/converter.js');

describe("Color Code Converter", function() {
	describe("RGB to Hex conversion", function() {
		it("converts the basic colors", function(done) {
			assert.equal(converter.rgbToHex(255, 0, 0), "ff0000");
			done();
		});
	});
});
