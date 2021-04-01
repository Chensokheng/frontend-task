"use strict";
const btnHamburger = document.getElementById('hamburger_icon');
const headerList = document.getElementById('header_list');
const btnSubmit = document.getElementById('btn_submit');
btnHamburger?.addEventListener('click', () => {
    headerList?.classList.toggle('--active');
});
btnSubmit?.addEventListener('click', (e) => {
    const inputEmail = document.getElementById('input_email');
    const inputName = document.getElementById('input_name');
    const inputDescription = document.getElementById('input_description');
    e.preventDefault();
    console.log(`name: ${inputName.value}, email: ${inputEmail.value}, descriptoin: ${inputDescription.value}`);
});
