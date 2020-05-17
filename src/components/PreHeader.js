import PropTypes from 'prop-types'
import React from 'react'

var moonStyle = {
  position: 'absolute;top: 10px;right: 10px',
  display:'none'
};

var sunStyle = {
  position: 'absolute;top: 10px;right: 10px',
};


const PreHeader = props => (
  <div>
  <span id="moon" className="icon fa-moon-o" style={moonStyle} onClick={() => {props.handleBGChange()}}></span>
  <span id="sun" className="icon fa-sun-o" style={sunStyle} onClick={() => {props.handleBGChange()}}></span>
  </div>
 
)

PreHeader.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default PreHeader
