// Number merupakan function yang digunakan untuk melakukan konversi ke tipe data number
const input = "1234567"; // string
const number = Number(input); // konversi ke number
console.log(number); // 5

// static properties
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

// Number static method
const data = Number("12345");
console.log(Number.isInteger(data)); // true
console.log(Number.isNaN(data)); // false

// Number instance method
const value = Number(12345);
console.log(value.toString(2)); // hasilnya string binary
console.log(value.toLocaleString("id-ID"));
