var data = 5;

function test() {
  console.log(data);
  var data = 6;
}
function testAfterHoist() {
  var data;
  console.log(data); //* undefined
  var data = 6;
}

test(); //* undefined
testAfterHoist(); //* undefined
