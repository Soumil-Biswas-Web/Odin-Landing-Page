gsap.registerPlugin(ScrollTrigger);

// Load Header items
gsap.from(".header a", {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// Load images in image-panel
gsap.from(".img-box", {
  scrollTrigger: {
    trigger: ".image-panel",
    start: "top 80%", // when top of image-panel hits 80% of viewport height
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});

//  Load text from mid quote
gsap.from(".quote p", {
    scrollTrigger: {
      trigger: ".quote",
      start: "top 80%", // when top of image-panel hits 80% of viewport height
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// Load CTA
gsap.from(".call", {
    scrollTrigger: {
      trigger: ".call",
      start: "top 80%", // when top of image-panel hits 80% of viewport height
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});