import { useState, useRef } from 'react'

import clsx from 'clsx'

import { UserAvatar, Modal } from 'components'

function HomeTeam(props) {
  const { teams: teamList = [] } = props
  const [team, setTeam] = useState({})
  const teams = teamList.filter((t) => t.imageUrl)

  const modal = useRef(null)

  const onShowTeam = (_team) => {
    setTeam(_team)
    modal.current.open()
  }
  
  return (
    <>
      <section className="Home__teams" id="teams">
        <div className={clsx('Home__teams__wrapper', 'container')}>
          <h1 className="h-title h-txt-center">THE BUBBLY TEAM</h1>
          <div className="UserAvatar__list">
            {teams.map((team) => {
              return (
                <UserAvatar
                  key={team.key}
                  {...team}
                  onClick={() => onShowTeam(team)}
                />
              )
            })}
          </div>
        </div>
      </section>
      <Modal ref={modal}>
        <div className="UserAvatarModal__wrapper">
          <h1 className="UserAvatarModal__name">{team.name}</h1>
          <div
            className="UserAvatarModal__image"
            style={{
              ...(team.imageUrl && {
                backgroundImage: `url(${team.imageUrl})`,
              }),
            }}
          ></div>
          <p className={clsx('UserAvatarModal__desc')}>{team.desc}</p>
          {team.profile && (
            <a
              href={`https://twitter.com/${team.profile}`}
              className={clsx('UserAvatarModal__profile')}
              target="_blank"
              rel="noreferrer"
            >
              {team.profile}
            </a>
          )}
        </div>
      </Modal>
    </>
  )
}

export default HomeTeam
