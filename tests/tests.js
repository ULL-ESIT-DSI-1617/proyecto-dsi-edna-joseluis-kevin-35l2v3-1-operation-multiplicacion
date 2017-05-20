var assert = chai.assert;

suite('operation-resta', function() {
 setup(function() {
		 if (typeof __html__ !== 'undefined') {
			 document.body.innerHTML = __html__['tests/index.html'];
			 original = document.getElementById('original');
			 operated = document.getElementById('operated');
		 }
	 });

 test('2*3', function() {
	 original.value = '2*3';
	 main();
	 assert.equal(operated, 6);
 });

 // test('5*5', function() {
 //  original.value = '5*5';
 //  main();
 //  assert.equal(operated, 25);
 // });
});
