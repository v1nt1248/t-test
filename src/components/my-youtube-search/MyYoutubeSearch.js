import React from 'react';
import './MyYoutubeSearch.css';
import { debounce } from '../../helpers/debounce';
import MyInput from '../my-input/MyInput';
import { youtubeSearchService } from '../../services/youtube.service';

class MyYoutubeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
        };
    }

    onInput = (e) => {
        youtubeSearchService(e.value)
            .then(res => console.log('Res: ', res))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="MyYoutubeSearch">
                <div className="MyYoutubeSearch_search">
                    <MyInput
                        placeholder="Введите ключевое слово для поиска видео"
                        change={debounce(this.onInput, 250)}
                    />
                </div>
            </div>
        )
    };
}

export default MyYoutubeSearch;
