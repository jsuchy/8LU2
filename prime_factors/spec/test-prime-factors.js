var vows = require ('vows'),
	assert = require ('assert');
var primeFactors = require ('../prime-factors')
var PrimeFactors = primeFactors.PrimeFactors;
	
vows.describe ('Prime Factors').addBatch({
	'Prime factors': {
		'generate': {
			topic: new (PrimeFactors),
			
			'testOne': function (primeFactors) {
				assert.deepEqual (primeFactors.generate(1), []);
			},
			'testTwo': function (primeFactors) {
				assert.deepEqual (primeFactors.generate(2), [2]);
			},
			'testThree': function (primeFactors) {
				assert.deepEqual (primeFactors.generate(3), [3]);
			},
			'testFour': function (primeFactors) {
				assert.deepEqual (primeFactors.generate(4), [2, 2]);
			},
			'testFive': function (primeFactors) {
				assert.deepEqual (primeFactors.generate(5), [5]);
			},
			'testSix': function (primeFactors) {
				assert.deepEqual (primeFactors.generate(6), [2, 3]);
			},
			'testEight': function (primeFactors) {
				assert.deepEqual (primeFactors.generate(8), [2, 2, 2]);
			},
			'testNine': function (primeFactors) {
				assert.deepEqual (primeFactors.generate(9), [3, 3]);
			},
			'testBigNumber': function(primeFactors) {
				var bigNumber = 2 * 2 * 2 * 3 * 7 * 13 * 23;
				assert.deepEqual (primeFactors.generate(bigNumber), [2, 2, 2, 3, 7, 13, 23]);
			}
		}
	}
}).run();
