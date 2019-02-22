import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';



class Wizard extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      city: '',
      address: '',
      state: '',
      zip: ''
    }
  }

  handleNameUpdate = e => {
    this.setState({
      name: e.target.value
    })
  }
  handleCityUpdate = e => {
    this.setState({
      city: e.target.value
    })
  }
  handleAddressUpdate = e => {
    this.setState({
      address: e.target.value
    })
  }
  handleStateUpdate = e => {
    this.setState({
      state: e.target.value
    })
  }
  handleZipCodeUpdate = e => {
    this.setState({
      zip: e.target.value
    })
    console.log(this.state.zip)
  }

  createHouse(){
    const {name, city, address, state, zip} = this.state
    console.log(name, city, address, state, zip)
    axios.post(`/api/house`, {name, city, address, state, zip}).then(res => {
      this.setState({
        name: '',
        city: '',
        address: '',
        state: '',
        zip: ''
      })
      console.log('this worked bitch', this.state)
    }, this.props.history.push('/'))
  }
  
  render(){
    return(
      <div>
        <h3>Wizard</h3>
        <input placeholder='type'
          onChange={this.handleNameUpdate}
        />
        <input placeholder='city'
          onChange={this.handleCityUpdate}
        />
        <input placeholder='address'
          onChange={this.handleAddressUpdate}
        />
        <input placeholder='state'
          onChange={this.handleStateUpdate}
        />
        <input placeholder='Zip Code'
          onChange={this.handleZipCodeUpdate}
        />
        <Link to="/"><button>Cancel</button></Link>
        <button 
          onClick={() => this.createHouse()}
          >
            Complete
        </button>
      </div>
    )
  }
}

export default Wizard