let inp = prompt("Enter day 1-31 : ");
let num1 = +prompt("Enter first number : ");
let num2 = +prompt("Enter second number : ");
let operation = prompt("Enter operation (+,-,*,/) :");

switch (true) {
  case inp > 0 && inp <= 10: {
    console.log(inp, "First decade");
    break
  }
  case inp > 10 && inp <=20: {
    console.log(inp, "Second decade")
    break
  }
  case inp > 20 && inp <=31: {
    console.log(inp, "Third decade")
    break
  }
  default: {
    console.log("No such date")
  }
}

console.log(num1 + operation + num2 + "=" , calculation(num1, num2, operation));

function calculation(num1, num2, operation) {
  if(isNaN(num1-num2)) {
    console.log("Invalide number");
    return false;
  }
  switch(operation) {
    case "+": {
      return num1 + num2
    }
    case "-": {
      return num1 - num2
    }
    case "*": {
      return num1 * num2
    }
    case "/": {
      return num1 / num2
    }
    default: {
      console.log("Error operation", operation);
      return null
    }
  }
}