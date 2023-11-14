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
    setTimeout(carousel, 4000);
}
function gotoItineraryPage(){
window.location.href = "https://www.expedia.com/China.d37.Destination-Travel-Guides";
}