import React from 'react';
import './App.css';
import MyInput from './component/my-input/MyInput';

function App() {
  return (
    <div className="App">
        <h3>Test</h3>
        <form className="App-form">
          <MyInput
            placeholder={'Введите или скопируйте валидный youtube URL'}
          />
        </form>
    </div>
  );
}

export default App;
