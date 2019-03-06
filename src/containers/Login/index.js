import React,{Component} from 'react'
import Header from '../../conponents/Header'
export default class Home extends Component {
    constructor(props){
        super(props)
       
    }
    render(){
        const {pathname} = this.props.location
        return(
             
        <div>
        <Header pathname={pathname}/>
        <div>
            <h3>Hello, login</h3>
            <button className={'hellobtn'} onClick={()=>{alert('hello')}}>点我</button>
        </div>
        </div>
        )
    }
}