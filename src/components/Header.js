import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
  <div className="changeColor" onClick={() => {props.handleBGChange()}}>Change BG Color</div>
    <div className="logo"></div>
    <div className="content">
      <div className="inner">
        <h1 id="headerName">Ashwini Munji</h1>
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
          <a href="https://drive.google.com/file/d/1vxm4d3gUnQ-JZeSRFq186bPbuygEAJjw/view">Resumé</a>
        </li>
        <li>
          <a href="mailto:munjiashwini@gmail.com">Contact</a>
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
