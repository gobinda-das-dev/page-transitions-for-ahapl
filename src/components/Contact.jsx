import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import SplitType from 'split-type'

const Contact = () => {
  const container = useRef(null)
  const text = useRef(null)

  useGSAP(() => {
    const splittedText = new SplitType(text.current, { types: 'chars' })
    gsap.set(splittedText.chars, { willChange: 'transform', fontKerning: 'none' })


    gsap.fromTo(splittedText.chars, {
        x: -20,
        yPercent: -10,
        clipPath: 'inset(0% 100% 120% -5%)',
        transformOrigin: '0% 50%',
      }, {
        willChange: 'transform',
        clipPath: 'inset(0% -100% -100% -5%)',
        x: 0,
        yPercent: 0,
        stagger: -0.05,
        duration: 0.8,
        ease: 'power3.out',
    })

  }, { scope: container })

  return (
   <section ref={container} id='contact' className='main h-screen w-full bg-zinc-200 flex items-center justify-center'>
      <h1 ref={text} className='text-4xl font-bold italic font-serif scale-y-125'>This is Contact</h1>
   </section>
  )
}

export default Contact
