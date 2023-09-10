import React from 'react';
import './NotFound.css'
import NotFoundImg from '../../assets/images/404.webp'

const NotFound = () => {
  return (
    <>
        <div className='notfound--section'>
            <div className='notfound--container'>
                <div className='notfound--content'>
                    <img src={NotFoundImg} alt='Not-Found'/>
                    <h1>Oops! Page not found</h1>
                    <a rel="noreferrer" href="/" class="btn">Back To Homepage</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default NotFound