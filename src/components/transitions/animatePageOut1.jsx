import gsap from "gsap"

export default function animatePageOut1(to, navigate) {
   const enterTl = gsap.timeline({
      onComplete: () => enterTl.revert(),
      defaults: {
         duration: 1,
         ease: 'expo.inOut'
      }
   })


   enterTl
      .set('nav', { pointerEvents: 'none' })
      .set('body', { cursor: 'progress' })
      .to('.main', { opacity: 0.5, y: '-10vh', duration: 1, ease: 'power1.inOut' })
      .to('.overlay', { y: 0, onComplete: () => navigate(to) }, 0.0)
      .to('.overlay', { y: '-100vh' })
}