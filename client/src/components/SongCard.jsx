import React from 'react'

export default function SongCard({song, key, favorite, removeFavorite}) {

    function handlePostFavorite() {
        fetch('http://localhost:5555/favorites', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify( { song_id: song.id } ) ///song.id from prop
        })
    }

    function handleDeleteFavorite(){
        fetch(`http://localhost:5555/favorites/${favorite.id}`, {
            method:'DELETE'
        })
        removeFavorite(favorite)
    }
  return (
    <div >
        <h3>{song.title}</h3>
        <button className ="favorite-button" onClick={favorite ? handleDeleteFavorite : handlePostFavorite}>{favorite ? "-" : "+"}</button> 
        <p>{song.artist}</p>
        <a href = {song.youtube_link}>Link</a>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${song.youtube_embed}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>   
    </div>
  )
}
