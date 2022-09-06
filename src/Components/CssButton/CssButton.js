import React from 'react'
import "./button.css"

const CssButton = ({label}) => {
  return (
    <div>
    <button class="button-24" role="button">{label}</button>
    </div>
  )
}

export default CssButton
