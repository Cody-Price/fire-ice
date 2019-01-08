import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchHouses } from '../../thunks/fetchHouses'
import { connect } from 'react-redux'
import Wolf from '../Wolf/Wolf'
import Card from '../Card/Card'

export class App extends Component {

  componentDidMount() {
    this.props.fetchHouses()
  }

  render() {
    const displayedHouses = this.props.houses.map(house => {
      return <Card house={house} />
    })
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info Container'>
          {this.props.isLoading ? <Wolf /> : displayedHouses}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  houses: state.houses
})

export const mapDispatchToProps = (dispatch) => ({
  fetchHouses: () => dispatch(fetchHouses())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
