let select = document.querySelector('.select')
let img = document.querySelector('.img')

img.src = select.value


function handler() {
	let getValue = select.value
	img.src = getValue
}

function width() {
	let img = document.querySelector('.img')
	let pr = prompt('Введите ширину')
	img.style.width = pr + 'px'
}

function height() {
	let img = document.querySelector('.img')
	let pr = prompt('Введите высоту')
	img.style.height = pr + 'px'
}

function border() {
	let img = document.querySelector('.img')
	let pr = prompt('Введите ширину рамки')
	img.style.border = pr + 'px solid black'
}

function alt() {
	let img = document.querySelector('.img')
	let pr = prompt('Введите альтернативный текст')
	img.alt = pr
}

