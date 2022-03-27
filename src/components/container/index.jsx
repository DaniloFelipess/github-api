import React from 'react'
import './styles.css'

function Container(props) {
  return (
    <section className='Container'>
      {props.children}
    </section>
  )
}

export default Container