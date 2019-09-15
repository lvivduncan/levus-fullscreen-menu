const menu = document.querySelector('#menu'),
	    nav = document.querySelector('#nav');

// відкриває/закриває меню при натисканні на кнопку
menu.addEventListener('click', () => {
	nav.classList.toggle('open');
	menu.classList.toggle('close');
});

// закриває меню при натисканні на кнопку "Esc"
document.addEventListener( 'keydown', (event) => {
	if(event.code == 'Escape' || event.keyCode == 27){
		nav.classList.remove('open');
		menu.classList.remove('close');
	}
});
