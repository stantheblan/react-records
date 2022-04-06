import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getRecord, editRecord } from '../services/records-api'

export function Edit() {
  const { id } = useParams()
  const navigate = useNavigate();
  const [data, setData] = useState({})

  useEffect(() => {
      getRecord(id).then(res => setData(res.data))
  }, [])

  const updateRecord = (e) => {
      e.preventDefault()
      let obj = {
        artist: e.target.artist.value, 
        title: e.target.title.value, 
        cover: e.target.cover.value, 
        year: e.target.year.value, 
        genre: e.target.genre.value, 
      }
      editRecord(id, obj)
      navigate(`/${id}`)
  }
  return (
    <div className='esRecordDiv'>
      <form onSubmit={updateRecord}>
        Artist <input type='text' name='artist' defaultValue={data.artist}/><br/>
        Title <input type='text' name='title' defaultValue={data.title}/><br/>
        Cover Image <input type='text' name='cover' defaultValue={data.cover}/><br/>
        Year <input type='number' name='year' defaultValue={data.year}/><br/>
        Genre <input type='text' name='genre' defaultValue={data.genre}/><br/>
        <input type={'submit'}/>
      </form>
    </div>
  )
}