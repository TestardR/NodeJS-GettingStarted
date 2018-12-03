// capturing the id
const timerId = setTimeout(() => console.log('You will not see this one!'), 0);

// preventing from run passing the id
clearTimeout(timerId);

// it works the same with clearInterval
