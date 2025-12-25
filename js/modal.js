const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const openFormLink = document.getElementById('openForm');
const closeModalBtn = document.getElementById('closeModal');

function openModal() {
  modal.classList.add('open');
  history.pushState({}, '', '#search');
  fadeIn(modal.querySelector('.modal__content'));
}

function closeModal() {
  modal.classList.remove('open');
  history.pushState({}, '', location.pathname);
}

openModalBtn.onclick = openModal;
openFormLink.onclick = openModal;
closeModalBtn.onclick = closeModal;

window.onpopstate = () => modal.classList.remove('open');

