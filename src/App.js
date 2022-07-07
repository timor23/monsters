import {Component} from "react";
import './App.css';
import CardList from "./Components/Card-list/Card-list";
import SearchBox from "./Components/Search-box/Search-box";

class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            allMonsters: []
        }
    }

    // something for something OMS

    componentDidMount() { //first time render
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => this.setState(() => {
                return {monsters: users, allMonsters: users}
            }, () => {
                // console.log(this.state)
            }))
    }

    onSearchChange = (event) => {
        const filteredMonsters = this.state.allMonsters.filter((monster) => {
            return monster.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        this.setState(() => {
            return {monsters: filteredMonsters}
        })

    }

    render() {
        
        return (<div className="App">
            <h1 className={'app-title'}>Monsters Rolosex</h1>
            <SearchBox
                onChangeHandler={this.onSearchChange}
                placeHolder={'search monsters'}
                className = {'monsters-search-box'}
            />

            <CardList monsters={this.state.monsters} />

        </div>);
    }
}

export default App;
