exports.rgbToHex = function(r, g, b) {

	var rHex = r.toString(16);
	var gHex = g.toString(16);
	var bHex = b.toString(16);

	return pad(rHex) + pad(gHex) + pad(bHex);
};

function pad(hex) {
 	return (hex.length === 1 ? "0" + hex : hex);
}
