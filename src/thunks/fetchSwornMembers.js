import { isLoading, hasErrored, addHousesToStore } from '../actions/index'
import { cleanHouses } from '../utilities/helper'

export const fetchSwornMembers = (membersArray) => {
  const url = 'http://localhost:3001/api/v1/houses'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const data = await response.json()
      const cleanedHouses = cleanHouses(data)
      dispatch(addHousesToStore(cleanedHouses))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}