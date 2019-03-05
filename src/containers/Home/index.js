import React,{Component} from 'react'
export default class Home extends Component {
    render(){
        return( 
        <div>
            <h3>Hello, ssr123</h3>
            <button className={'hellobtn'} onClick={()=>{alert('hello')}}>点我</button>
        </div>
        )
    }
}