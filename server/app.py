#!/usr/bin/env python3

from flask import request
from models import Song, Favorite

from config import app, db
########################Songs Routes###################################
@app.get('/')
def index():
    return "Routes: GET /music - Top Ten Songs"

@app.get('/songs')
def all_songs():
    all_songs = Song.query.all()
    return [song.to_dict() for song in all_songs], 200

@app.post('/songs')
def add_song():
    data = request.json
    new_song = Song(**data)
    db.session.add(new_song)
    db.session.commit()
    return data, 201

########################Favorites routes########################
@app.get('/favorites')
def favorites():
    all_favorites = Favorite.query.all()
    return [favorite.to_dict() for favorite in all_favorites]

@app.post('/favorites')
def create_favorite():
    data = request.json
    found_song = Favorite.query.where(Favorite.song_id == data['song_id']).first()

    if found_song:
        return {'message':'song already favorited'}, 400
    #need to make a new instance from data collected!!
    new_favorite = Favorite(song_id=data['song_id']) #or Favorite(**data) since keys are consistent
    db.session.add(new_favorite)
    db.session.commit()

    return new_favorite.to_dict(), 201

@app.delete('/favorites/<int:id>')
def delete_favorite(id):
    deleted_song = Favorite.query.get(id)
    if deleted_song is None:
        return {"error": "Favorite not found"}, 404
    
    db.session.delete(deleted_song)
    db.session.commit()

    return {}, 204



if __name__ == '__main__':
    app.run(port=5555, debug=True)