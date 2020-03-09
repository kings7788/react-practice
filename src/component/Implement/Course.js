import React, { Component } from 'react'
import style from './Course.module.css'
class Course extends Component{

  render() {
    const { title, headline, image} = this.props
    return (
      <div className={style.course}>
        <div
          className={style.cover}
          style={{
            backgroundImage: `url(${image})`,
            width: 320
          }}
        />
        <div className={style.info}>
          <h5>{title}</h5>
        </div>
      </div>
    )
  }
}
export default Course;