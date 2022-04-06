import { React, useState, useEffect } from 'react'
import { deleteRecord, getRecord } from '../services/records-api'
import { useNavigate, useParams } from 'react-router-dom'

export function Show() {
  const { id } = useParams()
  const nav = useNavigate();
  const [data, setData] = useState({})

  useEffect(() => {
      getRecord(id).then(res => setData(res.data))
  }, [])

  const deleteTheRecord = () => {
    deleteRecord(id)
    nav("/")
  }
  
  return (
    <div className='esRecordDiv'>
        <h1>{data.title}</h1><br/>
        <img src={data.cover} alt=""/><br/>
        Artist: {data.artist}<br/>
        Year: {data.year}<br/>
        Genre: {data.genre}<br/>
        <button onClick={deleteTheRecord}>Delete</button>
        <button onClick={()=>{nav(`/${id}/edit`)}}>Edit</button>
    </div>
  )
}