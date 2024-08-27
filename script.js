document.addEventListener("DOMContentLoaded", function() {
    (function(){
        emailjs.init("TCzTJZ3RS0yrb3OY0"); // Replace 'YOUR_USER_ID' with your EmailJS user ID
    })();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Change these to your EmailJS service ID, template ID, and your user ID
        const serviceID = 'service_mjxi3d4';
        const templateID = 'template_jw44278';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                document.getElementById('status').innerText = 'Message sent successfully!';
            }, (err) => {
                document.getElementById('status').innerText = 'Failed to send message. Please try again.';
                console.log(JSON.stringify(err));
            });
    });
});

// smooth scrolling 

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth Scrolling
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Hide menu after clicking a link (for mobile view)
        document.getElementById('nav-menu').classList.remove('show');
    });
});

// Toggle Menu
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

function animation(){

 var tl = gsap.timeline()
tl.from(".nav-menu a",{
    // y:-50,
    // duration:0.5,
    // stagger:0.5
})

tl.from(".tag-line ",{
    y:100,
    opacity:0,
    stagger:1,
    duration:1,
    // stagger:0.5 
})
tl.from(".tag-line span ",{
    y:100,
    opacity:0,
    stagger:1,
    duration:1,
    stagger:0.5 
})
tl.from(".pra1",{
    opacity:0,
    stagger:1,
    duration:1,
    
})
}
animation();

