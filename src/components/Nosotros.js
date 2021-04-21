import React from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import DogCard from './DogCard'
import SearchDog from './SearchDog'
import axios from 'axios'

class Nosotros extends React.Component {

  constructor() {
    super()
    this.state = {
      dogs: null
    }
  }


  componentDidMount(){
    axios('https://api.thedogapi.com/v1/breeds')
      .then(res => this.setState({ dogs: res.data }))
  }


  render() {
    if(!this.state.dogs) return <Loading />
    return (
      <section className="section" id="dog_section">
        <div className="container">
          <SearchDog dogs={this.state.dog}/>
          <br />
          <br />
        </div>

      </section>
    )
  }
}
export default Nosotros
