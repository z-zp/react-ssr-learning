import React, { Component } from 'react'
import Header from '../../conponents/Header'
import { connect } from 'react-redux'
import Loading from '../../conponents/Loading'
import {AddNumberTypes} from '../../redux/addRedux'

class Login extends Component {
  constructor(props) {
    super(props)
  }
  componentDidUpdate(prevProps) {
    const nextProps = this.props

    if (!prevProps.add.fetching && nextProps.add.fetching) {
      // 加载中 TODO something...
      
    }

    if (prevProps.add.fetching && !nextProps.add.fetching) {

      if (!prevProps.add.error && !nextProps.add.error) {
        // 加载成功 TODO something...
        
      }

      if (!prevProps.add.error && nextProps.add.error) {
        // 加载失败 TODO something...

      }
    }
  }


  onClick = () => {
    this.props.addAction({})
  }

  render() {
    const { pathname } = this.props.location
    const { number:data,fetching,error } = this.props.add
    return (
      <div>
        <Header pathname={pathname} />
        <div>
          <h3>{data || 0}</h3>
          <Loading fetching={fetching} error={error} data={data}/>
          <button className={'hellobtn'} onClick={() => { this.onClick() }}>点我</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    add: state.add,
    number: state.add.number
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addAction: (...arg) => dispatch({type:AddNumberTypes.ADD_NUMBER_REQ,...arg}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)