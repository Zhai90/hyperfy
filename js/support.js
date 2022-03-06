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
  };
  
  const navbar = document.querySelector("nav");
  window.onscroll = () => {
    if (window.scrollY > 600) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };
  