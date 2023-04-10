import React from 'react'
import {RiMovie2Line} from 'react-icons/ri'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
  const Navigate = useNavigate();
  const count = useSelector((state)=>state.movie.movieItem)
  return (
    <nav>
        <div className='nav-head'  onClick={()=>Navigate("/watch")}>
            <RiMovie2Line />:
            <p>{count.length}</p>
        </div>
        <h1>HelloMovie.com</h1>
    </nav>
  )
}

export default Navigation