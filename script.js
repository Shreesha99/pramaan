gsap.registerPlugin(Expo);

const navTl = gsap.timeline({ defaults: { ease: "power3.out" } });

navTl.from(".navbar .navbar-brand", {
  y: -20,
  opacity: 0,
  duration: 0.3,
  delay: 0.3,
  scrub: 3,
});

navTl.from(".navbar-nav li", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  scrub: 3,
});

navTl.from(".container-fluid .navbar-icons", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  scrub: 3,
});

const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTl.from(".hero-img", { y: -100, opacity: 0, duration: 0.4, delay: 0.3 });

heroTl.from(
  ".hero-text p",
  {
    y: -40,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  },
  "-=1"
);

heroTl.from(
  ".hero-text",
  {
    y: -40,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  },
  "-=0.25"
);

heroTl.from(
  "#counter",
  {
    y: -40,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  },
  "-=0.25"
);

const counterEl = document.getElementById("counter");
const target = 10;
let obj = { val: 0 };

heroTl.to(
  obj,
  {
    val: target,
    duration: 1,
    ease: "power1.out",
    onUpdate: () => {
      counterEl.innerText = Math.floor(obj.val) + "+";
    },
    scrub: 3,
  },
  "-=0.5"
);

const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "shadow", "text-black");
  } else {
    navbar.classList.remove("bg-white", "shadow");
  }
});

const headings = document.querySelectorAll(".underline-animate");

headings.forEach((h) => {
  const underline = h.querySelector(".underline");

  h.addEventListener("mouseenter", () => {
    gsap.to(underline, {
      width: "100%",
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto",
    });
  });

  h.addEventListener("mouseleave", () => {
    gsap.to(underline, {
      width: 0,
      duration: 0.4,
      ease: "power3.in",
      overwrite: "auto",
    });
  });
});

gsap.to(".next-text", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page-2",
    start: "top top+=200",
    end: "top top+=400",
    scrub: true,
  },
});

if (window.innerWidth >= 768) {
  const imgHoverLink = gsap.utils.toArray(".img-hover-effect-link");
  const imgWrap = document.querySelector(".img-wrapper");
  const imgItem = document.querySelector(".img-placeholder img");

  function moveImg(e) {
    gsap.to(imgWrap, {
      duration: 0.8,
      x: e.clientX + 20,
      y: e.clientY + 20,
      ease: "expo.out",
    });
  }

  function linkHover(e) {
    if (e.type === "mouseenter") {
      const imgSrc = e.target.dataset.src;
      gsap.set(imgItem, { attr: { src: imgSrc } });
      gsap.to(imgWrap, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.5,
        ease: "expo.out",
      });
    } else if (e.type === "mouseleave") {
      gsap.to(imgWrap, {
        autoAlpha: 0,
        scale: 0.3,
        duration: 0.5,
        ease: "expo.in",
      });
    }
  }

  imgHoverLink.forEach((link) => {
    link.addEventListener("mouseenter", linkHover);
    link.addEventListener("mouseleave", linkHover);
    link.addEventListener("mousemove", moveImg);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("whatsapp-chat");
  const chatBtn = document.getElementById("whatsapp-button");
  const closeBtn = document.getElementById("close-chat");

  chatBtn.addEventListener("click", () => {
    chatBox.style.display =
      chatBox.style.display === "block" ? "none" : "block";
  });

  closeBtn.addEventListener("click", () => {
    chatBox.style.display = "none";
  });
});

gsap.to("rect", {
  motionPath: "path",
  duration: 20,
  ease: "none",
  repeat: -1,
});

//step 1: get DOM
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}
