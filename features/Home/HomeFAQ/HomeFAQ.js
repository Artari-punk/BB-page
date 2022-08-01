import clsx from 'clsx'

import { Collapse } from 'components'

function HomeFAQ(props) {
  const { questions = [] } = props

  return (
    <section className="Home__faq" id="faq">
      <div className={clsx('Home__faq__wrapper', 'container')}>
        <h1 className="h-title h-txt-center Home__faq__title">FAQ</h1>
        <Collapse items={questions} />
      </div>
    </section>
  )
}

export default HomeFAQ
