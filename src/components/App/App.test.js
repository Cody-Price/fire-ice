import { App, mapStateToProps, mapDispatchToProps } from './App'
import React from 'react'
import { shallow } from 'enzyme'

describe('App', () => {
  it('should match the snapshot', () => {
    const mockFetchHouses = jest.fn()
    const mockHouses = [{name: 'stark'}, {name: 'tarley'}]
    const wrapper = shallow(<App houses={mockHouses} fetchHouses={mockFetchHouses}/>)
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return an object with the isLoading bool property', () => {
      // Setup
      const mockHouses = [{name: 'stark'}, {name: 'tarley'}]
      const mockState = {
        isLoading: false,
        houses: mockHouses,
        bogusProperty: true
      }

      const expected = {
        isLoading: false,
        houses: mockHouses
      }

      // Execution
      const mappedProps = mapStateToProps(mockState)

      // Expectation
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a fetchHouses thunk when componentDidMount is called', () => {
      // Setup
      const mockDispatch = jest.fn()

      // Execution
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchHouses()

      // Expectaion
      expect(mockDispatch).toHaveBeenCalled()
    })
  })
})