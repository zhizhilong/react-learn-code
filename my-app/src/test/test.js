function A(x) { 
  this.x = x
}

function B(x) {
  this.x = x;
}

A.prototype.x = 1;
B.prototype.x = new A();

var a = new A(2);
var b = new B(3);
delete b.x;

console.log(a.x);
console.log(b.x);