import React, { useState } from 'react'
import Data from './Data'

const App = () => {
  const [inputValue, setInputValue] = useState("All")
  return (
    <div className='movie-site'>
      <div className='search-bar'>
        <input type="tel" placeholder='Enter a movie Name' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button>Search</button>
      </div>
      <div className='container'>
        {Data.map((item, index) => {
          if (inputValue === "All" || inputValue=== null)
            return (
              <div className='movies'>
                <img src={item.image} />
                <h4>{item.Name}</h4>
                <p>{item.price}</p>
              </div>
            )
          else {
            if (item.Name.includes(inputValue)) {
              return (
                <div className='movies'>
                  <img src={item.image} />
                  <h4>{item.Name}</h4>
                  <p>{item.price}</p>
                </div>
              )
            }
          }
        })}
      </div>
    </div>
  )
}

export default App