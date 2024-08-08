import React, { useEffect, useState } from 'react'
import SongCard from './SongCard'

export default function Songs({songs}) {

    // const [songs, setSongs] = useState([])

    // useEffect(() => {
    //     console.log('Fetching Songs...')
    //     fetch('http://localhost:5555/songs')
    //     .then(res => res.json())
    //     .then(data => setSongs(data))
    
    // }, [])

  return (
    <div>
        <h2>Songs:</h2>
        {songs.map(song => <div> <SongCard key ={song.id} song={song}/></div>)}

    </div>
  )
}
