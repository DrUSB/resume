
function nameChanger(name) {
    var h3Name = document.getElementById("myName");
    h3Name.innerHTML = name;
}

document.addEventListener("DOMContentLoaded",() => {

    nameChanger("Max Salimian");


    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = () => {
        modal.style.display = "block";
    }

    span.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    

});

function validateForm() {
    var phoneNumber = document.getElementById("txtPhone").value;
    if (isNaN(phoneNumber)|| phoneNumber[0] != 0 || phoneNumber[1] != 7 || phoneNumber.length != 11){
        alert("Incorrect Phone number format")
        return false;
    }
}


/*SLideshow code */
var slideIndex = 1;



function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

