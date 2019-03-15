import React, { Component } from 'react'

export default(WrappedComponent,styles)=>{
    return class WithStyle extends Component {
        componentWillMount(){
          // 服务器端渲染
          if(styles._getCss){
            this.props.staticContext.css.push(styles._getCss())
          }
        }   
        render() {
          return (
              <WrappedComponent {...this.props}/>
          )
        }
      }
}


