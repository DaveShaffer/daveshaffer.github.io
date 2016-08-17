var result;
var max = 35;
var x;
var fizz;
var buzz;
for (x = 1; x <= max; x += 1) {
  fizz = '';
  buzz = '';
  if ((x % 3) === 0) {
    fizz = 'FIZZ';
  };
  if ((x % 5) === 0) {
    buzz = 'BUZZ';
  };
  result = fizz + buzz;
  if (result === '') {
    result = x;
  };
  console.log(result);
};
console.log("Thank you");
