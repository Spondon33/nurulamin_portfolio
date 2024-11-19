var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var scrollTopBtn = document.getElementById("scrollTopBtn");
var sidemenu = document.getElementById("sidemenu")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// --- hide the logo ---
const logo = document.querySelector('.logo');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('logo-hidden');
    } else {
        nav.classList.remove('logo-hidden');
    }
});


// --- form submission ---
const scriptURL = 'https://script.google.com/macros/s/AKfycbxyLNHRQhSjXjRrk' +
    'zH2808vJi5Uowa7sHuixKm8SXzBuRp_1uXmtnBH3mocngo_-0WxSA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()

    msg.innerHTML = "Message Submitted!"
    setTimeout(function (){
      msg.innerHTML = ""
    }, 5000)

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})