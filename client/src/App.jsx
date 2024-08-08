import Songs from './components/Songs'
import NavBar from './components/NavBar'
import SongForm from './components/SongForm'
import {useState, useEffect} from 'react'

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
      console.log('Fetching Songs...')
      fetch('http://localhost:5555/songs')
      .then(res => res.json())
      .then(data => setSongs(data))
  
  }, [])

  return (
    <div>
      <NavBar/>
      <h1>Top 10 Songs of 2023</h1>
      <Songs songs = {songs}/>
      <SongForm songs = {songs} setSongs = {setSongs}/>

    </div>
  )
}

export default App