/**
 * Created by Jacob on 09-07-2018.
 */
var slideIndex = 0;


function carousel() {
   var i;
    var x = document.getElementsByClassName("expedia-offers");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000);
}