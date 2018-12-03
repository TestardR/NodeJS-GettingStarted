// const theOneFunc = () => {};

// setTimeout(theOneFunc, 4 * 1000);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
const message1 = 'Hello after 4 seconds';
const message2 = 'Hello after 8 seconds';

const delay = () => {
  setTimeout(() => {
    console.log(message1);
  }, 1000);

  setTimeout(() => {
    console.log(message2);
  }, 2000);
};

delay();
