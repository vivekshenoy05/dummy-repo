//STREAMS IN NODE JS

// Streams are used to read or write sequentially

//when we want to handle continious streams of data coming in then streams place an important role

// 4 types of streams
// 1-> Writeable used to write the data sequentially
// 2-> Writeable used to read the data sequentially
// 3-> used to both read and write sequentially
//4-> where data can be modified when writing or reading

//by default the size of the buffer is 64kb
//we can even modify the size of the buffer using highWaterMark
//fs.pipe()-> pushing from the readStream into write Stream
//here event is data

const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

//we even have error
stream.on("err", (err) => {
  console.log(err);
});
