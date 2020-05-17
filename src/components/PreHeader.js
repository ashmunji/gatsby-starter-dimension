import PropTypes from 'prop-types'
import React from 'react'

const PreHeader = props => (
  //<div class="fas fa-moon" style={{position: 'absolute;top: 10px;right: 10px'}} onClick={() => {props.handleBGChange()}}>Change Color </div>
  <span className="icon fa-diamond" style={{position: 'absolute;top: 10px;right: 10px'}} onClick={() => {props.handleBGChange()}}></span>
)

PreHeader.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default PreHeader
