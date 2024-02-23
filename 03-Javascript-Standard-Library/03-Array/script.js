{
  // forEach -> untuk melakukan iterasi array
  const array = ["Muhammad", "Muhammad", "Rizky"];

  // anonymous function
  array.forEach(function (value, index) {
    console.log(`${index}: ${value}`);
  });

  // using arrow function
  array.forEach((value, index) => console.log(`${index} : ${value}`));

  array.forEach((value) => console.log(value));
}

{
  // array queue -> antrian
  // First In First Out -> data yang masuka ada di urutan paling belakang kayak antrian
  // data keluar di urutan paling depan
  const queue = [];

  // push() -> untuk menambah data paling belakang
  queue.push("one");
  queue.push("two");
  queue.push("three");

  // shift() -> mengambil dan menghapus data paling depan
  // ini hasilnya one, two, three
  console.log(queue.shift());
  console.log(queue.shift());
  console.log(queue.shift());
}

{
  // array stack
  // LIFO -> last In First Out
  const stack = [];

  stack.push("four");
  stack.push("five");
  stack.push("six");

  // pop() -> untuk mengambil dan menghapus data paling belakang
  // ini hasilnya six, five, four
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
}

// array search
{
  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  console.log(source.find((value) => value > 3)); // yang pertama kali ketemu setelah 3 adalah 4, jadi outputnya 4
  console.log(source.findIndex((value) => value > 3)); // mencari index dari elemen yang nilainya lebih dari 3, 4 indexnya 3, jadi outputnya 3
  console.log(source.includes(7)); // false
  console.log(source.indexOf(5)); // angka 5 indexnya 4, kalo misal ga ada angkanya outputnya -1
  console.log(source.lastIndexOf(5)); // outputnya 9 karena yang diitung 5 yang terakhir
}

{
  // array filter
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(numbers.filter((value) => value % 2 === 0)); // angka genap 2, 4, 6 dst
  console.log(numbers.filter((value) => value % 2 === 1)); // angka ganjil 3, 5, 7 dst
}

{
  // array transform
  // map
  const names = "Muhammad Rizky".split(" ");
  console.log(names.map((value) => value.toUpperCase()));

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(numbers.reduce((result, value) => result + value)); // 1 + 2 + 3 dst
  console.log(numbers.reduceRight((result, value) => result + value)); // 10 + 9 + 8 dst
}
