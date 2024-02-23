// Symbol
{
  const firstName = Symbol("firstName");
  const lastName = Symbol("lastName");

  const person = {};
  person[firstName] = "Muhammad";
  person[lastName] = "Rizky";

  console.log(person);
  console.log(person[firstName]);
  console.log(person[lastName]);
}

{
  const person = {};
  person[Symbol.for("firstName")] = "Abdul";
  person[Symbol.for("lastName")] = "Ahmad";

  console.log(person);
  console.log(person[Symbol.for("firstName")]);
  console.log(person[Symbol.for("lastName")]);
}
