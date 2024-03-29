import React, { useState } from 'react'
import Data from './Data'
import Navigation from './navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from './movieSlice';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [inputValue, setInputValue] = useState("")
    const [buttonDisable, setButtonDisable] = useState(false)
    const navigate = useNavigate()
    const disableBtn = useSelector((state) => state.movie.disableBtn)
    const dispatch = useDispatch()
    var filteredItem = Data.filter((item) => item.Name.includes(inputValue) || inputValue === "")
    console.log(disableBtn)
    const handleSubmit = (item) => {
        dispatch(addMovie(item))
    }
    return (
        <>
            <Navigation />
            <div className='movie-site'>
                <div className='search-bar'>
                    <input type="tel" placeholder='Enter a movie Name' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </div>
                <div className='container'>
                    {filteredItem.length > 0 ? (
                        filteredItem.map((item, index) => {
                            return <div className='movies' key={index}>
                                <img src={item.image} alt='' />
                                <div className='btn'>
                                    <Link to="https://www.youtube.com/watch?v=xno6lesVMJc"><button style={{ backgroundColor: "#F48625" }}>Watch Now</button></Link>
                                    {disableBtn[item.id] ?
                                        <button style={{ backgroundColor: "red" }}>Added</button> : <button onClick={() => handleSubmit(item)}>Watch Later</button>}

                                </div>
                                <h4 style={{ "color": "#fff" }}>{item.Name}</h4>
                                <p style={{ "color": "red" }}>Budget: {item.price}</p>
                            </div>
                        })
                    ) : (
                        <h1>No Data were found</h1>
                    )}
                </div>
            </div>
        </>
    )
}

export default HomePage
