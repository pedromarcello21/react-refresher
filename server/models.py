from config import db
from sqlalchemy_serializer import SerializerMixin

class Song(db.Model, SerializerMixin):

    __tablename__ = 'songs_table'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    artist = db.Column(db.String)
    youtube_link = db.Column(db.String)
    youtube_embed = db.Column(db.String)

    favorites = db.relationship('Favorite', back_populates='song')

    serialize_rules=("-favorites.song",)


class Favorite(db.Model, SerializerMixin):

    __tablename__= 'favorites_table'

    id = db.Column(db.Integer, primary_key=True)
    song_id = db.Column(db.Integer, db.ForeignKey('songs_table.id'))

    song = db.relationship('Song', back_populates='favorites')

    serialize_rules=("-song.favorites",)
