import { React, useState, useEffect } from 'react'
import { getRecords } from '../services/records-api.js'

export function Records() {
  const [recordsArray, setRecords] = useState([]);
  useEffect(() => {
    getRecords()
    .then(res => setRecords(res.data))
  }, [])

  return (
    <div>
      <h1 id='title'>Records List</h1><br/>
      <div className='records'>
        {
          recordsArray.map((e, i) => 
          {
              return (
                <div className='recordDiv' key={i}>
                  <a href={`/${e._id}`} >
                    {e.title} ({e.year})
                    <img src={e.cover} alt=""/><br/></a>
                </div>
              )
          })
        }
      </div>
    </div>
  )
}