import clsx from 'clsx'
import Slider from '@ant-design/react-slick'
import { nanoid } from 'nanoid'

function HomeStory() {
  const items = [...Array(4).keys()]
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    cssEase: 'linear',
    adaptiveHeight: false,
    variableWidth: true,
    centerPadding: 0,
  }

  return (
    <section className="Home__story" id="story">
      <div className={clsx('Home__story__wrapper', 'container')}>
        <h1 className="Home__story__title">WELCOME TO THE WORLD OF BUBBLY</h1>
        <h1 className="h-title Home__story__topic">
          ‘Fun from Arts, Function From App’
        </h1>
        <p>
          Once the rocket ship gears up to a full-stream, it launches into the
          universe. Bubbly will blow your mind with its magical powers. Inspired
          by childhood memories, with a narrative of cultivating conscience and
          encouragement for those to step-out of their comfort zones, whilst
          feeling protected and supported.
        </p>
        <p>
          This creative, colourful and adventurous world occupied by the coolest
          characters awaits!
        </p>

        <div className="Home__story__list">
          <Slider {...settings} className="Home__story__slick-list">
            {items.map((item) => {
              return (
                <div key={nanoid()}>
                  <div
                    key={item}
                    className="Home__story__item"
                    style={{
                      backgroundImage: `url(/images/story-bubbly-${
                        item + 1
                      }.png)`,
                    }}
                  ></div>{' '}
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default HomeStory
