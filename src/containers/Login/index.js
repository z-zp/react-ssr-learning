import React, { Component } from 'react'
import Header from '../../conponents/Header'
import { connect} from 'react-redux'
class Login extends Component {
  constructor(props) {
    super(props)
  }
  onClick=()=>{
    this.props.addAction({type:'ADD_NUMBER'})
  }
  render() {
    const { pathname } = this.props.location
    const {number} = this.props
    return (
      <div>
        <Header pathname={pathname} />
        <div>
          <h3>{number}</h3>
          <button className={'hellobtn'} onClick={() => {this.onClick()}}>点我</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    number:state.add.number
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    addAction: (...arg)=>dispatch(...arg),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)