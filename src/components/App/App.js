import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchHouses } from '../../thunks/fetchHouses'
import { connect } from 'react-redux'
import wolfGif from '../../assets/wolf.gif'
import Card from '../Card'

class App extends Component {

  componentDidMount() {
    this.props.fetchHouses()
  }

  render() {

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          {this.props.isLoading ? wolfGif : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  fetchHouses: () => dispatch(fetchHouses())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
