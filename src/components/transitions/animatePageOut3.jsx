import gsap from "gsap"

export default function animatePageOut2(to, navigate) {
   const enterTl = gsap.timeline({
      onComplete: () => enterTl.revert(),
      defaults: {
         duration: 1,
         ease: 'expo.inOut'
      }
   })


   enterTl
      .set('nav', { pointerEvents: 'none'})
      .set('body', { cursor: 'progress' })

      .to('.overlay, .main', { scale: 0.9 })
      .to('.overlay', { y: 0, duration: 1.5 }, '-=0.5')
      .to('.main', { y: '-100vh', duration: 1.5 }, '<')
      .to('.overlay', { scale: 1, duration: 1.2 }, '-=0.5')
      .to('.overlay', { opacity: 0, onStart: () => navigate(to) })
      // .to('.overlay', { opacity: 0 })
}