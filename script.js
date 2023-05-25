//-----------------NAVIGATION BAR SCRIPT--------------------
const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger")
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul")
const header = document.querySelector(".header")
const close_menu = document.querySelectorAll(".header .nav-bar .nav-list ul li a")

//navigation - active 
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    mobile_menu.classList.toggle("active")
})
//background when scrolling
document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY
    if (scroll_position > 650) {
        header.style.backgroundColor = "rgb(13, 13, 13, 0.8)"
        header.style.backdropFilter = "blur(0.2rem)"
    } else {
        header.style.backgroundColor = "transparent"
        header.style.backdropFilter = "none"
    }
})
//close menu
close_menu.forEach((item) => {
    item.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        mobile_menu.classList.toggle("active")
    })
})

//----------Scroll Indicator----------
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() }

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    var scrolled = (winScroll / height) * 100
    document.getElementById("myBar").style.width = scrolled + "%"
}



//---------- BUTTON RIPPLE EFFECT USED IN HOME SECTION-----------
//selecting the button
const homeBtn = document.querySelector(".home_action")
//adding an event listener to the button
homeBtn.addEventListener("mouseenter", function (e) {

    //getting the x and y coordinates of the mouse pointer
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop

    //creating a span element
    let ripples = document.createElement("span")

    //setting the width and height of the span element to the width and height of the button
    ripples.style.left = x + "px"
    ripples.style.top = y + "px"

    //appending the span element to the button
    this.appendChild(ripples)

    //removing the span element after 1 second
    setTimeout(() => {
        ripples.remove()
    }, 1000)
});

//--------------COUNTING SCRIPT USED IN ABOUT SECTION--------------
let valueDisplays = document.querySelectorAll(".num")
let interval = 4000
/* Creating a forech loop to set each retrieved "valueDispley" to the initial value = 0
and the final value equal to that specified in "data-value" (html), the initial value 
increments by one until it reaches the final value*/
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0

    let endValue = parseInt(valueDisplay.getAttribute("data-value"))
    //calculating the duration of the animation
    let duration = Math.floor(interval / endValue)
    //creating a counter
    let counter = setInterval(function () {
        startValue += 1
        valueDisplay.textContent = startValue
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration)
})

//-----------CAROUSEL SCRIPT USED IN TESTIMONIAL SECTION-----------
//AUTOMATIC SLIDE SHOW
let autoSlideIndex = 0
automaticSlideShow()

function automaticSlideShow() {
    let i
    let autoSlides = document.getElementsByClassName("testimonial_content")
    //hide slides
    for (i = 0; i < autoSlides.length; i++) {
        autoSlides[i].style.display = "none"
    }
    //increment slide index
    autoSlideIndex++
    //if slide index is greater than the number of slides, reset to 1
    if (autoSlideIndex > autoSlides.length) { autoSlideIndex = 1 }
    //display slide
    autoSlides[autoSlideIndex - 1].style.display = "block"
    //change image every 8 seconds
    setTimeout(automaticSlideShow, 8000)
}

let slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n)
}

// Thumbnail controls
function currentSlide(n){
    showSlides(slideIndex = n)
}
//SLIDE SHOW
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("testimonial_content")
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[slideIndex - 1].style.display = "block" 
}

//-----------SEND EMAIL-----------
function sendEmail(e) {
    Email.send({
        SecureToken: "15c0a813-f7b1-4530-b8ff-edc0c29df28b",
        To: "test4ragnarok@gmail.com",
        From: document.getElementById("email").value,
        Subject: "New message from ragnarok website",
        Body: "First name: " + document.getElementById("first_name").value
            + "<br>" + "Last name: " + document.getElementById("last_name").value
            + "<br>" + "Email: " + document.getElementById("email").value
            + "<br>" + "Phone: " + document.getElementById("phone_number").value
            + "<br>" + "Message: " + document.getElementById("message").value
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your message has been sent successfully",
                    showConfirmButton: false,
                    timer: 2500
                })
            }
            else {
                console.error(message);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                })
            }
        }
    )
}





