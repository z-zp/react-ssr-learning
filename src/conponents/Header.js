import React,{Component} from 'react'
import {Link} from 'react-router-dom'

const styles = {
    chooseTab:{
        color:'skyblue',
        textDecoration:'none'
    },
    othersTab:{
        color:'#000',
        textDecoration:'none'
    }
}
export default class Home extends Component {
    constructor(props){
        super(props)
        this.tab = [
            {title:'Home',to:'./',pathname:'/'},
            {title:'Login',to:'./login',pathname:'/login'},
        ]
    }
    onMouseDown=()=>{
        this.props.history.push({
            pathname:'./login'
        })
    }
    render(){
        const {pathname} = this.props
        return( 
        <div>
        {
            this.tab.map((item,index)=>{
                return <Link className={'active'} style={item.pathname === pathname? styles.chooseTab:styles.othersTab} key={item.title} to={item.to}>{item.title}</Link>
            })
        }
        </div>
        )
    }
}