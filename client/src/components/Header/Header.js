import React from 'react'

const Header = ({quote}) => {
  return (
    <div className='col-md-10 col-12 mx-auto my-5'>
      <h1 className='d-flex justify-content-center align-items-center mainImage'>{quote}</h1>
    </div>
  )
}

export default Header