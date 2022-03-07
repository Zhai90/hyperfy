// navbar stuff

const nav = {
  home: function () {
    let h = document.querySelector(".top");
    h.scrollIntoView();
    console.log("Scrolled Into 'h'!");
  },
  about: function () {
    let a = document.querySelector(".about-top");
    a.scrollIntoView();
    console.log("Scrolled Into 'a'!");
  },
  discord: function () {
    window.open("https://discord.gg/V3bPCEcyMT");
    console.log("Tab Opened with link!");
  },
  support: function () {
    window.location.replace("../help");
    console.log("Attempted to redirect to Support!");
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

// cool letter glow-up description thingy idfk help me please

var text = document.querySelector(".description-text");
var string =
  "A community driven Discord server that aims to provide top quality and high speed carries in Hypixel Skyblock for the lowest price.";
string.split("");
var i = 0,
  length = string.length;
for (i; i < length; i++) {
  text.innerHTML += "<span>" + string[i] + "</span>";
}
