import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Character from "./components/Character";

class App extends React.Component{
  constructor() {
    super ()
    this.state = {
      characters: [],
      favorites : []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
    .then(result => result.json())
    .then(result => this.setState({characters: result}))
  }
  render(){
    console.log(" le state",this.state.characters);
    return (
      <div className="container">*
        <h1 className="text-center">Game of thrones</h1>
        <div className="row">
          {this.state.characters.map((personnage , index) => personnage =<Character image={personnage.imageUrl} name={personnage.fullName} title={personnage.title} /> )}
        </div>  
      </div>
    )
  }
}
export default App;
