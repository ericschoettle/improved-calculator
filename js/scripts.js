// back end logic
var add = function(number1, number2) {
  return number1 + number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var sub = function(number1, number2) {
  return number1 - number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var exp = function(number1, number2) {
  return number1 ** number2;
};


// front-end logic
$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var string = $("#input1").val()

    var regexNumber = /[/d]*/
    var regexOperator = /[+=/*^]/

    var numbers = string.split(regexOperator)
    var number1 = parseFloat(numbers[0]);
    var number2 = parseFloat(numbers[1]);

    var operator = regexOperator.exec(string)

    var result;

    if (operator[0] === "+") {
      result = add(number1, number2);
    } else if (operator[0] === "-") {
      result = subtract(number1, number2);
    } else if (operator[0] === "*") {
      result = multiply(number1, number2);
    } else if (operator[0] === "/") {
      result = divide(number1, number2);
    } else if (operator[0] === "^") {
      result = exp(number1, number2);
    }
    $("#output").text(result);
  });
});
