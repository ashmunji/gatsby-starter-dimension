import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo"></div>
    <div className="content">
      <div className="inner">
        <h1 id="headerName">Ashwini Munji</h1>
        <p>
          Hi, I'm the name you see above or simply Nimu. I'm currently in graduate school pursuing a Master's in Landscape Architecture. I was born in  Hyderabad, India, currently residing in the Bay Area.
        </p>
        <p>
        I earned my Bachelor's Degree in Interior Design from JNAFAU. After working for a couple of small and large-scale firms, I quit my full-time job to pursue my other interests and to travel. 
        During this time, I rekindled my love for the arts. I'm a self-taught illustrator and an amateur animator. You can find my works on Instagram, Dribbble, and Behance. To see the process behind some of my artwork, please visit my Youtube channel. Don't forget to check my Gumroad account for some free giveaways.
        </p>
        <p>
        During my spare time, I like to experiment with cooking, learn a new craft or blog.
        </p>
        <p>
        When the lockdown was declared, I wrote and sketched my first illustrated series - The adventures of Nimu, Roro & Munni.
        </p>
        <p>
        I also like to believe that I'm a problem solver and constantly think of innovative ways to do mundane tasks. (More on this soon) 
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
