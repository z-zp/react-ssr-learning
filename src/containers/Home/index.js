import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import {Helmet} from 'react-helmet'
import api from '../../api/api'
import {AddNumberTypes} from '../../redux/addReducer'
import {addNumberAction} from '../../redux/actions'
import Loading from '../../conponents/Loading'
import styles from './index.css'
import WithStyles from '../common/WithStyles'
class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount(){
    this.props.addAction()
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
    this.props.addAction()
  }

  render() {
    const { pathname } = this.props.location
    const { number:data,fetching,error } = this.props.add
    return (
      <Fragment>
      <Helmet>
        <title>home</title>
        <meta name='description' content={'这是home'}></meta>
      </Helmet>
      <div className={styles.div}>
          <h3>{data || 0}</h3>
          <Loading fetching={fetching} error={error} data={data}/>
          <button className={'hellobtn'} onClick={() => { this.onClick() }}>点我</button>
      </div>
      </Fragment>
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
    addAction: (arg) => dispatch(addNumberAction(arg)),
  }
}


const ExportHome = connect(mapStateToProps, mapDispatchToProps)(WithStyles(Home,styles))
ExportHome.loadData = (store)=>{
  return new Promise((resolve, reject)=>{
    resolve(api.getNumber({obj:{}, server:true}))
  }).then((data)=>{
    return store.dispatch({
      type: AddNumberTypes.SERVER_ADD_NUMBER_REQ,
      obj:{number:data.data.number},
      server:true
    })
    
  })
}
export default ExportHome