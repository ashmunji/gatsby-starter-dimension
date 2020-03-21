import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
    </div>
    <div className="content">
      <div className="inner">
        <h1>Ashwini Munji</h1>
        <p>
          Ashwini Munji is an Interior Designer currently working in the San Fransisco Bay Area. She has Bachelors in Interior Design from JNTU University, Hyderabad, India. Her research
          interests include Landcape Architecture and Architecture. 
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a href="http://portfolio.nimu.work">Portfolio</a>
        </li> 
        <li>
          <a href="http://blog.nimu.work">Blog</a>
        </li>
        <li>
          <a href="http://resume.nimu.work">Resumé</a>
        </li>
        <li>
          <a href="mailto:ashwinimunji16@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
