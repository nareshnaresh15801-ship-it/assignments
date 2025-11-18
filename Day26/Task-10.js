function createCounter() {
  let count = 0;

  return function() {
    return new Promise((resolve) => {
      setTimeout(() => {
        count++;
        resolve(`Count updated: ${count}`);
      }, 1000);
    });
  };
}
let counter = createCounter();
counter().then(console.log);
counter().then(console.log);