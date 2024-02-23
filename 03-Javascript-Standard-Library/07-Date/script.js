// Date

{
  // membuat object date
  const date1 = new Date(); // membuar date saat ini
  console.log(date1);

  const date2 = new Date(2020, 10, 10); // membuat date dengan tanggal
  console.log(date2);

  const date3 = new Date(2020, 10, 10, 1, 0, 0, 0); // membuat date dengan parameter sampai milis
  console.log(date3);

  const date4 = new Date(1708655769438);
  console.log(date4);
}

{
  // Epoch & Unix timestamp
  const timestamp = Date.now();
  console.log(timestamp);

  const dateUnix = new Date(timestamp);
  console.log(dateUnix);

  console.log(dateUnix.getTime());
}

{
  // parsing date
  // membuat date dari string
  const parseTimestamp = Date.parse("2020-12-18T10:10:10.123+07:00"); // epoch milis
  console.log(parseTimestamp);

  const parseDate = new Date(parseTimestamp);
  console.log(parseDate);
}

{
  // Date getter dan setter
  const date = new Date();
  // date.setFullYear(2020);

  console.log(date.getFullYear());
  console.log(date.getMonth());
  console.log(date.getDate());
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  console.log(date.getMilliseconds());
  console.log(date.getTimezoneOffset());
}
