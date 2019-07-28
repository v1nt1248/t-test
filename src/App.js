import React from 'react';
import './App.css';
import { youtubeValidator } from './validators/youtube-url.validator';
import MyInput from './component/my-input/MyInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputRes: null,
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
          <h3>Test</h3>
          <form className="App-form">
            <h4 className="App-form__block-title">
              <code>MyInput</code> component
            </h4>
            <MyInput
              placeholder={'Введите или скопируйте валидный youtube URL'}
              validator={youtubeValidator}
              input={this.onInput}
            />
            <div>
              <h4 className="App-form__block-title">
                Результат:
              </h4>
              { JSON.stringify(this.state.inputRes, null, 2) }
            </div>
          </form>
      </div>
    );
  }
}

export default App;
