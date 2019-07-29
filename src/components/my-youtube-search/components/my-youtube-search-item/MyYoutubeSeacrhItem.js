import React from 'react';
import './MyYoutubeSeacrhItem.css';

class MyYoutubeSeacrhItem extends React.Component {
    selectItem = (data) => {
        if (this.props.select) {
            this.props.select(data);
        }
    }

    render() {
        return (
            <div className="MyYoutubeSeacrhItem" onClick={() => this.selectItem(this.props.data)}>
                <div className="MyYoutubeSeacrhItem_preview" style={{backgroundImage: 'url(' + this.props.data.snippet.thumbnails.default.url + ')'}}>
                </div>

                <div className="MyYoutubeSeacrhItem_info">
                    <h4 className="MyYoutubeSeacrhItem_info-title">
                        { this.props.data.snippet.title }
                    </h4>
                    <div className="MyYoutubeSeacrhItem_info-description">
                        { this.props.data.snippet.description }
                    </div>
                </div>
            </div>
        )
    }
}

export default MyYoutubeSeacrhItem;
