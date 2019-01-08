import { hasErroredReducer } from '../hasErroredReducer'

describe('hasErroredReducer', () => {
  it('should return the default state', () => {
    const expected = ''

    const result = hasErroredReducer(undefined, {})
    
    expect(result).toEqual(expected)
  })

  it('should return a message if an error occurs', () => {
    const mockAction = {
      type: 'HAS_ERRORED',
      message: 'there is an error'
    }

    const expected = 'there is an error'

    const result = hasErroredReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })
})