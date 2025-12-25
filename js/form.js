const form = document.getElementById('contactForm');
const statusText = document.getElementById('formStatus');
const button = form.querySelector('button');

window.addEventListener('load', () => {
  const data = JSON.parse(localStorage.getItem('ticketSearch'));
  if (data) {
    form.from.value = data.from || '';
    form.to.value = data.to || '';
    form.date.value = data.date || '';
  }
});

form.addEventListener('input', () => {
  localStorage.setItem('ticketSearch', JSON.stringify({
    from: form.from.value,
    to: form.to.value,
    date: form.date.value
  }));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  button.disabled = true;
  statusText.textContent = 'Поиск билетов...';

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: new FormData(form)
  })
    .then(res => res.json())
    .then(() => {
      statusText.textContent = 'Билеты найдены!';
      button.disabled = false;
    })
    .catch(() => {
      statusText.textContent = 'Ошибка поиска';
      button.disabled = false;
    });
});
