import React, { Component } from 'react'
import Header from '../../conponents/Header'
import { connect} from 'react-redux'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state={
      loading:''
    }
  }
  componentDidUpdate(prevProps){
    const nextProps = this.props
    if(!prevProps.add.fetching && nextProps.add.fetching){
      this.setState({
        loading:'loading ...'
      })
    }
    if(prevProps.add.fetching && !nextProps.add.fetching){
      if(!prevProps.add.error && !nextProps.add.error){
        this.setState({
          loading:'loading success'
        })
      }
      if(!prevProps.add.error && nextProps.add.error){
        this.setState({
          loading:'loading error'
        })
      }
    }

  }
  onClick=()=>{
    this.props.addAction({type:'ADD_NUMBER_REQ'})
  }
  render() {
    const { pathname } = this.props.location
    const {number} = this.props.add
    const {loading} = this.state
    return (
      <div>
        <Header pathname={pathname} />
        <div>
          <h3>{number}</h3>
          <div>{this.state.loading}</div>
          <button className={'hellobtn'} onClick={() => {this.onClick()}}>点我</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    add:state.add,
    number:state.add.number
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    addAction: (...arg)=>dispatch(...arg),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)