import {Component} from "react";

import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            name: {firstName: 'Jakooz', lastName: 'Abdullah'},
            age: 45
        }
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Hello {this.state.name.firstName} {this.state.name.lastName}, you're {this.state.age} years old
                    </p>
                    <button onClick={() => {
                        // this.setState({name : {firstName: "Timor", lastName: 'Sladeen'}})
                        // this.setState({age : 36})
                        this.setState(() => {
                            return {
                                name: {firstName: "Timor", lastName: 'Sladeen'},
                                age: 36
                            }
                        }, () => {
                            console.log(this.state)
                        })
                        console.log(this.state)
                        console.log('gggg')

                    }
                    }>Change Name
                    </button>
                </header>
            </div>
        );
    }
}

export default App;
