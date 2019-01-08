import { isLoading, hasErrored, addHousesToStore } from './index'

describe('actions', () => {
  describe('isLoading', () => {
    it('should have a type of IS_LOADING', () => {
      const expected = {
        type: 'IS_LOADING',
        isLoading: false
      }
      const result = isLoading(false)
      expect(result).toEqual(expected)
    })
  })

  describe('hasErrored', () => {
    it('should have a type of HAS_ERRORED', () => {
      const mockMessage = 'there is an error'
      const expected = {
        type: 'HAS_ERRORED',
        message: mockMessage
      }
      const result = hasErrored(mockMessage)
      expect(result).toEqual(expected)
    })
  })

  describe('addHousesToStore', () => {
    it('should have a type of ADD_HOUSES_TO_STORE', () => {
      const mockHouses = [{name: 'stark'}, {name: 'tarley'}]
      const expected = {
        type: 'ADD_HOUSES_TO_STORE',
        houses: mockHouses
      }
      const result = addHousesToStore(mockHouses)
      expect(result).toEqual(expected)
    })
  })
})