const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data');
    
    resolve({
      name: 'Andrew',
      age: 26
    });

    // reject('Something went wrong!');

    // resolve('This is my other resolved data');  // A promise can get resolved or rejected only one time, so this line is going to be completely ignored
  }, 5000); // 5 secs
});

console.log('before');

// Registers the callback from the overload and waits until "promise" resolves, and only then the function executes
// promise.then((data) => {
//   console.log('1', data);
// }).catch((error) => {
//   console.log('error 1: ', error);
// });

// promise.then((data) => {
//   console.log('2', data);
// }, (error) => {
//   console.log('error 2: ', error);
// });

// Promise chaining
promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 5000); // 5 secs
  });
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error 1: ', error);
});

console.log('after');