let a = 3, b = 2, c = 1, d = 4, h = "3";

let z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z);

let f = 1;
f += 3; // a = a + 3 
console.log(f);

f -= 2; // a = a - 2 
console.log(f);

let e = h == a;
console.log(e); //No revisa el tipo

let g = h === a;
console.log(g); //Si revisa el tipo de dato

let i = h != c;
console.log(g); //No revisa el tipo de dato

let j = h !== a;
console.log(g); //Si revisa el tipo de dato