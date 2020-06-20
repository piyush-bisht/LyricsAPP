import React from 'react'
import {Link } from 'react-router-dom';
const Track=(props) =>{
    const {track }=props;
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h4>{track.track_name}</h4>
                    <br/>
                    <p className="card-text">
                        <i className="fas fa-music"></i> {track.artist_name}
                    </p>
                    <p className="card-text">
                        Album:{track.album_name}
                    </p>
                    <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">
                    View Lyrics    
                    </Link>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Track;
