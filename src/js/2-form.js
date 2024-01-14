const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

function onInput() {
  const userData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

const storedData = localStorage.getItem(STORAGE_KEY);
if (storedData) {
  const parsedData = JSON.parse(storedData);
  email.value = parsedData.email;
  message.value = parsedData.message;
}

function onSubmit(evt) {
  evt.preventDefault();
  if (email.value.trim() && message.value.trim()) {
    const formData = {
      email: email.value,
      message: message.value,
    };
    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  }
}
