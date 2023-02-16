/* BACK TO TOP BUTTON */
let mybutton = document.getElementById("myBtn");
const navbar = document.getElementById("nav");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "flex";
    navbar.style.backgroundColor = '#0b1c2c'

  } else {
    mybutton.style.display = "none";
    console.log("Hello")
    navbar.style.backgroundColor = 'rgba(0,0,0,0)'
  }
}




// NAVBAR

/* SMOOTH SCROLLING */

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile nav

    if (link.classList.contains("main-nav-link")) {
      if (headerEl.classList.contains("nav-open")) {
        headerEl.classList.remove("nav-open");
      }
    }
  });
});

// EMAIL SUBMIT
const submit = document.getElementById("email-submit")
submit.addEventListener("click", () => {
  alert("Thank You For Subscribing!")
}) 