 import React, { Component } from 'react';
 import axios from 'axios';
 const Context=React.createContext();
 export  class Provider extends Component {
     state={
         track_list:[],
            heading:"Top 10 tracks",
            dispatch:(trackList,head)=>{
 
                    this.setState({track_list:trackList,heading:head})
            }
     }
     componentDidMount(){
        axios.get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=in&f_has_lyrics=1&apikey=8b2beb6a0ccab321687912d41b951668`
      )
      .then(res => {
         //console.log(res.data.message.body);
         this.setState({track_list:res.data.message.body.track_list});
        
      })
      .catch(err => console.log(err));



     }
     render() {
        return (
            <Context.Provider value={this.state}>     
                {this.props.children}
            </Context.Provider> 
        )
     }
 }

 export const Consumer=Context.Consumer;
  
 