import clsx from 'clsx'

import { UserCard } from 'components'

function HomeCollection(props) {
  const { showcases = [] } = props

  return (
    <section className="Home__collection" id="collection">
      <div className={clsx('Home__collection__wrapper', 'container')}>
        <h1 className="h-title h-txt-center Home__collection__title">
          WHAT IS YOUR TRIBE?
        </h1>
        <p>
          Bubbly is an NFT collection for anyone unique and original. This pfp
          collection is generated from nearly 200 traits and consists of 23
          Legendary (1/1) pieces. There are 18 rare pieces created from notable
          artists who became Friends of Bubbly which makes the whole collection
          more special.
        </p>
        <p>
          Inspired by childhood memories, the artwork can represent the real
          you, someone you are or want to become.
        </p>
        <div className="UserCard__list">
          {showcases.map((showcase) => {
            return <UserCard key={showcase.key} {...showcase} />
          })}
        </div>
        <p>
          And Yes, the PFP is “You”, Bubblian. The Bubbly is your real buddy,
          who will comfort and guide you to a friendly community of fun,
          friendship and information.
        </p>
        <p>
          Be brave to get out of your comfort zone because Bubbly will always be
          there to protect you. Never fear to Be unique & Be original, Bu-Bo!
        </p>
      </div>
    </section>
  )
}

export default HomeCollection
