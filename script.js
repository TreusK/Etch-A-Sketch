'use strict'

const container = document.querySelector('#container');
const newGridButton = document.querySelector('#newGrid');
const drawColor = document.querySelector('#drawColor');
let squares = 0;
let hasEvent = false;
let color = 'black';


function resetGrid() {
	squares = prompt('How many squares per side?', 64);
	if (squares > 100 || squares < 1) {
		alert ('Please pick a positive number not over 100');
	} else {
		while (container.lastChild) {
		container.removeChild(container.lastChild);
		};
		makeDivs(squares);
		smollDivs = document.querySelectorAll('.box');
	}
}

function addColor(e) {
	e.srcElement.style.background = color;                     //e.srcElement.classList.add('colored');
}

function makeDivs(amount) {
	for (let i=1; i<=amount*amount; i++) {
		let div = document.createElement('div');
		div.classList.add('box');
		container.appendChild(div);
	}
	container.style.gridTemplateColumns = 'repeat(' + amount + ', 1fr)';
	container.style.gridTemplateRows = 'repeat(' + amount + ', 1fr)';
}

function zPress(e) {
	if (e.code == 'KeyZ') {
		if (hasEvent) {
			for (let elem of smollDivs) {
				elem.removeEventListener('mouseenter', addColor);
			};
		} else {
			for (let elem of smollDivs) {
				elem.addEventListener('mouseenter', addColor);
			};
		};
		hasEvent = !hasEvent;
    }
};


makeDivs(64);
let smollDivs = document.querySelectorAll('.box');

newGridButton.addEventListener('click', resetGrid);
document.addEventListener('keypress', zPress);

drawColor.addEventListener('input', function(e) {
	color = e.srcElement.value;
});

backColor.addEventListener('input', function(e){
	container.style.background = e.srcElement.value;
});


