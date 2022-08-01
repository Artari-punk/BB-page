/* eslint-disable @next/next/no-img-element */
function UserCard(props) {
  const { imageUrl, name, like, dislike } = props

  return (
    <div className="UserCard__flip-card">
      <div className="UserCard__flip-card-inner">
        <div className="UserCard__flip-card-front">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="UserCard__image" />
          ) : (
            <div className="UserCard__empty"></div>
          )}
        </div>
        <div className="UserCard__flip-card-back">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="UserCard__image" />
          ) : (
            <div className="UserCard__empty"></div>
          )}
        </div>
        <h1 className="UserCard__title">{name}</h1>
        <div className="UserCard__flip-card-back__wrapper">
          <h1>{name}</h1>
          <h2>Like:</h2>
          <p>{like}</p>
          <h2>Dislike:</h2>
          <p>{dislike}</p>
        </div>
      </div>
    </div>
  )
}

export default UserCard
