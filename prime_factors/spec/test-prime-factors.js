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
		}
	}
}).export(module);
// }).run();
