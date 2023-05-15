var bgPage = document.getElementsByClassName('bg')[0];
var allText = document.getElementsByClassName('text');

var r = 0,
g = 0,
b = 0;
function complementColor () {
    //find the complementary color given rgb values
    red = 255 - r;
    green = 255 - g;
    blue = 255 - b;
    //set the complementary color as the text color
    for (var i = 0; i < allText.length; i++) {
        allText[i].style.color = 'rgb('+red+','+green+','+blue+')';
    }
}
function bg () {
  
	if (r <= 255 && g == 0 && b == 0) {
		r ++;
	}

	if (r == 255 && b == 0 && g <= 255) {
		g ++;
	}

	if (r == 255 && g == 255 && b <= 255) {
		b ++;
	}

	if (b == 255 && g == 255 && r > 0) {
		r --;
	}

	if (r == 0 && b == 255 && g > 0) {
		g --;
	}

	if (r == 0 && g == 0 && b > 0) {
		b --;
	}

	setTimeout(function() {
		bg();
	}, 10);

	bgPage.style.background = 'rgb('+r+','+g+','+b+')';
    complementColor();
}