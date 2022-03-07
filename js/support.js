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
// use desktop mode or bald (this code saves you from being bald)
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

var viewMode = getCookie("view-mode");
if (viewMode == "desktop") {
  viewport.setAttribute("content", "width=1024");
} else if (viewMode == "mobile") {
  viewport.setAttribute(
    "content",
    "width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
  );
}
