window.onload = function () {
  let date = new Date();
  let day = date.getDate();
  if (day == 15) {
    document.querySelector(".state").style.color = "green";
    document.querySelector(".state").innerText = "✓";
  } else {
    document.querySelector(".state").style.color = "red";
    document.querySelector(".state").innerText = "X";
  }
  setTimeout(function () {
    document.querySelector(".loading-place").style.opacity = "0";
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    setTimeout(function () {
      document.querySelector(".loading-place").style.display = "none";
    }, 250);
  }, 2500)
}
let items = document.querySelectorAll(".scroll");
window.onscroll = function () {
  items.forEach(item => {
    if (window.scrollY >= item.offsetTop - window.innerHeight / 1.05 && window.scrollY <= item.offsetTop + window.innerHeight / 1.8) {
    item.style.opacity = "1";
    item.style.left = "0%";
    if (item.hasAttribute("data-transform")) {
      item.style.transform = item.dataset.transform;
    }
    } else {
    item.style.opacity = "0";
    item.style.left = "-100%";
    if (item.hasAttribute("data-transform")) {
    item.style.transform = "";
    }
    }
  })
  if (window.scrollY >= 700) {
    document.querySelector(".button-up").style.display = "inline-block";
  } else {
    document.querySelector(".button-up").style.display = "none";
  }
}
document.querySelector(".button-up").onclick = function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}
document.querySelector(".nav-img").onclick = function () {
  document.querySelector(".img-place").style.top = "0%";
  document.querySelector(".img-place").style.left = "0%";
  document.querySelector(".img-place").style.width = "100vw";
  document.querySelector(".img-place").style.height = "100vh";
  document.querySelector(".img-place").style.backgroundColor = "#101010";
  document.querySelector(".nav-img").style.borderRadius = "0%";
  document.querySelector(".nav-img").style.width = "100%";
  document.querySelector("header h5").style.display = "none";
  setTimeout(function () {
  document.querySelector(".close-img").style.display = "flex";
  }, 125)
}
document.querySelector(".close-img").onclick = function () {
  document.querySelector(".img-place").style.top = "2vw";
  document.querySelector(".img-place").style.left = "2.5vw";
  document.querySelector(".img-place").style.width = "12vw";
  document.querySelector(".img-place").style.height = "12vw";
  document.querySelector(".img-place").style.backgroundColor = "transparent";
  document.querySelector(".nav-img").style.borderRadius = "50%";
  document.querySelector(".nav-img").style.width = "80%";
  document.querySelector("header h5").style.display = "block";
  document.querySelector(".close-img").style.display = "none";
}
document.querySelector(".list-button").onclick = function () {
  document.querySelector(".line-one").style.top = "4.6vw";
  document.querySelector(".line-two").style.opacity = "0";
  document.querySelector(".line-three").style.top = "4.6vw";
  document.querySelector(".line-one").style.backgroundColor = "red";
  document.querySelector(".line-three").style.backgroundColor = "red";
  document.querySelector(".line-one").style.transform = "rotate(45deg)";
  document.querySelector(".line-three").style.transform = "rotate(-45deg)";
  document.querySelector(".close-list").style.display = "block";
  document.querySelector(".list").style.opacity = "0.8";
  document.querySelector(".list").style.right = "0vw";
}
document.querySelector(".close-list").onclick = function () {
  document.querySelector(".line-one").style.top = "1vw";
  document.querySelector(".line-two").style.opacity = "1";
  document.querySelector(".line-three").style.top = "8vw";
  document.querySelector(".line-one").style.backgroundColor = "black";
  document.querySelector(".line-three").style.backgroundColor = "black";
  document.querySelector(".line-one").style.transform = "rotate(0deg)";
  document.querySelector(".line-three").style.transform = "rotate(0deg)";
  document.querySelector(".close-list").style.display = "none";
  document.querySelector(".list").style.opacity = "0";
  document.querySelector(".list").style.right = "-100vw";
}
document.querySelector(".creator-chat").onclick = function () {
  window.location.href = "https://wa.me/+201062089220?text=hello+programmer+♥️"
}
document.querySelector(".link").onclick = function () {
  window.location.href = "https://wa.me/+201062089220?text=Hello+,+Programmer+♥️";
}
document.querySelector(".free-fire").onclick = function () {
  setTimeout(function () {
    window.location.href = "free-fire-reg.html";
  }, 450)
}
document.querySelector(".onexbet").onclick = function () {
  setTimeout(function () {
    window.location.href = "onexbet.html";
  }, 450)
}
document.querySelector(".fake-numbers").onclick = function () {
  setTimeout(function () {
    window.location.href = "fake-numbers.html";
  }, 450)
}
document.querySelector(".hack").onclick = function () {
  setTimeout(function () {
    window.location.href = "hack.html";
  }, 450)
}
document.querySelector(".whatsapp").onclick = function () {
  setTimeout(function () {
    window.location.href = "whatsapp.html";
  }, 450)
}
document.querySelector(".tiktok").onclick = function () {
  setTimeout(function () {
    window.location.href = "tiktok.html";
  }, 450)
}
document.querySelector(".admin").onclick = function () {
  setTimeout(function () {
    window.location.href = "admin-victim.html";
  }, 450)
        }
