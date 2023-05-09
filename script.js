//your code here
class OutOfRangeError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = 'Expression should only consist of integers and +-/* characters';
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = 'Expression should not have an invalid combination of expression';
  }
}

function evalString(expression) {
  try {
    const validRegex = /^([-+]?[0-9]+(\s*[-+*/]\s*[-+]?[0-9]+)*)$/;

    if (!validRegex.test(expression)) {
      throw new OutOfRangeError();
    }

    return 'Valid expression'; // Replace with your actual evaluation result
  } catch (error) {
    if (error instanceof OutOfRangeError) {
      throw error;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
}

// Usage example
try {
  const result = evalString('1 + 2 * 3');

  console.log(result);
} catch (error) {
  if (error instanceof OutOfRangeError) {
    console.log(error.message);
  } else {
    console.log('An unexpected error occurred');
  }
}
