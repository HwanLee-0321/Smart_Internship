import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h2>글 목록</h2>
      <hr />
      <Link to='/product/1?best=true'>스터디 SKrr</Link>
      <hr />
      <Link to='/product/2?'>ㅂㅏㅂ SKrr</Link>
      <hr />
      <Link to='/product/3?'>영화아 SKrr</Link>
    </div>
  )
}

export default About