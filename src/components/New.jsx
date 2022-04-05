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
      <div> 
          <form onSubmit={addNewRecord}>
            <input type='text' name='artist' />
            <input type='text' name='title' />
            <input type='text' name='cover' />
            <input type='number' name='year' />
            <input type='text' name='genre' />
            <input type={'submit'}/>
          </form>
      </div>
  )
}