import React,{Component} from 'react'

export default class Loading extends Component{
    render(){
        
        const {fetching,error,data} = this.props
        if(fetching){
            return <div>正在加载...</div>
        }
        if(error){
            return <div>加载失败</div>
        }
        if(data){
            return <div>加载成功</div>
        }
        return null
    }
}