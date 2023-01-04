import React from 'react'
  

function ButtonDialog(props) {

  return (
    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">{props.btnName}</button>
  )
}

export default ButtonDialog;