import json
from config import app, db
from models import Song

if __name__ == '__main__':
    with app.app_context():

        Song.query.delete()
        db.session.commit()

        json_seed = open("seed.json")
        data = json.load(json_seed)

        for song_item in data['music']:
            print(f'Creating song {song_item["title"]}...')
            s = Song(title=song_item['title'], 
                     artist=song_item['artist'], 
                     youtube_link=song_item['youtube_link'], 
                     youtube_embed=song_item['youtube_embed'])
            db.session.add(s)

        db.session.commit()

        json_seed.close()