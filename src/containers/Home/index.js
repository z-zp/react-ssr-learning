import React,{Component} from 'react'
export default class Home extends Component {
    constructor(props){
        super(props)
    }
    onMouseDown=()=>{
        this.props.history.push({
            pathname:'./login'
        })
    }
    render(){
        return( 
        <div onMouseDown={()=>{this.onMouseDown()}}>
            <h3>Hello, ssr123</h3>
            <button className={'hellobtn'} onClick={()=>{alert('hello')}}>点我</button>
        </div>
        )
    }
}