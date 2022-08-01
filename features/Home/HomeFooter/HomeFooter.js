import clsx from 'clsx'

import { Button } from 'components'

function HomeFooter({ mintModalRef }) {

  const onMintClicked = () => {
    if (mintModalRef.current) {
      mintModalRef.current.open()
    }
  }

  return (
    <section className="Home__footer" id="footer">
      <div className={clsx('Home__footer__wrapper', 'container')}>
        <div className="Home__footer__content">
          <div className="Home__footer__logo"></div>
          <Button onClick={onMintClicked}>Mint</Button>
        </div>
        <p>Let’s go together. The journey has just begun!</p>
      </div>
    </section>
  )
}

export default HomeFooter
