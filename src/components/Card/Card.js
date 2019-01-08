import React from 'react'
import { fetchSwornMembers } from '../../thunks/fetchSwornMembers'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Card = ({house, fetchSwornMembers}) => {

  return (
    <div className="Card" onClick={() => fetchSwornMembers(house.swornMembers)}>
      <h2>{house.name}</h2>
      <p>{house.seats}</p>
      <p>{house.titles}</p>
      <p>{house.coatOfArms}</p>
      <p>{house.ancestralWeapons}</p>
      <p>{house.words}</p>
    </div>
  )
}

Card.propTypes = {
  house: PropTypes.object.isRequired,
  fetchSwornMembers: PropTypes.func.isRequired
}

export const mapDispatchToProps = (dispatch) => ({
  fetchSwornMembers: (membersArray) => dispatch(fetchSwornMembers(membersArray))
})

export default connect(null, mapDispatchToProps)(Card)