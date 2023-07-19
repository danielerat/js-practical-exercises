function validatePhoneNumber(phone) {
  const expression = /[\d]{3}[ -]*[\d]{3}[- ]*[\d]{4}/g;
  return expression.test(phone);
}

console.log(validatePhoneNumber("123 456 7890"));
