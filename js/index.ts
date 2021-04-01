const btnHamburger = document.getElementById('hamburger_icon');
const headerList = document.getElementById('header_list');
const btnSubmit = document.getElementById('btn_submit');

btnHamburger?.addEventListener('click', () => {
	headerList?.classList.toggle('--active');
});

btnSubmit?.addEventListener('click', (e) => {
	const inputEmail = document.getElementById('input_email') as HTMLInputElement;
	const inputName = document.getElementById('input_name') as HTMLInputElement;
	const inputDescription = document.getElementById(
		'input_description'
	) as HTMLInputElement;

	e.preventDefault();
	console.log(
		`name: ${inputName.value}, email: ${inputEmail.value}, descriptoin: ${inputDescription.value}`
	);
});
