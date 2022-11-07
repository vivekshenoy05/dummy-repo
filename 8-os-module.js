const os = require("os");

//info about user

const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} secconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
