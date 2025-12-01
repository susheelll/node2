const abc= require('events');// ✅ EventEmitter VARIABLE NAME CHANGED

const obj = new abc();

// Event listener for greet
obj.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Event listener for farewell
obj.on('farewell', (name) => {
  console.log(`Goodbye, ${name}!`);
});

// Function that triggers the events
const fn = () => {// ✅ Function name changed (simulateUserActions → xyzFunction)
  obj.emit('greet', 'Alice');//greet
  obj.emit('farewell', 'Bob');
};

// Export the function
module.exports = fn;//&***imp

