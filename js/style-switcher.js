const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener('scroll', () => {
    if(    document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");

    }
})
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })
}
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark"); 
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})

const links = document.querySelectorAll('li a'); 

links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    let scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50; 
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            links.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

