// Set
// isi datanya selalu unik
// kalo ada data sama, ditampilin cuma satu
const set = new Set();

set.add("Muhammad");
set.add("Rizky");
set.add("Muhammad");

console.log(set);
set.forEach((value) => console.log(value)); // iterasi
