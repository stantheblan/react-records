import React from 'react'
import {useNavigate} from 'react-router-dom'
import {createRecord} from '../services/records-api'

export function New() {
    let nav = useNavigate()
    const addNewRecord = (e) => {
        e.preventDefault()
        let obj = {
            artist: e.target.artist.value, 
            title: e.target.title.value, 
            cover: e.target.cover.value, 
            year: e.target.year.value, 
            genre: e.target.genre.value, 
        }
        console.log(obj)
        createRecord(obj)
        nav('/')
    }
  return (
      <div className='esRecordDiv'> 
          <form onSubmit={addNewRecord}>
            Artist <input type='text' name='artist' /><br/>
            Title <input type='text' name='title' /><br/>
            Cover <input type='text' name='cover' /><br/>
            Year <input type='number' name='year' /><br/>
            Genre <input type='text' name='genre' /><br/>
            <input type={'submit'}/>
          </form>
      </div>
  )
}