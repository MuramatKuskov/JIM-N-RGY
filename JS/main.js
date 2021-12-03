const trigger = document.querySelector('.nav__point');
const subj = document.querySelector('.nav__list');

const subjGrow = () => {
	subj.style.height = '80.5px';
	trigger.style.top = '24px';
	trigger.style.width = '30px';
	trigger.style.height = '30px';
	trigger.style.backgroundSize = '13px';
	trigger.style.backgroundPosition = 'center 1px';
}

const subjShrink = () => {
	subj.style.height = '15px';
	trigger.style.top = '0';
	trigger.style.left = '49%';
	trigger.style.width = '15px';
	trigger.style.height = '15px';
	trigger.style.backgroundSize = '5px';
	trigger.style.backgroundPosition = 'center 1.4px';
}

trigger.onclick = () => {
	if (window.getComputedStyle(subj).height === '15px') {
		subjGrow();
	} else {
		subjShrink();
	}
}

trigger.onmousedown = () => {
	trigger.style.boxShadow = 'none';
}

trigger.onmouseup = () => {
	trigger.style.boxShadow = '1px 1px 5px rgba(0, 0, 0, 0.5)';
}

window.onresize = () => {
	if (window.screen.width < 641) {
		subjShrink();
	} else if (window.screen.width < 768) {
		subj.style.height = '40.5px';
	} else {
		subj.style.height = 'initial';
	}
}