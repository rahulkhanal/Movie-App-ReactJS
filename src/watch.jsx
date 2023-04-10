import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AiTwotoneDelete} from 'react-icons/ai'
import { deleteMovie } from './movieSlice'

const Watch = () => {
  const movieItem = useSelector((state) => state.movie.movieItem)
  
  const dispatch = useDispatch()
  const handleBin = (item)=>{
    dispatch(deleteMovie(item))
  }
  return (
    <div className='favourite'>
      <h1>Your Favourites:</h1>
      <div>
        <table>
          {movieItem.map((item, index) => {
            return (
              <tr>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td style={{"textAlign":"left"}}> 
                  <strong>{item.Name}</strong>
                  <br />
                  <span style={{"color":"red"}}>{item.price}</span>
                </td>
                <td><button>Watch Now</button></td>
                <td><AiTwotoneDelete size={32} style={{"color":"red"}} onClick={()=>handleBin(item.id)}/></td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default Watch