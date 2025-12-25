const form=document.getElementById('contactForm');
const status=document.getElementById('formStatus');
const btn=form.querySelector('button');

form.onsubmit=e=>{
e.preventDefault();
status.textContent='Заказ оформлен';
};

document.getElementById('printTicket').onclick=()=>{
document.getElementById('tFio').textContent=form.fio.value;
document.getElementById('tPhone').textContent=form.phone.value;
document.getElementById('tCity').textContent=form.city.value;
document.getElementById('tTo').textContent=form.to.value;
document.getElementById('tDate').textContent=form.date.value;
document.getElementById('tId').textContent=Math.floor(Math.random()*1000000);
window.print();
};