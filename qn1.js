// const num = 5; 
// console.log(num + 5); 
// let a = 6; 
// a = a + num; 
// console.log(num - a);
// console.log(a); 
// f(2, 3, 4, 5);
// var a = 1; 
// var a = 2; 
// console.log(a); 
// console.log(b); 
// let b = 2;
// function f() 
// {
//      console.log(arguments); 
// // }
// let obj = {"concept":""};

// // console.log( JSON.parse( JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12) ).concept );

// let a;

// console.log(a);

// function A() { let a = 2; console.log(a);

// function C() { console.log(a);

// function D() {
//   console.log(a);

//   a = 2;
// }
// D();
// a = 3;
// } C(); }

// function B() { let a; console.log(a);

// function E() { a = 6; console.log(a);

// }

// a = 2; E(); console.log(a); }

// function F() { console.log(a); a = 2; }

// a = 3;

// F(); B(); A();




// let a = 2; { let a = 3; { let a = 4; { let a = 5; console.log(a); } console.log(a); } console.log(a); } console.log(a);


//  [ { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] }, { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] }, ];

// [ { name: "Roorkee", avgRainfall: 5.714285714285714 }, { name: "Pauri", avgRainfall: 2.2857142857142856 }, ];

//  [ { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] }, { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] }, { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] }, { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] }, ]
// Output#1
// [   
//     { name: "Delhi", avgRainfall: 3.457142857142857 },
//     { name: "Noida", avgRainfall: 2.028571428571428 },
//     { name: "Dehradun", avgRainfall: 9.635714285714286 },
//     { name: "Nanital", avgRainfall: 6.275714285714286 },
// ]

// Input#2
// [
//     { name: "Boston", rainfall: [1, 2, 3, 4, 5, 6, 7] },
//     { name: "Chandler", rainfall: [0, 0, 1, 0, 0, 1, 1] },
//     { name: "Charlotte", rainfall: [2, 2, 2, 2, 2, 2, 2] },
//     { name: "Dallas", rainfall: [3, 3, 2, 6, 1, 3, 8] },
// ]

// Output#2
//  [
//     { name: "Boston", avgRainfall: 4 },
//     { name: "Chandler", avgRainfall: 0.42857142857142855 },
//     { name: "Charlotte", avgRainfall: 2 },
//     { name: "Dallas", avgRainfall: 3.7142857142857144 },
// ]





// let arr = [1, 2, 3]; (function () { for (x in arr) arr.unshift(arr.pop()); console.log(arr); })();

// let randomAdder = function (arr = ["a", "b"]) { arr[arr.length * arr.length] = arr.length * arr.length; };

// randomAdder(arr); randomAdder();

// console.log(arr[9]); console.log(arr[8]);



// (function () { if ((-100 && 100 && "0") || [] === true || 0) { console.log(1); if ([] || (0 && false)) { console.log(2); }

// if (Infinity && NaN && "false") {
//   console.log(3);
//   if ("") {
//     console.log(4);
//   }
// } else {
//   console.log(5);
//   if (({} || false === "") && !(null && undefined)) {
//     console.log(6);
//   }
// }
// } else { console.log(7); } })();




// let a = "This only works if and only if";

// let b = a.slice(a.indexOf("only"));

// let c = b.lastIndexOf("only");

// b[c] = "i";

// console.log(a); console.log(b);


// let a = "This only works if and only if";

// let b = a.slice(a.indexOf("only"));

// let c = b.lastIndexOf("only");

// b[c] = "i";

// console.log(a); console.log(b);
// function f() { console.log(arguments); }

// function f(a, b) { return a + b; }

// console.log(f(2, 3, 4, 5));

// function f(x, y, z, t) { return x + y + z + t; }

// console.log(f(2, 3, 4, 5));

let users = [ 
    { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, orders: [{ id: 1, name: "GOT Book Series" }], }, 
{ name: "Bhavesh", age: 37, address: { local: "48 DT Row", city: "Hyderabad", state: "AP", }, }, 
{ name: "Jasbir", age: 38, address: { local: "196 Lama Bhavan", city: "Gangtok", state: "Sikkim", }, orders: [ { id: 1, name: "Chair" }, { id: 2, name: "PS5" }, ], }, ];

console.log(users);








