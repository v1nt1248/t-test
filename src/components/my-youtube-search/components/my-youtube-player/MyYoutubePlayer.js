import React from 'react';
import './MyYoutubePlayer.css';

class MyYoutubePlayer extends React.Component {
    render() {
        let videoSrc = `https://www.youtube.com/embed/${this.props.videoId}`;

        return (
            <div className="MyYoutubePlayer">
                { this.props.videoId &&
                    <div className="MyYoutubePlayer__content">
                        <iframe src={videoSrc} allowFullScreen title='Video player'/>
                    </div>
                }
                { !this.props.videoId &&
                    <div className="MyYoutubePlayer__placeholder">
                        Не выбрано youtube-видео для отображения
                    </div>
                }
            </div>
        )
    }
}

export default MyYoutubePlayer;
