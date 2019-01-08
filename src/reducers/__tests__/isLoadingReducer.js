import { isLoadingReducer } from '../isLoadingReducer'

describe('isLoadingReducer', () => {
  it('should return the default state', () => {
    const expected = false

    const result = isLoadingReducer(undefined, {})
    
    expect(result).toEqual(expected)
  })

  it('should return a boolean if directed', () => {
    const mockAction = {
      type: 'IS_LOADING',
      isLoading: true
    }

    const expected = true

    const result = isLoadingReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })
})