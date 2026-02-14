import React, { useRef } from 'react'
// Removed 'IParallax' as it is a TypeScript type
import { Parallax, ParallaxLayer } from '@react-spring/parallax' 
import './sideEffect.css'

// Removed the 'PageProps' interface

const Page = ({ offset, gradient, onClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
)

export default function App() {
  // Removed <IParallax> generic type
  const parallax = useRef(null)

  // Removed type annotation for 'to'
  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }

  return (
    <div className="sideeffect-root">
      <Parallax className="sideeffect-container" ref={parallax} pages={3} horizontal>
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  )
}
