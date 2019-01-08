import React from 'react'
import { fetchSwornMembers } from '../../thunks/fetchSwornMembers'
import { connect } from 'react-redux'

const Card = ({house}) => {

  return (
    <div className="Card" onClick={fetchSwornMembers}>
      <h2>{house.name}</h2>
      <p>{house.seats}</p>
      <p>{house.titles}</p>
      <p>{house.coatOfArms}</p>
      <p>{house.ancestralWeapons}</p>
      <p>{house.words}</p>
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  fetchSwornMembers: () => dispatch(fetchSwornMembers())
})

export default connect(null, mapDispatchToProps)(Card)

// name: house.name,
// seats: seats,
// titles: titles,
// coatOfArms: house.coatOfArms,
// ancestralWeapons: ancestralWeapons,
// words: house.words