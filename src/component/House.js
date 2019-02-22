import React from 'react'


export default function House(props) {
  const {address, property_name, state, zip, city, deleteProperty, propertyId} = props
  // console.log(11111, house)
  return (
    <div>
      <h2>House</h2>
      <p>Property Type: {property_name}</p>
      <p>Address: {address}</p>
      <p>State: {state}</p>
      <p>City: {city}</p>
      <p>Zip Code: {zip}</p>
      <button onClick={() => deleteProperty(propertyId)}>Delete</button>

    </div>
  )
}