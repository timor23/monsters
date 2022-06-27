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
            monsters: []
        }
    }

    // something for something OMS

    componentDidMount() { //first time render
        console.log('componentDidMount')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => this.setState(() => {
                return {monsters: users}
            }, () => {
                // console.log(this.state)
            }))
    }

    render() {
        console.log('render')

        return (<div className="App">
            <input className={'search-box'} type="search" placeholder={'search monsters'}
                onChange={(event)=> {
                    console.log(event.target.value)
                    const filteredMonsters = this.state.monsters.filter((monster) => {
                        const chunk = monster.name.slice(0,event.target.value.length)
                        console.log(chunk)
                        return (event.target.value === chunk)
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
