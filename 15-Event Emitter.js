// on - listen for an event
//emit - emit an event
//we can have multiple listners for an event
//order matters we first listen for an event and then emit it

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log(`data received`);
});

customEmitter.on("response", (name, id) => {
  console.log(`data received with ${name} and id ${id}`);
});

customEmitter.emit("response", "Vivek", 45);
