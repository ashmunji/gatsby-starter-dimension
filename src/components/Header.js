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
          Hi, I'm an Interior designer based out of San Fransisco Bay Area. I've a Bachelors in Interior Design from <a href="https://www.jnafau.ac.in/">JNAFAU, Hyderabad</a>. Currently open to opportunities including freelance projects. I think of myself as a versatile designer with various interests including but not
          limited to Architecture and Landscape Architecture. 
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a href="http://folio.nimu.work">Folio</a>
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
