import { React, useState, useEffect } from 'react'
import { getRecord } from '../services/records-api'
import { useParams } from 'react-router-dom'

export function Show() {
  const { id } = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
      getRecord(id).then(res => setData(res.data))
  }, [])
  
  return (
    <div>
        <h1>{data.title}</h1><br/>
    </div>
  )
}