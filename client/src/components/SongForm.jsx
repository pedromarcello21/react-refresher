import React from 'react'
import NavBar from './NavBar'


export default function SongForm({songs, setSongs}) {

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:5555/songs', {
            method:"POST", 
            headers:{
                "Content-type":'application/json'
            },
        body:JSON.stringify({
            title:e.target.title.value,
            artist:e.target.artist.value,
            youtube_link:e.target.link.value,
            youtube_embed:e.target.embed.value
        })
    })
        .then(res => res.json())
        .then(data => setSongs([...songs, data]))
    }
  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <span>Title:<input type="text" name='title'></input></span><br/>
            <span>Artist:<input type="text" name='artist'></input></span><br/>
            <span>Youtube link:<input type="text" name='link'></input></span><br/>
            <span>Youtube embed:<input type="text" name='embed'></input></span><br/>

            <button type='submit' >Add Song</button>
        </form>
    </div>
  )
}
