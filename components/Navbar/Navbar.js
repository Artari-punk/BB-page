import { useState, useCallback, useEffect } from 'react'

import { nanoid } from 'nanoid'
import useSound from 'use-sound'
import clsx from 'clsx'
import Button from 'components/Button'
import { noop } from 'lodash'
import { useEthers } from '@usedapp/core'
import { chain } from '../../utils/constants'

const navs = [
  {
    key: nanoid(),
    name: 'APP',
    link: '#application',
    isBlank: false,
  },
  {
    key: nanoid(),
    name: 'FAQ',
    link: '#faq',
    isBlank: false,
  },
  {
    key: nanoid(),
    name: 'Whitepaper',
    link: 'https://bubbly-1.gitbook.io/whitepaper/',
    isBlank: true,
  },
  {
    key: nanoid(),
    name: 'Team',
    link: '#teams',
    isBlank: false,
  },
  {
    key: nanoid(),
    name: 'Twitter',
    link: 'https://twitter.com/BubblyStory',
    isBlank: true,
  },
  {
    key: nanoid(),
    name: 'Discord',
    link: 'https://discord.com/invite/bubblystory',
    isBlank: true,
  },
  // {
  //   key: nanoid(),
  //   name: 'Connect',
  //   onClick: () => {
  //     console.log('Connect')
  //   },
  // },
]

function Navbar() {
  const { activateBrowserWallet, deactivate, account, error, switchNetwork } = useEthers()

  useEffect(() => {
    if (error && error.name === 'ChainIdError') {
      deactivate()
      switchNetwork(chain.network.chainId)
    }
  }, [error])

  const [play, { stop }] = useSound('/mp3/BUBBLY_MASTER.mp3', {
    interrupt: true,
  })

  const [isPlaying, setIsPlaying] = useState(false)

  const playSong = useCallback(() => {
    setIsPlaying(true)
    play()
  }, [play])

  const stopSong = useCallback(() => {
    setIsPlaying(false)
    stop()
  }, [stop])

  const onConnectClicked = () => {
    if (account) {
      deactivate()
    } else {
      activateBrowserWallet()
    }
  }

  return (
    <navbar className={clsx('Navbar', 'Navbar__wrapper', 'container')}>
      <div className="Navbar__logo">
        <div
          className={clsx(
            'Navbar__logo__btn',
            isPlaying && 'Navbar__logo__pause',
            !isPlaying && 'Navbar__logo__play'
          )}
          role="button"
          onKeyUp={() => noop}
          tabIndex={-1}
          onClick={() => (isPlaying ? stopSong() : playSong())}
        ></div>
        <div className="Navbar__logo__line"></div>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="Navbar__menu-btn__container" htmlFor="menu-toggle">
        <div className="Navbar__menu-btn"></div>
      </label>
      <ul className="Navbar__navs">
        {navs.map((nav) => {
          return (
            <a
              key={nav.key}
              href={nav.link}
              {...(nav.isBlank && { target: '_blank', rel: 'noreferrer' })}
            >
              <li className="Navbar__nav">{nav.name}</li>
            </a>
          )
        })}
        {/* {error && error.name === "ChainIdError" && (<div style={{ color: "#EE786E" }}>{error.message}</div>)} */}
        <Button
          onClick={onConnectClicked}
          style={{
            paddingLeft: '36px',
            paddingRight: '36px',
          }}
          className="Navbar__nav__btn-connect"
        >
          {account
            ? `${account.substring(0, 6)}...${account.slice(-4)}`
            : 'Connect'}
        </Button>
      </ul>
    </navbar>
  )
}

export default Navbar
