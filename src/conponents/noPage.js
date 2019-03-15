import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
export default class NoPage extends Component {

  render() {
    // staticContext只有服务端存在
    this.props.staticContext && (this.props.staticContext.noPage = true)
    return (
      <div>
       404
       <Redirect to='/'></Redirect>
      </div>
    )
  }
}