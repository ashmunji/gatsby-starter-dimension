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
          Hi, I'm an Interior designer based out of San Fransisco Bay Area. After earning my Bacherlors of Interior Design from JNAFAU Hyderabad, I worked on 
          several projects of varying scales. I'm currently open to oppurtunities, including freelance work. 
        </p>
        <p>
        I'm a versatile designer with interests including but not limited to Art, Architecture and Cooking.
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
          <embed src="https://github.com/ashmunji/gatsby-starter-dimension/raw/master/src/custom-assets/ashwini-munji-03-2020.pdf" width="600" height="500" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html"/>
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
