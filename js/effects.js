// Navbar fade effect
const navbar = document.getElementById("home-navbar");
const mobileNavbar = document.getElementById("mobile-navbar")
const mobileNavList = document.getElementById("mobile-navbar__list");
const mobileNavBtn = document.getElementById('toggleMobileNavBtn');

const transitionNav = () => {
  if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add("navbar-transition");
  } else {
    navbar.classList.remove("navbar-transition")
  }
}

const transitionMobileNav = () => {
  if (window.scrollY > mobileNavbar.offsetTop) {
    mobileNavbar.classList.add("navbar-transition");
  } else {
    mobileNavbar.classList.remove("navbar-transition");
    mobileNavList.classList.add('hidden');
  }
}


// Slide in effect
const missionText = document.getElementById("mission-text");
const mission_transition_point = missionText.offsetTop;

const transitionMission = () => {
  if (window.scrollY > mission_transition_point - 600 
      && window.scrollY < mission_transition_point+ 600) {
    missionText.classList.add("animate-mission")
  } else {
    missionText.classList.remove("animate-mission")
  }
}

window.onscroll = () => {
  transitionNav();
  transitionMobileNav();
  transitionMission();
}

mobileNavBtn.addEventListener("click", () => {
  mobileNavList.classList.toggle("hidden");
  mobileNavbar.classList.add("navbar-transition");
});