menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav"){
		x.className += " responsive";
	}
	else{
		x.className = "topnav"
	}
}

function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -50);
      setTimeout(backToTop, 0);
    }
  }
  
var arrow = document.querySelector('.up');
arrow.addEventListener('click', backToTop);

