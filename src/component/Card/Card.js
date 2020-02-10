import React from 'react'

import './Card.css'
import CardTeacher from './CardTeacher'
import CardDesc from './CardDesc'

const Card = ({
  data: {
    title,
    desc,
    like,
    students,
    price,
    teacher,
    video,
  },
}) => (

      <div>
        <div className="card">
          <h2 className="card__title">{title}</h2>
          <CardDesc>{desc}</CardDesc>
          <div className="card__stats">
            <div className="card__stat">
              <label>like</label>
              <div>{like}</div>
            </div>
            <div className="card__stat">
              <label>students</label>
              <div>{students}</div>
            </div>
            <div className="card__stat">
              <label>price</label>
              <div>{price}</div>
            </div>
            <div className="card__stat">
              <label>教師</label>
              <CardTeacher data={teacher}/>
            </div>
          </div>
          <video
            className="card__video"
            poster={video.poster}
            src={video.source}
            controls
          />
        </div>
      </div>
    )

export default Card;