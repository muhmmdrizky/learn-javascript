// JSON

const person = {
  firstName: "Muhammad",
  lastName: "Rizky",
  address: {
    country: "Indonesia",
    city: "Bogor",
  },
};

// JSON.stringify() -> konversi dari object ke string
const json = JSON.stringify(person);
console.log(json);

// JSON.parse() -> konversi dari string ke object
const personAgain = JSON.parse(json);
console.log(personAgain);
