import React from 'react';
import './App.css';
import { youtubeValidator } from './validators/youtube-url.validator';
import MyInput from './component/my-input/MyInput';

function App() {
  return (
    <div className="App">
        <h3>Test</h3>
        <form className="App-form">
          <MyInput
            placeholder={'Введите или скопируйте валидный youtube URL'}
            validator={youtubeValidator}
          />
        </form>
    </div>
  );
}

export default App;
