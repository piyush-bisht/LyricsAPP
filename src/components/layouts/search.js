import React, { Component } from 'react';

import axios from 'axios';
import { Consumer } from "../../context";
class Search extends Component {
    // constructor(props){
    //     super(props);
    //     this.onChange=this.onChange.bind(this);
    // }
    state={
        trackTitle:''
    }
    
    onChange(dispatch,e){
        this.setState({trackTitle:e.target.value});
        let head;
        if(e.target.value===""){
            head="Top 10 Tracks"
            axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=in&f_has_lyrics=1&apikey=8b2beb6a0ccab321687912d41b951668`)
            .then(res=>{
                console.log(res.data);
                dispatch(res.data.message.body.track_list,head);
                
            })

        }
        else{
            head="Search Result"
            axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${this.state.trackTitle}&page_size=10&s_track_rating=desc&apikey=8b2beb6a0ccab321687912d41b951668`)
        .then(res=>{
            console.log(res.data);
            dispatch(res.data.message.body.track_list,head);
            
        
        }
        )
        

        }

        
    }
    render() {
        return (
            <Consumer>
               {    
                   (value=>{
                    const {dispatch}=value;
                       return(
                        
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                                Search For a Song
                            </h1>
                            <p className="lead text-center">
                                Get the Lyrics
    
                            </p>
                        <div className="form-group input-group-sm mb-3">
                            <input type="text" name="trackTitle" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Search any track" onChange={this.onChange.bind(this,dispatch)}/>
                        </div> 
                        
                    </div>
    
    
                            )
                        }
                    )
                }
                        
            </Consumer>
            
        )
    }
}
export default Search;