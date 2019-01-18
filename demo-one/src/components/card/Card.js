import React, { Component } from 'react'

class Card extends Component{
    style={
        display:"flex",
        flexDirection:"column",
        flex:"0 0 35%",
        margin:"0 8%"
    }

    render(){
        return(
            <div style={this.style}>
                <div style={{color:"red", textAlign:"center", fontSize:"2.5vw"}}>{this.props.title}</div>
                <hr style={{width:"100%"}}/>
                <p style={{fontSize:"1.5vw"}}>{this.props.content}</p>
            </div>
        )
    }
}

export default Card