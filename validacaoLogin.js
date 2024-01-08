const form = document.querySelectorById(".form");
const campos = document.querySelectorAll(".required");
const span = document.querySelectorAll(".span-required");
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

function validaEmail(email) {
  return emailRegex.test(email);
}
