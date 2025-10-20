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

gsap.fromTo(
  ".mouse-icon ",
  { y: 0, opacity: 0.3 },
  {
    y: 5,
    opacity: 1,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    scrub: 3,
  }
);

const navTl1 = gsap.timeline({ defaults: { ease: "power3.out" } });

navTl1.from(".hero-img", { y: -100, opacity: 0, duration: 0.4, delay: 0.3 });

navTl1.from(
  ".hero-text p",
  {
    y: -40,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  },
  "-=1"
);

navTl1.from(
  ".hero-text",
  {
    y: -40,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  },
  "-=0.25"
);

navTl1.from(
  "#counter",
  {
    y: -40,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  },
  "-=0.25"
);

navTl1.from(
  ".left-band",
  {
    x: -40,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  },
  "-=0.25"
);

const counterEl = document.getElementById("counter");
const target = 10;
let obj = { val: 0 };

navTl1.to(
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

gsap.to("#contents", {
  xPercent: -150, // move left by 150% of width
  ease: "none",
  scrollTrigger: {
    trigger: "#contents",
    scroller: "body",
    start: "top top",
    end: () => "+=" + document.querySelector("#contents").scrollWidth,
    scrub: 2,
    pin: true,
    anticipatePin: 1,
  },
});

gsap.fromTo(
  ".collection h2",
  { opacity: 0, y: -40 },
  {
    opacity: 1,
    y: 0,
    duration: 0.3,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".collection h2",
      start: "top 80%",
      toggleActions: "play none none reverse",
      scrub: 3,
    },
  }
);

gsap.fromTo(
  ".collection-box",
  { opacity: 0, x: (i) => (i % 2 === 0 ? -50 : 50) },
  {
    opacity: 1,
    x: 0,
    duration: 0.3,
    stagger: 0,
    scrollTrigger: {
      trigger: ".collection",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  }
);
