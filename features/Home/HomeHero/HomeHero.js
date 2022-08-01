/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect } from 'react'

// import Image from 'next/image'
import useScrollPosition from '@react-hook/window-scroll'
import { Button } from 'components'

export const cal = (n = 0, max = 0) => Math.min(max, Math.max(0, n))

function HomeHero({ mintModalRef }) {
  const scrollY = useScrollPosition(60 /*fps*/)
  const refWrapper = useRef(null)
  const layerBubblian = useRef(null)
  const layerLogo = useRef(null)
  const layerFly1 = useRef(null)
  const layerFly2 = useRef(null)
  const layerFly3 = useRef(null)
  const layerStar = useRef(null)
  const layerConfett = useRef(null)
  const layerLine = useRef(null)
  const layerCloud = useRef(null)

  useEffect(() => {
    if (layerLogo.current) {
      layerLogo.current.style.top = `${scrollY * 0.05}px`
    }

    if (layerStar.current) {
      layerStar.current.style.top = `${scrollY * 0.05}px`
    }

    if (layerConfett.current) {
      layerConfett.current.style.top = `${scrollY * 0.75}px`
    }

    if (layerLine.current) {
      layerLine.current.style.top = `${scrollY * 0.75}px`
    }

    if (layerFly1.current) {
      layerFly1.current.style.top = `${scrollY * 0.15}px`
    }

    if (layerFly2.current) {
      layerFly2.current.style.top = `${scrollY * 0.25}px`
    }

    if (layerFly3.current) {
      layerFly3.current.style.top = `${scrollY * 0.35}px`
    }

    if (layerBubblian.current) {
      layerBubblian.current.style.top = `${scrollY * 0.005}px`
    }

    if (layerCloud.current) {
      layerCloud.current.style.top = `${scrollY * 0.005}px`
    }
  }, [scrollY])

  const onMintClicked = () => {
    if (mintModalRef.current) {
      mintModalRef.current.open()
    }
  }

  return (
    <section
      className="Home__parallax container"
      id="parallax"
      ref={refWrapper}
    >
      <Button className="Home__parallax__btn" onClick={onMintClicked}>Mint</Button>
      <img
        ref={layerBubblian}
        className="Home__parallax--image-props Home__parallax--absolute Home__parallax__bubblian"
        src="/images/layer-01-Bubblian.png"
        alt="bg bubblian"
        layout="fill"
      />
      <img
        ref={layerLogo}
        className="Home__parallax--image-props Home__parallax--absolute Home__parallax__logo"
        src="/images/layer-02-Bubbly-Logo.png"
        alt="bg logo"
        layout="fill"
      />
      <img
        ref={layerFly1}
        className="Home__parallax--image-props Home__parallax--absolute Home__parallax__fly1"
        src="/images/layer-03-Fly1.png"
        alt="bg fly1"
        layout="fill"
      />
      <img
        ref={layerFly2}
        className="Home__parallax--image-props Home__parallax--absolute Home__parallax__fly2"
        src="/images/layer-04-Fly2.png"
        alt="bg fly2"
        layout="fill"
      />
      <img
        ref={layerFly3}
        className="Home__parallax--image-props Home__parallax--absolute Home__parallax__fly3"
        src="/images/layer-05-Fly3.png"
        alt="bg fly3"
        layout="fill"
      />
      <img
        ref={layerStar}
        className="Home__parallax--image-props Home__parallax--absolute Home__parallax__star"
        src="/images/layer-06-Star.png"
        alt="bg star"
        layout="fill"
      />
      <img
        ref={layerConfett}
        className="Home__parallax--image-props Home__parallax--absolute Home__parallax__confett"
        src="/images/layer-07-confett.png"
        alt="bg confett"
        layout="fill"
      />
      <img
        ref={layerLine}
        className="Home__parallax--image-props Home__parallax--absolute Home__parallax__line"
        src="/images/layer-08-BG-Line.png"
        alt="bg line"
        layout="fill"
      />
      <img
        ref={layerCloud}
        className="Home__parallax--image-props Home__parallax--absolute Home__parallax__cloud"
        alt="bg cloud"
        src="/images/layer-09-cloud.png"
        layout="fill"
      />
    </section>
  )
}

export default HomeHero
