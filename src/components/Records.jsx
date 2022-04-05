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
      <h1>Records List</h1>
      {
        recordsArray.map((e, i) => 
        {
            return (
                <a href={`/${e._id}`} key={i}>{e.title}<br/></a>
            )
        })
      }
    </div>
  )
}