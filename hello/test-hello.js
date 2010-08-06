var assert = require('assert'),
  	http = require('http'),
		sys = require('sys'),
  	hello = require('./hello'),
  	callbackFired = false;

hello.server.listen(3000);

hello.server.on('request', function(request, response) {
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
	  // console.log('STATUS: ' + response.statusCode);
	  // console.log('HEADERS: ' + JSON.stringify(response.headers));
	  response.setEncoding('utf8');
	  response.on('data', function (chunk) {
			assert.strictEqual(chunk, "hello world");
			assert.ok(callbackFired);
	  });
	});
}

// simplestTest();
betterTest();