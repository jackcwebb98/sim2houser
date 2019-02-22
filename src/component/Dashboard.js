import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import House from './House'
import axios from 'axios'



class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      houses: []
    }
    this.deleteProperty = this.deleteProperty.bind(this)
  }

  componentDidMount(){
    axios.get(`/api/houses`).then(res => {
      this.setState({
        houses: res.data
      })
      // console.log(res)
    })
  }

  deleteProperty(id){
    // console.log(id)
    axios.delete(`/api/house/${id}`).then(res => {
      this.setState({
        houses: res.data
      })
    })
  }


  render(){
    const mappedHouses = this.state.houses.map((house, id) => {
      // console.log(÷house)
      return (
        <House key={id}
          house = {house}
          propertyId = {house.property_id}
          address = {house.address}
          property_name = {house.property_name}
          state = {house.state}
          zip = {house.zip}
          city = {house.city}
          deleteProperty = {this.deleteProperty}
        />
      )
    })
    return(
      <div>
        <h3>{mappedHouses}</h3>
        <Link to="/wizard"><button>Add New Property</button></Link>
      </div>
    )
  }
}

export default Dashboard