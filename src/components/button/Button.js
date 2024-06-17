import React from 'react'
import ButtonUi from './ButtonUi'

const Button = ({ children }) => {
  const click = e => {
    console.log('click', e.target.value)
  }
  const props = {
    click,
    children
  }

  return <ButtonUi {...props} />
}

export default Button
