const factorial = (n) => {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1)
};

// 1, 1, 2, 3, 5, 8, 13, 21

const fibonachi = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonachi(n - 1) + fibonachi(n - 2); 
}

//не рекурсивно

const fib = n => {
  let prev = 0, next = 1;
  for(let i = 0; i < n; i++){
    let temp = next;
    next = prev + next;
    prev = temp;
  }
  return prev;
}

