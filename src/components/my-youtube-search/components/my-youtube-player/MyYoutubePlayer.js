import React from 'react';
import './MyYoutubePlayer.css';

class MyYoutubePlayer extends React.Component {
    render() {
        return (
            <div className="MyYoutubePlayer">
                Youtube player
                { this.props.videoId }
            </div>
        )
    }
}

export default MyYoutubePlayer;
