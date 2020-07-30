
import React, {Component} from 'react';
import { connect } from 'react-redux';



const SongDetail = ({song}) => {
    if(!song){
    return <div>select song  </div>
}  
    return (
    <div>
        <h3> Details for:</h3>
        <p>
            Title : {song.title}
            <br />
        Duration: {song.duration}
        </p>
    </div>
    );
}

const mapStatToProps = (state) =>{    
    return {song: state.selectedSong};

}
export default connect(mapStatToProps)(SongDetail);