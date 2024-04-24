const form = document.getElementById('calculator-form');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;

  let calculation;

  switch (operator) {
    case '+':
      calculation = num1 + num2;
      break;
    case '-':
      calculation = num1 - num2;
      break;
    case '*':
      calculation = num1 * num2;
      break;
    case '/':
      calculation = num1 / num2;
      break;
  }

  result.textContent = calculation;
});