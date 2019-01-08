import { housesReducer } from '../housesReducer'

describe('housesReducer', () => {
  it('should return the default state', () => {
    const expected = []

    const result = housesReducer(undefined, {})
    
    expect(result).toEqual(expected)
  })

  it('should return houses if directed', () => {
    const mockHouses = [{name: 'stark'}, {name: 'tarley'}]
    const mockAction = {
      type: 'ADD_HOUSES_TO_STORE',
      houses: mockHouses
    }

    const expected = [{name: 'stark'}, {name: 'tarley'}]

    const result = housesReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })
})