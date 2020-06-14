import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo"></div>
    <div className="content">
      <div className="inner">
        <h1 id="headerName">Ashwini Munji</h1>
        <p>
        Ashwini Munji or Nimu is currently in graduate school pursuing a Master's in Landscape Architecture. She was born in Hyderabad, India, and is currently a resident of the Bay Area.
        </p>
        <p>
        She earned her Bachelor's Degree in Interior Design from JNAFAU. After working for a couple of small and large-scale firms, she quit her full-time job to pursue her other interests including travel. 
        </p>
        <p>
        During that phase, she rekindled with her love for the arts. She is a self-taught illustrator and an amateur animator. You can find her works on Instagram, Dribbble, and Behance. To see the process behind some of her artwork, please visit her Youtube channel. Don't forget to check her Gumroad account for free giveaways.
        </p>
        <p>
        When the lockdown was declared, she wrote and sketched her first illustrated series - The adventures of Nimu, Roro & Munni.
        </p>
        <p>
        She is also a problem solver and constantly thinks of innovative ways to do mundane tasks.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a href="http://spacenarrative.com">Studio</a>
        </li> 
        <li>
          <a href="http://nimu.work">Blog</a>
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
