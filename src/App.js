import React, { Component } from 'react'
import {renderRoutes} from 'react-router-config'
import Header from './conponents/Header'

export default class Home extends Component {

  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname}/>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}