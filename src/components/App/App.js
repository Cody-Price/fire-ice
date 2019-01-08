import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchHouses } from '../../thunks/fetchHouses'
import { connect } from 'react-redux'
import wolfGif from '../../assets/wolf.gif'
import Card from '../Card/Card'
import PropTypes from 'prop-types'

export class App extends Component {

  componentDidMount() {
    this.props.fetchHouses()
  }

  render() {
    const displayedHouses = this.props.houses.map(house => {
      return <Card house={house} key={house.name}/>
    })
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info Container'>
          {this.props.isLoading ? <img src={wolfGif} alt="loading..." id="wolf"/> : displayedHouses}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  houses: PropTypes.array.isRequired,
  fetchHouses: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  houses: state.houses
})

export const mapDispatchToProps = (dispatch) => ({
  fetchHouses: () => dispatch(fetchHouses())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
