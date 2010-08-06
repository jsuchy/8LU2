exports.PrimeFactors = function () {}

exports.PrimeFactors.prototype = {
	generate: function (n) {
		var primes = [];
		var candidate = 2;
		while (n > 1) {
			while (n % candidate === 0) {
				primes.push(candidate);
				n /= candidate;
			}
			
			candidate++;
		}
		return primes;
	}
	
}