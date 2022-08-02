import clsx from 'clsx'

function HomeApplication() {
  return (
    <section className="Home__application" id="application">
      <div className={clsx('Home__application__wrapper', 'container')}>
        <div className="Home__application__layout">
          <div className="Home__application__vdo-wrapper">
            <video controls loop autoPlay muted>
              <track kind="captions" />
              <source src="/mp4/BubblyPowerApp.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="Home__application__vdo-image"></div>
          </div>
          <div className="Home__application__content">
            <h1 className="h-title">“The Bubbly Power”</h1>
            <p>Web & Mobile Application that will be your NFT assistant.</p>
            <p className="h-txt-justify">
              The main features will be rolled out for a beta testing before the
              mint date. And we will never stop developing. More features will
              be added in the future with regards to the community feedback.
              Please check out the latest updates in our discord.
            </p>
          </div>
          <div className="Home__application__img-comparison"></div>
        </div>
      </div>
    </section>
  )
}

export default HomeApplication
