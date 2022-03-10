// Navbar fade effect
const navbar = document.getElementById("home-navbar")
const nav_transition_point = navbar.offsetTop

const transitionNav = () => {
  if (window.scrollY > nav_transition_point) {
    navbar.classList.add("navbar-transition")
  } else {
    navbar.classList.remove("navbar-transition")
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
  transitionMission();
}