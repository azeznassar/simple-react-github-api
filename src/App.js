import React from 'react';
import InputForm from './components/InputForm/InputForm';
import './App.css';


class App extends React.Component {
    render(){
        return (
            <div className="app">
                <h2>Github profile lookup</h2>
                <InputForm />
            </div>
        );
    }
}

export default App;