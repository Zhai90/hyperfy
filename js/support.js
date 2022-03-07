// navbar stuff

const nav = {
  home: function () {
    window.location.replace("../");
    console.log("Attempted to reditect to home!");
  },
  about: function () {
    window.location.replace("../index.html#about-top");
    console.log("Attempted to reditect to home!");
  },
  discord: function () {
    window.open("https://discord.gg/V3bPCEcyMT");
    console.log("Tab Opened with link!");
  },
  support: function () {
    let s = document.querySelector("body");
    s.scrollIntoView();
    console.log("Scrolled Into 's'!");
  },
  dropdown: function () {
    let d = document.querySelector(".nav-link:nth-child(5)");
    d.classList.toggle("dropdown");
    if (d.classList.contains("dropdown")) {
      let n = document.querySelector("nav");
      n.style.height = "26vh";
    } else {
      let n = document.querySelector("nav");
      n.style.height = "12vh";
    }
    console.log("Dropdowned");
  },
};

const navbar = document.querySelector("nav");
window.onscroll = () => {
  if (window.scrollY > 600) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
