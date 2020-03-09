import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Course from './Course'

const api = 'https://api.hiskio.com/v1/courses?profession_id=1'
class InfiniteScroll extends Component {

  state = {
    courses: [],
    next: null,
    loading: true,
  }
  componentDidMount () {
    this.fetchData(api)
    window.addEventListener('scroll', this.onScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }
  onScroll = () => {
    const { next, loading } = this.state;
    console.log('loading:',loading)
    if (loading) return;
    if (!next) return;
    console.log('hi')
    if (
      window.scrollY + window.innerHeight >=
      document.body.scrollHeight - 100
    ) {
      //load next
      console.log(next)
      this.fetchData(next)
    }
  }
  fetchData = url => {
    this.setState({
      loading: true,
    })
    fetch(url)
      .then(rs => rs.json())
      .then(data => {
        this.setState({
          courses: [...this.state.courses, ...data.data],
          next: data.links.next,
          loading: false,
        })
      })
  }
  render() {
    const { courses } = this.state

    return (
      <div>
        {courses.map((course) => (
          <Course key={course.id} {...course}/>
        ))}

      </div>
    )
  }
}

export default InfiniteScroll;