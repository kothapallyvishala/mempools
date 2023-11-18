gsap.fromTo(
  ".box_1",
  { y: 700 },
  {
    scrollTrigger: {
      trigger: ".template__int__images",
      start: window.innerHeight,
      end: "bottom",
      scrub: 1,
      invalidateOnRefresh: true,
    },
    y: -100,
  }
);

gsap.fromTo(
  ".box_2",
  { y: -500 },
  {
    scrollTrigger: {
      trigger: ".template__int__images",
      start: window.innerHeight,
      end: "bottom",
      scrub: 1,
    },
    y: 0,
  }
);

gsap.fromTo(
  ".code",
  {
    y: 30,
  },
  {
    scrollTrigger: {
      trigger: ".template__api__images__relative-img__inner",
      start: "top " + window.innerHeight,
      end: "bottom",
      scrub: 1,
    },
    y: -120,
  }
);

gsap.fromTo(
  ".template__api__images__absolute-img",
  { y: 100 },
  {
    scrollTrigger: {
      trigger: ".template__api__images",
      start: "top " + window.innerHeight,
      end: "bottom",
      scrub: 1,
    },
    y: -30,
  }
);

const altImages = document.querySelectorAll("#event_img");

let initialStart = 70;
let initialMarginB = 30;
let initialScale = 0.85;

altImages.forEach((img) => {
  gsap.fromTo(
    img,
    { marginBottom: "10px" },
    {
      scrollTrigger: {
        trigger: ".template__alt__images",
        start: `top ${initialStart}%`,
        end: "bottom",
        scrub: 1,
      },
      scale: initialScale,
      marginBottom: `-${initialMarginB}px`,
    }
  );
  initialStart -= 5;
  initialMarginB -= 10;
  initialScale += 0.05;
});

const bgImages = document.querySelectorAll(".backgroung_img");

bgImages.forEach((img) => {
  gsap.fromTo(
    img,
    { y: -10 },
    {
      scrollTrigger: {
        trigger: ".backgroung_imgs",
        start: `top ` + window.innerHeight,
        end: "bottom",
        scrub: 1,
      },
      y: 100,
    }
  );
});
