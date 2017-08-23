import React, { Component } from 'react';
import './App.css';

//An array of objects to filter
const villains = [
 {
  id: 1,
  name: 'The Hand',
  description: 'A supervillain organization.'
 },
 {
   id: 2,
  name: 'Kingpin',
  description: 'Supervillain Wilson Fisk'
   },

   {
    id: 3,
    name: 'Purple Man',
    description: 'Kilgrave'
     }
]

function searchingFor(term) {
  return function(x){
    return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        villains: villains,
        term: '',
      }
        this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({term: event.target.value})
  }

  render() {
    const {term, villains} = this.state;
    return (
      <div className="App">
          <form>
            <input type="text"
              onChange={this.searchHandler}
            />
          </form>
        {
          villains.filter(searchingFor(term)).map(enemy =>
                <div key={enemy.id}>
                  <h1>{enemy.name}</h1>
                  <p> {enemy.description}</p>
          </div>
              )
        }
      </div>
    );
  }
}

export default App;
