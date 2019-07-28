import React from 'react';
import './App.css';
import { youtubeValidator } from './validators/youtube-url.validator';
import MyInput from './components/my-input/MyInput';
import MyYoutubeSearch from './components/my-youtube-search/MyYoutubeSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputRes: null,
      selected: null,
    };
  }

  onInput = (e) => {
    this.setState({
      inputRes: e,
    });
  }

  render() {
    return (
      <div className="App">
          <div className="App-content">
            <h3>Test</h3>
            <h4 className="App-form__block-title">
              <code>MyInput</code> component
            </h4>
            <MyInput
              placeholder={'Введите или скопируйте валидный youtube URL'}
              validator={youtubeValidator}
              change={this.onInput}
            />
            <div>
              <h4 className="App-form__block-title">
                Результат:
              </h4>
              { JSON.stringify(this.state.inputRes, null, 2) }
            </div>
        </div>
        <br/><br/>

        <h4 className="App-form__block-title">
          <code>MyYoutubeSearch</code> component
        </h4>
        <MyYoutubeSearch/>
      </div>
    )
  }
}

export default App;
