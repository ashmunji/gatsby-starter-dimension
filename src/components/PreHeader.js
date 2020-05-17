import PropTypes from 'prop-types'
import React from 'react'

const PreHeader = props => (
  // <span className="icon fa-sun-o" style={{position: 'absolute;top: 10px;right: 10px', display: '{props.getDisplayProp('sun')}' }} onClick={() => {props.handleBGChange()}}></span>
  <span id="moon" className="icon fa-moon-o" style={{position: 'absolute;top: 10px;right: 10px'}} onClick={() => {props.handleBGChange()}}></span>
  <span id="sun" className="icon fa-sun-o" style={{display:'none', position: 'absolute;top: 10px;right: 10px'}} onClick={() => {props.handleBGChange()}}></span>
 
)

PreHeader.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default PreHeader
