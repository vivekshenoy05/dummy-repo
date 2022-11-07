const { readFile, writeFile } = require("fs");

//in asynchronous method we need to provide the call back

// when the functionality is complete we run that call back

//in readFile first paramenter is path and second is callback

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  //   console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the result:${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log(result);
        }
      }
    );
  });
});
