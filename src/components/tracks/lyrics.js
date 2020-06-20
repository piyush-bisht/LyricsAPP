import React, { Component } from 'react'
import axios from 'axios';
import Spinner from "../layouts/spinner";
import {Link}  from 'react-router-dom';

class Lyrics extends Component {
    state={
        track:{},
        lyrics:{}
    };
  
    componentDidMount(){
        var id=this.props.match.params.id;
            axios.get(
                `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=8b2beb6a0ccab321687912d41b951668`
              )
              .then(res => {
                 this.setState({lyrics:res.data.message.body.lyrics});
                 return axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=8b2beb6a0ccab321687912d41b951668`) 
              })
              .then(res=>{
                  console.log(res.data);
                  this.setState({track:res.data.message.body.track})
              })
              .catch(err => console.log(err));   
    }

    render() {
        const {track,lyrics} =this.state;
        //console.log(this.state.lyrics);
        if(track===undefined||lyrics===undefined||Object.keys(lyrics).length===0||Object.keys(track).length===0)
        {
            return(<Spinner/>);
        }
        else{
            return (<React.Fragment>
                <div className="card">
                    <h4 className="card-header">{track.track_name} - <span className="text-secondary">{track.artist_name}</span></h4>
                    <div className="card-body">
                        <p className="card-text">{this.state.lyrics.lyrics_body}</p>
                    </div>
                    
                </div>
                <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
                <ul className="list-group mt-3">
                    <li className="list-group-item">
                        <strong>Album</strong>:{track.album_name}
                    </li>
                    {/* <li className="list-group-item">
                        <strong>Genre</strong>:{track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                    </li> */}
                    <li className="list-group-item">
                        <strong>Explicit</strong>:{track.explicit === 0 ?"No":"Yes"}
                    </li>
                    {/* <li className="list-group-item">
                        <strong>Year</strong>:<Moment> format="MM-DD-YYYY"{track.first_release_date}</Moment>
                    </li> */}

                </ul>
                </React.Fragment>
            )
                
            
        }  
    }
}
export default Lyrics;