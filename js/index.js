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

// use desktop mode or bald (this code saves you from being bald)
function parseUA() {
  var u = navigator.userAgent;
  var u2 = navigator.userAgent.toLowerCase();
  return { 
      trident: u.indexOf('Trident') > -1, 
      presto: u.indexOf('Presto') > -1, 
      webKit: u.indexOf('AppleWebKit') > -1, 
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, 
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), 
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), 
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
      iPhone: u.indexOf('iPhone') > -1, 
      iPad: u.indexOf('iPad') > -1, 
      webApp: u.indexOf('Safari') == -1, 
      iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
      weixin: u2.match(/MicroMessenger/i) == "micromessenger",
      ali: u.indexOf('AliApp') > -1,
  };
}
var ua = parseUA();

if (ua.mobile) {
  location.href = './pc.html';
}
