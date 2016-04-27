var compute;
exports.compute = function(str1, str2) {

	if (str1.length != str2.length) {
		throw new Error ('DNA strands must be of equal length.');
	};

	if (str1.length === str2.length) {
		var diff = 0;
		for (var i = 0; i < str1.length; i += 1) {
			if (str1[i] !== str2[i]) {
				diff += 1;
			}
		}
		return diff;
	}
}