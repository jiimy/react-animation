import React from 'react'

const ButtonUi = props => {
  console.log('cc', props)
  return <button onClick={e => props.click(e)}>{props.children}</button>
}

export default ButtonUi
