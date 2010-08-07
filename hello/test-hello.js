var assert = require('assert'),
  	http = require('http'),
	sys = require('sys'),
  	hello = require('./hello'),
  	callbackFired = false;

hello.server.listen(3000);

hello.server.on('request', function(request, response) {
	// callback may never fire, keep track of whether it did; important for any test more complicated than this
	callbackFired = true;
	hello.server.close();
});

function simplestTest() {
	http.cat('http://localhost:3000/');
	
	process.on('exit', function() {
		assert.ok(callbackFired);
	});
}

function betterTest() {
	var client = http.createClient('3000', 'localhost');
	var request = client.request('GET', '/', {'host': 'localhost'});
	request.end();

	request.on('response', function (response) {
	    response.setEncoding('utf8');
	    response.on('data', function (chunk) {
			// Testing that the right response is sent	
			assert.strictEqual(chunk, "hello world");
			assert.ok(callbackFired);
	    });
	});
}

// simplestTest();
betterTest();