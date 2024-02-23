{
  // object freeze
  // mengubah object menjadi object yang tidak bisa dihapus atau diubah atributnya

  const person = {
    firstName: "Muhammad",
    lastName: "Rizky",
  };

  Object.freeze(person);
  // Object.seal -> bisa diubah propertinya tapi ga bisa dihapus

  person.firstName = "Diubah"; // tidak bisa diubah
  delete person.firstName; // tidak bisa dihapus
  console.log(person);
}

{
  // object assign
  // menggabungkan semua attribute
  const source = { firstName: "Rony" };
  const target = { lastName: "Parulian" };

  Object.assign(target, source); // semua atribut yang ada di source dicopy dan dipindahkan ke target
  console.log(target);
}

{
  // object property name and value
  const person = {
    firstName: "Rian",
    lastName: "Ardianto",
  };
  console.log(Object.values(person)); // mengembalikan semua property value, nilainya array [ 'Rian', 'Ardianto' ]
  console.log(Object.getOwnPropertyNames(person)); // mengembalikan semua property name, nilainya array [ 'firstName', 'lastName' ]
}
