window.onscroll = function() {scrollFunc()};
	
function scrollFunc() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").classList.remove("top");
        document.getElementById("header").classList.remove("txt-shadow");
    } else {
        document.getElementById("header").classList.add("top");
        document.getElementById("header").classList.add("txt-shadow");
    }
}