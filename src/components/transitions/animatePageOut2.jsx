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

      .set('.overlay', { scale: 0.1 })
      .to('.overlay', { y: 0 })
      // .to('.main', { opacity: 0, y: '-10vh' }, '<')
      .to('.overlay', { scale: 1 })
      .to('.overlay', { opacity: 0, onStart: () => navigate(to) })
      // .to('.overlay', { opacity: 0 })
}