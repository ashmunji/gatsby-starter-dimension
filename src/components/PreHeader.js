import PropTypes from 'prop-types'
import React from 'react'

const PreHeader = props => (
  //<div class="fas fa-moon" style={{position: 'absolute;top: 10px;right: 10px'}} onClick={() => {props.handleBGChange()}}>Change Color </div>
  <span className="icon fa-moon-o" style={{position: 'absolute;top: 10px;right: 10px', display: '{props.getDisplayProp('moon')}'}} onClick={() => {props.handleBGChange()}}></span>
  <span className="icon fa-sun-o" style={{position: 'absolute;top: 10px;right: 10px', display: '{props.getDisplayProp('sun')}' }} onClick={() => {props.handleBGChange()}}></span>
)

PreHeader.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default PreHeader
