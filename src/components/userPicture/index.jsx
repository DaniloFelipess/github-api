import React from 'react'
import './styles.css'

function UserPicture(props) {
  return (
    <div className='ContainerPicture'>
        <img className='ProfilePicture' src={props?.url} alt={props?.alternativeText} />
    </div>
  )
}

export default UserPicture