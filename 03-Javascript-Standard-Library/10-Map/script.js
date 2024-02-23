// Map
const map = new Map();
map.set("Name", "Muhammad Rizky");
map.set("Address", "Indonesia");

console.log(map);
console.log(map.get("Name"));
console.log(map.get("Address"));

for (const element of map) {
  console.log(`${element[0]} : ${element[1]}`);
}
