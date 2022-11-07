const amount = 12;

if (amount > 10) console.log("Greater ");
else console.log("small no");

//2

// process - info about env where the program is being executed

setInterval(() => {
  console.log("Hello - set interval");
}, 1000);

setTimeout(() => {
  console.log("Hello - set in timeout");
}, 1000);
