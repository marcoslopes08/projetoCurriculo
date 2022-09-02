let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .fromTo(".resumo-objetivo", { opacity: 0 }, { opacity: 1, duration: .9 })
  .from(".resumo-objetivo", { x: -600,  duration: 5.5 }, "-=5.5")

let scene = new ScrollMagic.Scene({
  triggerElemet: "resumo-objetivo",
  duration: "200%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("resumo-objetivo")
  .addTo(controller);

