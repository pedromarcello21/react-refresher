import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import SongCard from './SongCard'

export default function Favorites() {

    const [favorites, setFavorites] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5555/favorites') //is speaking to app.py
        .then(res => res.json())
        .then(data => setFavorites(data)) //last part is to set state based on what you're calling for
    }, [])

    function removeFavorite(favoriteToRemove){
        const filteredFavorites = favorites.filter(
          favorite => favorite !== favoriteToRemove)
        setFavorites(filteredFavorites)
    }

  return (
    <div>
        <NavBar/>
        <h2>Favorites</h2>
        {favorites.map(favorite => <SongCard key = {favorite.id} song = {favorite.song} favorite = {favorite} removeFavorite = {removeFavorite}/>) }
    </div>
  )
}
