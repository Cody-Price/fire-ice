import { isLoading, hasErrored } from '../actions/index'

export const fetchSwornMembers = (membersArray) => {
  membersArray.map(member => {
    const memberID = member.split('/')[5]
    const url = `http://localhost:3001/api/v1/character/:${memberID}`
    return async (dispatch) => {
      try {
        dispatch(isLoading(true))
        const response = await fetch(url)
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(isLoading(false))
        const data = await response.json()
        console.log(data)
      } catch (error) {
        dispatch(hasErrored(error.message))
      }
    }
  })
}