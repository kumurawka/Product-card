const form = document.querySelector('.footer__form');
const emailInput = document.querySelector('.footer__input');
console.log(emailInput);
form.addEventListener("submit", (event)=> {
event.preventDefault();
const emailObj = {
  email: emailInput.value
}
console.log(emailObj);
});

const modal = document.querySelector('#registrationModal');
const openModal = document.querySelector('#openModal');
const closeModalBtn = document.querySelector('#closeModalBtn');
const regForm = document.querySelector('#regForm');

openModal.addEventListener('click', () => {
  modal.classList.add('modal-showed');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('modal-showed');
});

regForm.addEventListener('submit', (event) => {
  event.preventDefault();

const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirmPassword').value;
  if(!regForm.checkValidity() || password !== confirmPassword) {
    alert('Регистрация отклонена. Проверьте корректность заполнения полей.');
};

user = {
  firstName: document.getElementById('firstName').value.trim(),
  lastName: document.getElementById('lastName').value.trim(),
  birthDate: document.getElementById('birthDate').value,
  login: document.getElementById('login').value.trim(),
  createdOn: new Date()
};

console.log('Успешная регистрация!', user);
modal.classList.remove('modal-showed');
regForm.reset();
});




