/* eslint-disable jsx-a11y/click-events-have-key-events */
function UserAvatar(props) {
  const { name, position, imageUrl, onClick } = props

  return (
    <div
      className="UserAvatar__wrapper heartBeat"
      onClick={() => onClick()}
      role="button"
      tabIndex="-1"
    >
      <div
        className="UserAvatar__image"
        style={{ ...(imageUrl && { backgroundImage: `url(${imageUrl})` }) }}
      ></div>
      <h1 className="UserAvatar__title">{name}</h1>
      <p className="UserAvatar__content">{position}</p>
    </div>
  )
}

export default UserAvatar
