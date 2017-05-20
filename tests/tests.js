var assert = chai.assert;

suite('operation-resta', function() {
 setup(function() {
		 if (typeof __html__ !== 'undefined') {
			 document.body.innerHTML = __html__['tests/index.html'];
			 original = document.getElementById('original');
			 operated = document.getElementById('operated');
		 }
	 });

 test('2x3', function() {
	 original.value = '2x3';
	 main();
	 assert.equal(operated, 6);
 });
});
