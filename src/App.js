import {Component} from "react";
import './App.css';

class App extends Component {

    constructor() {
        super();
        console.log('constructor')
        this.state = {
            // monsters: [{
            //     name: 'Linda', id: '4356htgr'
            // }, {
            //     name: 'Frank', id: '766gbd37g'
            // }, {
            //     name: 'Jacky', id: 'nhegf764e3t'
            // }, {
            //     name: 'Frank', id: 'ed3f4f4'
            // }]
            monsters: [],
            allMonsters: []
        }
    }

    // something for something OMS

    componentDidMount() { //first time render
        console.log('componentDidMount')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => this.setState(() => {
                return {monsters: users, allMonsters: users}
            }, () => {
                // console.log(this.state)
            }))
    }

    render() {
        return (<div className="App">
            <input className={'search-box'}
                   type="search"
                   placeholder={'search monsters'}
                   onChange={(event) => {
                       const filteredMonsters = this.state.allMonsters.filter((monster) => {
                           return monster.name.toLowerCase().includes(event.target.value.toLowerCase())
                       })
                       this.setState(() => {
                           return {monsters: filteredMonsters}
                       })

                   }}/>


            {this.state.monsters.map((monster) => {
                return (<div key={monster.id}>
                    <h1 key={monster.id}>{monster.name}</h1>
                </div>)
            })}
        </div>);
    }
}

export default App;
