window.onload = function(){loadFunc()};
window.onresize = function(){resizeFunc()};

function loadFunc() {
	document.getElementById('main').classList.remove('loading');
	document.getElementById('main').classList.remove('active');
	document.getElementById('rocket').classList.remove('boom');
	document.getElementById('smoke').classList.remove('boom');
	document.getElementById('rocket').classList.add('hide');
	document.getElementById('smoke').classList.add('hide');
	setTimeout(function(){
		document.getElementById('rocket').classList.remove('hide');
		document.getElementById('smoke').classList.remove('hide');
	}, 500);
	setTimeout(function(){document.getElementById('main').classList.add('active');
		document.getElementById('rocket').classList.add('boom');
		document.getElementById('smoke').classList.add('boom');
	}, 1000);
}

function resizeFunc() {
	if (window.innerWidth >= 550 && window.matchMedia('(orientation: landscape)').matches) {
		document.getElementById('rocket').classList.remove('boom');
		document.getElementById('smoke').classList.remove('boom');
		document.getElementById('rocket').classList.add('hide');
		document.getElementById('smoke').classList.add('hide');
		setTimeout(function(){ 
			document.getElementById('rocket').classList.remove('hide');
			document.getElementById('smoke').classList.remove('hide');
		}, 500);
		setTimeout(function(){ 
			document.getElementById('rocket').classList.add('boom');
			document.getElementById('smoke').classList.add('boom');
		}, 1000);
	}
}