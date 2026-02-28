function hamburg(){
    document.querySelector('.dropdown').style.transform = 'translateY(0)';
}

function cancel(){
    document.querySelector('.dropdown').style.transform = 'translateY(-500px)';
}

const texts = [
    "ASP.NET Developer",
    "Backend Engineer",
    "API Specialist"
];

let speed = 100;
let textIndex = 0;
let charIndex = 0;
const element = document.querySelector('.typewriter-text');

function type(){
    if(charIndex < texts[textIndex].length){
        element.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
    }else{
        setTimeout(erase, 1000);
    }
}

function erase(){
    if(element.innerHTML.length > 0){
        element.innerHTML = element.innerHTML.slice(0,-1);
        setTimeout(erase, 50);
    }else{
        textIndex = (textIndex+1)%texts.length;
        charIndex=0;
        setTimeout(type,500);
    }
}

window.onload = type;




// كل السكاشن اللي عندها id
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".links a[href^='#']");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            // Reveal Animation
            entry.target.classList.add("show");

            // Active Link
            navLinks.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + entry.target.id) {
                    link.classList.add("active");
                }
            });

        }

    });
}, {
    threshold: 0.6
});

sections.forEach(section => {
    observer.observe(section);
});
