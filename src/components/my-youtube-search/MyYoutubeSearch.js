import React from 'react';
import './MyYoutubeSearch.css';
import { debounce } from '../../helpers/debounce';
import MyInput from '../my-input/MyInput';
import MyYoutubeSearchItem from './components/my-youtube-search-item/MyYoutubeSeacrhItem';
import MyYoutubePlayer from './components/my-youtube-player/MyYoutubePlayer';
import { youtubeSearchService } from '../../services/youtube.service';

class MyYoutubeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoList: [],
            selected: null,
        };
    }

    onInput = (e) => {
        youtubeSearchService(e.value)
            .then(res => {
                this.setState({
                    videoList: res.items || [],
                });
            })
            .catch(err => console.error(err));
    }

    onSelect = (e) => {
        this.setState({
            selected: e.id.videoId,
        });
    }

    render() {
        const videoList = this.state.videoList || [];
        return (
            <div className="MyYoutubeSearch">
                <div className="MyYoutubeSearch__search-block">
                    <div className="MyYoutubeSearch__search">
                        <MyInput
                            placeholder="Введите ключевое слово для поиска видео"
                            change={debounce(this.onInput, 250)}
                        />

                    <div className="MyYoutubeSearch__search-results">
                            {
                                videoList.map((item) =>
                                    <div className="MyYoutubeSearch__search-item" key={item.id.videoId}>
                                        <MyYoutubeSearchItem data={item} select={this.onSelect}/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="MyYoutubeSearch__player-block">
                    <div className="MyYoutubeSearch__player-wrapper">
                        <MyYoutubePlayer videoId={this.state.selected}/>
                    </div>
                </div>

            </div>
        )
    };
}

export default MyYoutubeSearch;
